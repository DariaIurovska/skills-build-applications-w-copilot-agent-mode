import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/teams - Get all teams
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Get all teams',
    data: [],
  });
});

// POST /api/teams - Create a new team
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Team created',
    data: { id: 1, ...req.body },
  });
});

// GET /api/teams/:id - Get team by ID
router.get('/:id', (req: Request, res: Response) => {
  res.json({
    message: `Get team ${req.params.id}`,
    data: { id: req.params.id },
  });
});

// PUT /api/teams/:id - Update team
router.put('/:id', (req: Request, res: Response) => {
  res.json({
    message: `Team ${req.params.id} updated`,
    data: { id: req.params.id, ...req.body },
  });
});

// DELETE /api/teams/:id - Delete team
router.delete('/:id', (req: Request, res: Response) => {
  res.status(204).send();
});

export default router;
