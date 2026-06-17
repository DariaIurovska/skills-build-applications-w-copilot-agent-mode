import { Router } from 'express';
const router = Router();
// GET /api/users - Get all users
router.get('/', (req, res) => {
    res.json({
        message: 'Get all users',
        data: [],
    });
});
// POST /api/users - Create a new user
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'User created',
        data: { id: 1, ...req.body },
    });
});
// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
    res.json({
        message: `Get user ${req.params.id}`,
        data: { id: req.params.id },
    });
});
// PUT /api/users/:id - Update user
router.put('/:id', (req, res) => {
    res.json({
        message: `User ${req.params.id} updated`,
        data: { id: req.params.id, ...req.body },
    });
});
// DELETE /api/users/:id - Delete user
router.delete('/:id', (req, res) => {
    res.status(204).send();
});
export default router;
//# sourceMappingURL=users.js.map