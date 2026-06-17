import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/leaderboard - Get leaderboard rankings
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Get leaderboard rankings',
    data: [],
  });
});

// GET /api/leaderboard/teams - Get team leaderboard
router.get('/teams', (req: Request, res: Response) => {
  res.json({
    message: 'Get team leaderboard',
    data: [],
  });
});

// GET /api/leaderboard/global - Get global leaderboard
router.get('/global', (req: Request, res: Response) => {
  res.json({
    message: 'Get global leaderboard',
    data: [],
  });
});

export default router;
