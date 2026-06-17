import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/activities - Get all activities
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Get all activities',
    data: [],
  });
});

// POST /api/activities - Create a new activity
router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'Activity created',
    data: { id: 1, ...req.body },
  });
});

// GET /api/activities/:id - Get activity by ID
router.get('/:id', (req: Request, res: Response) => {
  res.json({
    message: `Get activity ${req.params.id}`,
    data: { id: req.params.id },
  });
});

// PUT /api/activities/:id - Update activity
router.put('/:id', (req: Request, res: Response) => {
  res.json({
    message: `Activity ${req.params.id} updated`,
    data: { id: req.params.id, ...req.body },
  });
});

// DELETE /api/activities/:id - Delete activity
router.delete('/:id', (req: Request, res: Response) => {
  res.status(204).send();
});

export default router;
