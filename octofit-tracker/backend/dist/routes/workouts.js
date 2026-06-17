import { Router } from 'express';
const router = Router();
// GET /api/workouts - Get all workouts
router.get('/', (req, res) => {
    res.json({
        message: 'Get all workouts',
        data: [],
    });
});
// POST /api/workouts - Create a new workout
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Workout created',
        data: { id: 1, ...req.body },
    });
});
// GET /api/workouts/:id - Get workout by ID
router.get('/:id', (req, res) => {
    res.json({
        message: `Get workout ${req.params.id}`,
        data: { id: req.params.id },
    });
});
// PUT /api/workouts/:id - Update workout
router.put('/:id', (req, res) => {
    res.json({
        message: `Workout ${req.params.id} updated`,
        data: { id: req.params.id, ...req.body },
    });
});
// DELETE /api/workouts/:id - Delete workout
router.delete('/:id', (req, res) => {
    res.status(204).send();
});
export default router;
//# sourceMappingURL=workouts.js.map