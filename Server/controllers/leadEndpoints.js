const router = require("express").Router();
const leadForm = require("../models/leadForm");
const apiKeyAuth = require("../middlewares/apiKey");

//*Create lead
router.post("/api/createLead", apiKeyAuth, async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      company,
      title,
      email,
      phone,
      extension,
      product,
    } = req.body;
    const leadFormObj = {
      firstName,
      lastName,
      company,
      title,
      email,
      phone,
      extension,
      product,
    };

    const newLeadForm = new leadForm(leadFormObj);
    await newLeadForm.save();
    res.json({
      message: "Lead created successfully",
      Lead: newLeadForm,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//* Get all Leads
//? mbanyea -- just created quick for testing
// updated the name and ran it through apiKeyAuth, haven't touched schema -DS
router.get("/api/viewLeads", apiKeyAuth, async (req, res) => {
  try {
    const leads = await leadForm.find();
    if (!leads) {
      return res.status(404).json({ message: "No Leads Found" });
    }
    res.status(200).json({
      message: "Leads retrieved",
      leads: leads,
    });
  } catch (err) {
    console.error("Error retrieving leads", err);
    res.status(500).json({ message: err.message });
  }
});

// Update a lead's contacted status using the email
router.put("/api/updateLead", apiKeyAuth, async (req, res) => {
  try {
    const { email, contacted } = req.body;

    const updatedLead = await leadForm.findOneAndUpdate(
      { email: email },
      { contacted: contacted },
      { new: true } // This option returns the updated document
    );

    if (!updatedLead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({
      message: "Lead updated successfully",
      Lead: updatedLead,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
