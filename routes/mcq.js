const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/generate-mcqs', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5001/generate-mcqs', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error generating MCQs');
    }
});

module.exports = router;
