import { Router, Request, Response } from 'express';
import { Workout } from '../models/Workout.js';

const router = Router();

// GET /api/workouts - Get all workouts
router.get('/', async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find().populate('createdBy').populate('completedBy');
    res.json({
      message: 'Get all workouts',
      data: workouts,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

// POST /api/workouts - Create a new workout
router.post('/', async (req: Request, res: Response) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.status(201).json({
      message: 'Workout created',
      data: workout,
    });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create workout' });
  }
});

// GET /api/workouts/:id - Get workout by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findById(req.params.id)
      .populate('createdBy')
      .populate('completedBy');
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json({
      message: `Get workout ${req.params.id}`,
      data: workout,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workout' });
  }
});

// PUT /api/workouts/:id - Update workout
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json({
      message: `Workout ${req.params.id} updated`,
      data: workout,
    });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update workout' });
  }
});

// DELETE /api/workouts/:id - Delete workout
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

export default router;
