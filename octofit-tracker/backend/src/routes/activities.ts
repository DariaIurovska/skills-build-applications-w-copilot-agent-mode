import { Router, Request, Response } from 'express';
import { Activity } from '../models/Activity.js';

const router = Router();

// GET /api/activities - Get all activities
router.get('/', async (req: Request, res: Response) => {
  try {
    const activities = await Activity.find().populate('userId');
    res.json({
      message: 'Get all activities',
      data: activities,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
});

// POST /api/activities - Create a new activity
router.post('/', async (req: Request, res: Response) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.status(201).json({
      message: 'Activity created',
      data: activity,
    });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create activity' });
  }
});

// GET /api/activities/:id - Get activity by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const activity = await Activity.findById(req.params.id).populate('userId');
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.json({
      message: `Get activity ${req.params.id}`,
      data: activity,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
});

// PUT /api/activities/:id - Update activity
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.json({
      message: `Activity ${req.params.id} updated`,
      data: activity,
    });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update activity' });
  }
});

// DELETE /api/activities/:id - Delete activity
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const activity = await Activity.findByIdAndDelete(req.params.id);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete activity' });
  }
});

export default router;
