const Lead = require('../models/Lead');


exports.createLead = async (req, res) => {
  try {
    const latestLead = await Lead.find();
    const serialNumbers = latestLead.map(lead => parseInt(lead.serialNumber.slice(4)));

    let serialNumber = 1;
    if (serialNumbers.length > 0) {
      serialNumber = Math.max(...serialNumbers) + 1;
    }

    const newSerialNumber = `LEAD${serialNumber.toString().padStart(2, '0')}`;

    const newLead = new Lead({ ...req.body, serialNumber: newSerialNumber });
    await newLead.save();

    res.status(201).json(newLead);
  } catch (error) {
    res.status(500).json({ message: 'Error creating lead' });
  }
};


  
  
  
  
  
  

exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findOne({ serialNumber: req.params.id });
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving lead' });
  }
};
 