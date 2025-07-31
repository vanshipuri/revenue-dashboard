const Data = require('../models/Data');

const getDataById = async (req, res) => {
  try {
    const id = req.params.id.toUpperCase(); 
    const record = await Data.findOne({ filename: id });

    if (!record) {
      return res.status(404).json({ error: 'Data not found' });
    }

    res.json(record.data); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};


module.exports = {
  getDataById,
};

