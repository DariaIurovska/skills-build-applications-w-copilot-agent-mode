/**
 * Seed the octofit_db database with test data
 *
 * This script populates MongoDB with realistic sample data for:
 * - Users
 * - Teams
 * - Activities
 * - Leaderboard entries
 * - Workouts
 *
 * Usage: npm run seed
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from '../models/User.js';
import { Team } from '../models/Team.js';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Workout } from '../models/Workout.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

async function seed() {
  try {
    console.log('🌱 Seeding octofit_db database...\n');

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✓ Connected to MongoDB\n');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);
    console.log('✓ Data cleared\n');

    // Create Users
    console.log('👥 Creating users...');
    const users = await User.insertMany([
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        password: 'hashedpassword1',
        avatar: 'https://api.example.com/avatars/alice.jpg',
        totalPoints: 450,
      },
      {
        name: 'Bob Smith',
        email: 'bob@example.com',
        password: 'hashedpassword2',
        avatar: 'https://api.example.com/avatars/bob.jpg',
        totalPoints: 320,
      },
      {
        name: 'Carol Davis',
        email: 'carol@example.com',
        password: 'hashedpassword3',
        avatar: 'https://api.example.com/avatars/carol.jpg',
        totalPoints: 510,
      },
      {
        name: 'David Wilson',
        email: 'david@example.com',
        password: 'hashedpassword4',
        avatar: 'https://api.example.com/avatars/david.jpg',
        totalPoints: 280,
      },
      {
        name: 'Emma Brown',
        email: 'emma@example.com',
        password: 'hashedpassword5',
        avatar: 'https://api.example.com/avatars/emma.jpg',
        totalPoints: 390,
      },
    ]);
    console.log(`✓ Created ${users.length} users\n`);

    // Create Teams
    console.log('🏆 Creating teams...');
    const teams = await Team.insertMany([
      {
        name: 'Fitness Warriors',
        description: 'A team dedicated to fitness excellence',
        leader: users[0]._id,
        members: [users[0]._id, users[1]._id, users[2]._id],
        totalPoints: 1280,
      },
      {
        name: 'Health Champions',
        description: 'Committed to healthy living',
        leader: users[3]._id,
        members: [users[3]._id, users[4]._id],
        totalPoints: 670,
      },
    ]);
    console.log(`✓ Created ${teams.length} teams\n`);

    // Create Activities
    console.log('🏃 Creating activities...');
    const activities = await Activity.insertMany([
      {
        userId: users[0]._id,
        type: 'running',
        description: 'Morning run at the park',
        duration: 45,
        distance: 8.5,
        points: 150,
      },
      {
        userId: users[0]._id,
        type: 'gym',
        description: 'Upper body strength training',
        duration: 60,
        points: 120,
      },
      {
        userId: users[1]._id,
        type: 'cycling',
        description: 'Evening bike ride',
        duration: 75,
        distance: 25,
        points: 140,
      },
      {
        userId: users[2]._id,
        type: 'swimming',
        description: 'Pool workout',
        duration: 50,
        distance: 2.5,
        points: 130,
      },
      {
        userId: users[3]._id,
        type: 'yoga',
        description: 'Relaxing yoga session',
        duration: 45,
        points: 80,
      },
      {
        userId: users[4]._id,
        type: 'walking',
        description: 'Nature walk',
        duration: 60,
        distance: 5,
        points: 90,
      },
    ]);
    console.log(`✓ Created ${activities.length} activities\n`);

    // Create Leaderboard entries
    console.log('📊 Creating leaderboard entries...');
    const leaderboardEntries = await Leaderboard.insertMany([
      {
        userId: users[2]._id,
        teamId: teams[0]._id,
        rank: 1,
        points: 510,
        activitiesCompleted: 5,
      },
      {
        userId: users[0]._id,
        teamId: teams[0]._id,
        rank: 2,
        points: 450,
        activitiesCompleted: 4,
      },
      {
        userId: users[1]._id,
        teamId: teams[0]._id,
        rank: 3,
        points: 320,
        activitiesCompleted: 3,
      },
      {
        userId: users[4]._id,
        teamId: teams[1]._id,
        rank: 4,
        points: 390,
        activitiesCompleted: 3,
      },
      {
        userId: users[3]._id,
        teamId: teams[1]._id,
        rank: 5,
        points: 280,
        activitiesCompleted: 2,
      },
    ]);
    console.log(`✓ Created ${leaderboardEntries.length} leaderboard entries\n`);

    // Create Workouts
    console.log('💪 Creating workouts...');
    const workouts = await Workout.insertMany([
      {
        title: 'Morning Run Challenge',
        description: 'Run 5km in under 30 minutes',
        type: 'cardio',
        difficulty: 'medium',
        duration: 30,
        pointsReward: 100,
        createdBy: users[0]._id,
        completedBy: [users[1]._id, users[2]._id],
      },
      {
        title: 'Full Body Strength Session',
        description: 'Complete full body workout with dumbbells',
        type: 'strength',
        difficulty: 'hard',
        duration: 60,
        pointsReward: 150,
        createdBy: users[0]._id,
        completedBy: [users[2]._id],
      },
      {
        title: 'Yoga & Flexibility',
        description: 'Relaxing yoga session for flexibility',
        type: 'flexibility',
        difficulty: 'easy',
        duration: 45,
        pointsReward: 75,
        createdBy: users[3]._id,
        completedBy: [users[4]._id],
      },
      {
        title: 'Cycling Adventure',
        description: 'Bike ride through scenic routes',
        type: 'sports',
        difficulty: 'medium',
        duration: 90,
        pointsReward: 120,
        createdBy: users[1]._id,
        completedBy: [],
      },
    ]);
    console.log(`✓ Created ${workouts.length} workouts\n`);

    console.log('✅ Database seeding completed successfully!\n');
    console.log('📈 Summary:');
    console.log(`   - ${users.length} users`);
    console.log(`   - ${teams.length} teams`);
    console.log(`   - ${activities.length} activities`);
    console.log(`   - ${leaderboardEntries.length} leaderboard entries`);
    console.log(`   - ${workouts.length} workouts\n`);

    await mongoose.connection.close();
    console.log('✓ MongoDB connection closed\n');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seed();
