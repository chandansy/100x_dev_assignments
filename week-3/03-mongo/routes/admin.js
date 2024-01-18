const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin}  = require('../db/index');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username; 
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({msg: "Admin created successfully"});
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    res.json({ message: "Listing all courses" });
});

module.exports = router;