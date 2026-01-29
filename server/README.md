# Apple Tree Tots Backend

MERN Stack backend for the Apple Tree Tots dashboard application using Express.js and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (connection string provided in .env)

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Environment variables are already configured in `.env` with MongoDB connection.

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Applications

#### Get all applications
```
GET /api/applications?status=pending&search=John
```
Query Parameters:
- `status` (optional): Filter by 'pending', 'approved', or 'rejected'
- `search` (optional): Search by child name, parent name, or email

Response:
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "...",
      "childName": "Emma Johnson",
      "parentName": "John Doe",
      "email": "john@example.com",
      "phone": "071-234-5678",
      "program": "toddler",
      "status": "pending",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### Get single application
```
GET /api/applications/:id
```

#### Create new application
```
POST /api/applications
Content-Type: application/json

{
  "childName": "Emma Johnson",
  "childAge": 3,
  "parentName": "John Doe",
  "email": "john@example.com",
  "phone": "071-234-5678",
  "program": "toddler",
  "startDate": "2024-02-01",
  "specialNeeds": "None"
}
```

#### Update application status
```
PUT /api/applications/:id
Content-Type: application/json

{
  "status": "approved",
  "notes": "All documents verified"
}
```

#### Delete application
```
DELETE /api/applications/:id
```

#### Get applications statistics
```
GET /api/applications/stats/summary
```

Response:
```json
{
  "success": true,
  "data": {
    "total": 10,
    "pending": 3,
    "approved": 5,
    "rejected": 2
  }
}
```

## Database Schema

### Application Model

```javascript
{
  childName: String (required),
  childAge: Number (1-6),
  parentName: String (required),
  email: String (required, unique per child),
  phone: String (required),
  program: String (enum: 'toddler', 'casa', 'preschool'),
  status: String (enum: 'pending', 'approved', 'rejected', default: 'pending'),
  startDate: Date,
  specialNeeds: String,
  notes: String,
  submittedBy: String (default: 'admin'),
  createdAt: Date,
  updatedAt: Date
}
```

## Environment Variables

Update `.env` file with:
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `NODE_ENV`: 'development' or 'production'
- `JWT_SECRET`: JWT secret for authentication (if implementing auth)

## CORS Configuration

The server allows requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (React dev server)
- `http://localhost:5000` (Server itself)

Add more origins in `server.js` if deploying to different domains.

## Error Handling

The API returns standardized error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

Status codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `404`: Not Found
- `500`: Server Error

## Next Steps

1. Update the frontend `.env` file with the API URL
2. Run both frontend and backend servers
3. Navigate to http://localhost:5173/admin/applications
4. Test creating, viewing, and updating applications

## Troubleshooting

**MongoDB Connection Error:**
- Verify the connection string in `.env`
- Check MongoDB Atlas IP whitelist includes your IP
- Ensure the cluster is running

**CORS Error:**
- Check that your frontend URL is in the CORS configuration
- Verify the API URL in frontend `.env` matches the server URL

**Port Already in Use:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

## Future Enhancements

- Add JWT authentication
- Implement file uploads for documents
- Add email notifications
- Create admin roles and permissions
- Add activity logs
