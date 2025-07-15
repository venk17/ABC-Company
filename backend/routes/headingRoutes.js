const express = require('express');
const router = express.Router();
const Heading = require('../models/Heading');

// Input validation middleware
const validateHeading = (req, res, next) => {
  const { heading } = req.body;
  
  if (!heading || typeof heading !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Heading is required and must be a string'
    });
  }
  
  if (heading.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Heading cannot be empty'
    });
  }
  
  if (heading.length > 500) {
    return res.status(400).json({
      success: false,
      message: 'Heading cannot exceed 500 characters'
    });
  }
  
  next();
};

// GET /api/headings - Get the latest active heading
router.get('/', async (req, res) => {
  try {
    const heading = await Heading.findOne({ isActive: true })
      .sort({ createdAt: -1 })
      .select('heading createdAt updatedAt');
    
    if (!heading) {
      return res.status(200).json({
        success: true,
        data: {
          heading: 'Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI'
        },
        message: 'Default heading returned'
      });
    }
    
    res.status(200).json({
      success: true,
      data: heading,
      message: 'Heading retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching heading:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching heading',
      error: error.message
    });
  }
});

// POST /api/headings - Create a new heading
router.post('/', validateHeading, async (req, res) => {
  try {
    const { heading } = req.body;
    
    // Deactivate all previous headings
    await Heading.updateMany({}, { isActive: false });
    
    // Create new heading
    const newHeading = new Heading({
      heading: heading.trim(),
      isActive: true
    });
    
    const savedHeading = await newHeading.save();
    
    res.status(201).json({
      success: true,
      data: savedHeading,
      message: 'Heading created successfully'
    });
  } catch (error) {
    console.error('Error creating heading:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.message
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error creating heading',
      error: error.message
    });
  }
});

// GET /api/headings/all - Get all headings (for admin purposes)
router.get('/all', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const headings = await Heading.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('heading isActive createdAt updatedAt');
    
    const total = await Heading.countDocuments();
    
    res.status(200).json({
      success: true,
      data: {
        headings,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
      },
      message: 'All headings retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching all headings:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching headings',
      error: error.message
    });
  }
});

module.exports = router;