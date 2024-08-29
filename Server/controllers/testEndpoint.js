const router = require('express').Router();
const leadForm = require('../models/leadForm');

//* Get all Leads
//! Needs auth / session validation
router.get('/test', async (req,res) => {
    try{
        const leads = await leadForm.find();
        if(!leads){
            return res.status(404).json({ message: 'No Leads Found' })
        }
        res.status(200).json({
            message: 'Leads retrieved',
            leads: leads
        });

    } catch (err) {
        console.error('Error retriving leads', err)
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;