const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

router.post('/create-lead', leadController.createLead);
router.get('/get-lead/:id', leadController.getLeadById);

module.exports = router;
