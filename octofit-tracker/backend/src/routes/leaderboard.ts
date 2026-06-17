import { Router, Request, Response } from 'express';
import { Leaderboard } from '../models/Leaderboard.js';

const router = Router();

// GET /api/leaderboard - Get leaderboard rankings
router.get('/', async (req: Request, res: Response) => {
  try {
    const leaderboard = await Leaderboard.find()
      .sort({ rank: 1 })
      .populate('userId')
      .populate('teamId');
    res.json({
      message: 'Get leaderboard rankings',
      data: leaderboard,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// GET /api/leaderboard/teams - Get team leaderboard
router.get('/teams', async (req: Request, res: Response) => {
  try {
    const teamLeaderboard = await Leaderboard.find({ teamId: { $ne: null } })
      .sort({ points: -1 })
      .populate('userId')
      .populate('teamId');
    res.json({
      message: 'Get team leaderboard',
      data: teamLeaderboard,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch team leaderboard' });
  }
});

// GET /api/leaderboard/global - Get global leaderboard
router.get('/global', async (req: Request, res: Response) => {
  try {
    const globalLeaderboard = await Leaderboard.find()
      .sort({ points: -1 })
      .limit(10)
      .populate('userId');
    res.json({
      message: 'Get global leaderboard',
      data: globalLeaderboard,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch global leaderboard' });
  }
});

export default router;
