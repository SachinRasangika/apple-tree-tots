# Backend Setup Guide - Apple Tree Tots Dashboard

This guide covers setting up and running the MERN stack backend for the Apple Tree Tots preschool management dashboard.

## 🚀 Quick Start

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Start the Backend Server
```bash
npm run dev
```

The server will start on `http://localhost:5000`

### 3. Configure Frontend
Create a `.env` file in the root directory (if not exists):
```
VITE_API_URL=http://localhost:5000/api
```

### 4. Start Frontend
```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`

## 📋 Project Structure

```
.
├── server/                    # Express.js backend
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── models/
│   │   └── Application.js    # MongoDB schema for applications
│   ├── routes/
│   │   └── applications.js   # API routes
│   ├── .env                  # Environment variables (MongoDB connection)
│   ├── server.js             # Main server file
│   ├── package.json
│   └── README.md
├── src/                       # React frontend
│   ├── dashboard/
│   │   ├── pages/
│   │   │   ├── ApplicationsPage.tsx     # View & manage applications
│   │   │   └── ApplicationFormPage.tsx  # Submit new applications
│   │   └── routes.tsx
│   ├── services/
│   │   └── applicationApi.ts  # API client functions
│   └── ...
├── .env.example              # Environment template
└── package.json
```

## 🔌 API Endpoints

All endpoints are prefixed with `/api`

### Applications Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/applications` | Get all applications (with filters) |
| GET | `/applications/:id` | Get single application |
| POST | `/applications` | Create new application |
| PUT | `/applications/:id` | Update application status |
| DELETE | `/applications/:id` | Delete application |
| GET | `/applications/stats/summary` | Get statistics |

### Query Parameters

**GET /applications**
- `status`: Filter by 'pending', 'approved', or 'rejected'
- `search`: Search by child name, parent name, or email

**Example:**
```
GET /api/applications?status=pending&search=John
```

## 🗄️ Database

### Connection Details
- **Provider**: MongoDB Atlas
- **Connection**: Already configured in `server/.env`
- **Database**: Automatically created on first connection

### Application Collection Schema

```javascript
{
  _id: ObjectId,
  childName: String,
  childAge: Number,
  parentName: String,
  email: String,
  phone: String,
  program: String, // 'toddler' | 'casa' | 'preschool'
  status: String,  // 'pending' | 'approved' | 'rejected'
  startDate: Date,
  specialNeeds: String,
  notes: String,
  submittedBy: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🎯 Features

### Backend (Express + MongoDB)
✅ RESTful API for applications management
✅ MongoDB connection with Atlas
✅ CORS enabled for frontend
✅ Request validation
✅ Error handling middleware
✅ Auto-generated timestamps
✅ Full-text search capability
✅ Statistics endpoint

### Frontend Integration
✅ API service layer (`src/services/applicationApi.ts`)
✅ Loading and error states
✅ Real-time data fetching
✅ Status updates via API
✅ Search and filter functionality
✅ Form validation

## 🔧 Configuration

### Environment Variables

**server/.env**
```
PORT=5000
MONGODB_URI=mongodb+srv://sachinrasangika_db_user:wp4Inpj8yyOUQ1X2@cluster0.w2xcq0v.mongodb.net/?appName=Cluster0
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_change_this_in_production
```

**Frontend .env (root directory)**
```
VITE_API_URL=http://localhost:5000/api
```

## 📱 Using the Dashboard

### View Applications
1. Navigate to `/admin/applications`
2. See all submitted applications in a table
3. Filter by status (All, Pending, Approved, Rejected)
4. Search by child name, parent name, or email
5. View application statistics at the bottom

### Submit New Application
1. Click "New Application" button
2. Fill in child information (name, age, program)
3. Fill in parent/guardian information
4. Add optional information (start date, special needs)
5. Click "Submit Application"
6. Application appears in the list with "pending" status

### Manage Applications
1. In the applications table, click the edit icon (pencil)
2. Select new status from dropdown
3. Click checkmark to save or X to cancel
4. Status updates in real-time

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is in use
lsof -i :5000

# Kill the process
kill -9 <PID>

# Or change PORT in .env
PORT=5001
```

### MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
- Verify connection string in `server/.env`
- Check MongoDB Atlas cluster is running
- Verify IP whitelist includes your IP
- Try connecting with MongoDB Compass to test

### CORS Error in Frontend Console
```
Access to XMLHttpRequest blocked by CORS policy
```
- Ensure backend is running on `http://localhost:5000`
- Check CORS configuration in `server/server.js`
- Verify frontend .env has correct API URL
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### API Calls Failing with 404
```
GET http://localhost:5000/api/applications 404 Not Found
```
- Verify server is running (`npm run dev` in server folder)
- Check API endpoint path matches
- Verify MongoDB connection is successful (check console)

### Cannot find module errors
```bash
# Ensure dependencies are installed
npm install

# For backend
cd server && npm install && cd ..

# Clear cache and reinstall
rm -rf node_modules server/node_modules
npm install
cd server && npm install && cd ..
```

## 📚 API Examples

### Create Application (cURL)
```bash
curl -X POST http://localhost:5000/api/applications \
  -H "Content-Type: application/json" \
  -d '{
    "childName": "Emma Johnson",
    "childAge": 3,
    "parentName": "John Doe",
    "email": "john@example.com",
    "phone": "071-234-5678",
    "program": "toddler",
    "specialNeeds": "None"
  }'
```

### Update Application Status
```bash
curl -X PUT http://localhost:5000/api/applications/[ID] \
  -H "Content-Type: application/json" \
  -d '{
    "status": "approved",
    "notes": "All documents verified"
  }'
```

### Get Statistics
```bash
curl http://localhost:5000/api/applications/stats/summary
```

## 🚀 Deployment

### Frontend (Vite)
```bash
npm run build
# Deploys to /dist folder
```

### Backend (Node.js)
Options:
- **Heroku**: Push with `git push heroku main`
- **Railway**: Connect GitHub repo
- **Render**: Auto-deploy from GitHub
- **DigitalOcean App Platform**: Simple deployment
- **AWS/Google Cloud**: Traditional hosting

## 📝 Next Steps

1. ✅ Backend server running
2. ✅ Frontend connected to backend
3. ⏳ Implement JWT authentication
4. ⏳ Add file uploads for documents
5. ⏳ Set up email notifications
6. ⏳ Add admin roles and permissions
7. ⏳ Create activity logs
8. ⏳ Deploy to production

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review server logs (`npm run dev`)
3. Check browser console for errors
4. Verify MongoDB connection in Atlas dashboard

---

**Last Updated**: January 2024
**Stack**: Node.js, Express, MongoDB, React, Vite
