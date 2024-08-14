const router = require('express').Router();
const leadForm = require('../models/leadForm');

//*Create lead
router.post('/api/createLead', async (req,res) => {
    try{
        const { firstName, lastName, company, title, email, phone, extensiion, product } = req.body;
        const leadFormObj = { firstName, lastName, company, title, email, phone, extensiion, product };

        const newLeadForm = new leadForm(leadFormObj);
        await newLeadForm.save();
        res.json({
            message: "Lead created successfully",
            Lead: newLeadForm
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//* Get all Leads
//? mbanyea -- just created quick for testing 
//! Needs auth / session validation / proper route name
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