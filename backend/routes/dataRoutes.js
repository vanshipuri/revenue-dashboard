const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const fileMap = {
  A: 'A._Quarterly_Revenue_and_QoQ_growth.json',
  B: 'B._Revenue_Bridge_and_Churned_Analysis.json',
  C: 'C._Country_wise_Revenue_Analysis.json',
  D: 'D._Region_wise_Revenue_Analysis.json',
  E: 'E._Customer_Concentration_Analysis.json'
};

router.get('/:id', (req, res) => {
  const id = req.params.id.toUpperCase(); 
  const filename = fileMap[id];

  if (!filename) {
    return res.status(404).json({ message: `No data found for ${id}` });
  }

  const filePath = path.join(__dirname, '../data', filename);

  fs.readFile(filePath, 'utf-8', (err, jsonData) => {
    if (err) {
      return res.status(500).json({ message: `Error reading file ${filename}` });
    }

    try {
      const parsedData = JSON.parse(jsonData);
      res.json(parsedData);
    } catch (parseErr) {
      res.status(500).json({ message: `Invalid JSON format in ${filename}` });
    }
  });
});

module.exports = router;
