import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker';
// Codespaces-aware base URL
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
// Middleware
app.use(express.json());
// MongoDB Connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✓ Connected to MongoDB'))
    .catch((err) => console.error('✗ MongoDB connection error:', err));
// Health Check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'OctoFit Tracker API is running',
        baseUrl,
        environment: process.env.NODE_ENV || 'development'
    });
});
// Mount Routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);
// Start Server
app.listen(PORT, () => {
    console.log(`\n🚀 OctoFit Tracker API Server`);
    console.log(`📍 Base URL: ${baseUrl}`);
    console.log(`🔌 Port: ${PORT}`);
    console.log(`💾 MongoDB: ${MONGODB_URI}\n`);
});
//# sourceMappingURL=index.js.map