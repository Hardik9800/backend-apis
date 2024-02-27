import express from "express";
const router = express.Router();
router.get('/categoryListing', (req, res) =>{
    res.send('Categories of Products');

})

export default router;