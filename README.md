# ABC Company Website with CMS

A full-stack web application featuring a pixel-perfect landing page with a content management system for dynamic heading updates.

## 🚀 Features

- **Pixel-perfect Landing Page**: Responsive design matching the provided Figma specifications
- **Content Management System**: Easy-to-use interface for updating website content
- **Real-time Updates**: Changes in CMS are reflected on the website
- **MongoDB Integration**: Persistent storage with MongoDB Atlas
- **RESTful API**: Clean API endpoints for data management
- **Responsive Design**: Optimized for all screen sizes and devices
- **Input Validation**: Comprehensive validation on both frontend and backend
- **Error Handling**: Robust error handling with user-friendly messages

## 🛠 Tech Stack

### Frontend
- **React.js 18** - Modern JavaScript library for building user interfaces
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS3** - Custom styling with responsive design
- **JavaScript (ES6+)** - No TypeScript as requested

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Express Rate Limit** - Rate limiting middleware

## 📁 Project Structure

```
abc-company-website/
├── backend/
│   ├── models/
│   │   └── Heading.js          # MongoDB schema for headings
│   ├── routes/
│   │   └── headingRoutes.js    # API routes for heading operations
│   ├── middleware/             # Custom middleware (future use)
│   ├── .env                    # Environment variables
│   ├── server.js               # Express server setup
│   └── package.json            # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── index.html          # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.js   # Navigation component
│   │   │   ├── Website.js      # Main website component
│   │   │   ├── Header.js       # Website header
│   │   │   ├── Hero.js         # Hero section with dynamic heading
│   │   │   ├── Features.js     # Features grid section
│   │   │   └── CMS.js          # Content management interface
│   │   ├── services/
│   │   │   └── api.js          # API service functions
│   │   ├── App.js              # Root component
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global styles
│   └── package.json            # Frontend dependencies
├── package.json                # Root package.json for scripts
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB installation)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd abc-company-website
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   npm run install-deps
   ```

3. **Set up environment variables**
   
   The backend `.env` file is already configured with the provided MongoDB connection:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://Venkat:Venkat%402002@cluster0.qdstrz6.mongodb.net/mearnapp?retryWrites=true&w=majority&appName=Cluster0
   NODE_ENV=development
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```
   
   This will start both the backend server (port 5000) and frontend development server (port 3000) concurrently.

### Individual Server Commands

- **Start backend only**: `npm run server`
- **Start frontend only**: `npm run client`
- **Build frontend**: `npm run build`

## 📡 API Endpoints

### Base URL: `http://localhost:5000/api`

#### GET /headings
Retrieves the latest active heading from the database.

**Response:**
```json
{
  "success": true,
  "data": {
    "heading": "Your dynamic heading text",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "message": "Heading retrieved successfully"
}
```

#### POST /headings
Creates a new heading entry in the database.

**Request Body:**
```json
{
  "heading": "New heading text"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "heading": "New heading text",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "message": "Heading created successfully"
}
```

#### GET /headings/all
Retrieves all headings with pagination (admin endpoint).

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

#### GET /health
Health check endpoint to verify server status.

## 🗄 Database Schema

### Heading Model
```javascript
{
  heading: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500,
    minlength: 1
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## 🎨 Design Features

- **Pixel-perfect Implementation**: Matches the provided Figma design exactly
- **Responsive Layout**: Adapts to all screen sizes (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations
- **Color Scheme**: Orange (#f97316) and blue (#3b82f6) accent colors
- **Typography**: Optimized font sizes and spacing for readability
- **Interactive Elements**: Hover effects and smooth transitions

## 🔧 Usage

### Website View
1. Navigate to the main page to see the ABC Company landing page
2. The heading is dynamically loaded from the database
3. All other content is static as per requirements

### CMS View
1. Switch to the CMS tab using the navigation
2. Enter or modify the main heading text
3. Click "Save Heading" to update the database
4. Changes are immediately reflected on the website
5. Use Ctrl+Enter as a keyboard shortcut to save

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/DigitalOcean)
1. Set up your hosting platform account
2. Configure environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: Set to "production"
   - `PORT`: Will be set automatically by most platforms
3. Deploy the backend folder

### Frontend Deployment (Netlify/Vercel)
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `build` folder to your hosting platform
3. Update the API base URL in `frontend/src/services/api.js` to point to your backend

### Environment Variables for Production
Update the API base URL in `frontend/src/services/api.js`:
```javascript
baseURL: process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-domain.com/api' 
  : 'http://localhost:5000/api'
```

## 🔒 Security Features

- **Input Validation**: Both frontend and backend validation
- **Rate Limiting**: Prevents API abuse
- **CORS Configuration**: Controlled cross-origin requests
- **Helmet**: Security headers for Express
- **Data Sanitization**: Trim and validate user inputs
- **Error Handling**: Secure error messages without exposing internals

## 🧪 Testing

### Manual Testing Checklist
- [ ] Website loads correctly
- [ ] CMS interface is functional
- [ ] Heading updates work end-to-end
- [ ] Responsive design on different screen sizes
- [ ] API endpoints respond correctly
- [ ] Error handling works properly
- [ ] Input validation prevents invalid data

### API Testing with Postman/Insomnia
1. Test GET `/api/headings` - Should return current heading
2. Test POST `/api/headings` with valid data
3. Test POST `/api/headings` with invalid data (empty, too long)
4. Test GET `/api/health` - Should return server status

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify the connection string in `.env`
   - Check if your IP is whitelisted in MongoDB Atlas
   - Ensure the database user has proper permissions

2. **CORS Errors**
   - Check if frontend URL is added to CORS configuration
   - Verify API base URL in frontend configuration

3. **Port Already in Use**
   - Change the PORT in backend `.env` file
   - Kill existing processes: `lsof -ti:5000 | xargs kill -9`

4. **Frontend Not Loading**
   - Ensure all dependencies are installed: `cd frontend && npm install`
   - Check if backend is running on the correct port

## 📝 Development Notes

- The application uses polling every 5 seconds to check for heading updates
- Only the main heading is dynamic; all other content is static
- The CMS automatically deactivates previous headings when saving new ones
- Character limit is set to 500 characters for headings
- The application includes comprehensive error handling and user feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the troubleshooting section above

---

**Built with ❤️ for Brynk Labs Assignment**