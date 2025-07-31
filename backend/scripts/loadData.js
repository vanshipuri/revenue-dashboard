const fs = require('fs');
const path = require('path');
require('dotenv').config();
const connectDB = require('../config/db');
const Data = require('../models/Data');

const loadData = async () => {
  try {
    await connectDB();

    const fileMap = {
      A: 'A._Quarterly_Revenue_and_QoQ_growth.json',
      B: 'B._Revenue_Bridge_and_Churned_Analysis.json',
      C: 'C._Country_wise_Revenue_Analysis.json',
      D: 'D._Region_wise_Revenue_Analysis.json',
      E: 'E._Customer_Concentration_Analysis.json',
    };

    for (let key in fileMap) {
      const filePath = path.join(__dirname, `../data/${fileMap[key]}`);
      
      if (!fs.existsSync(filePath)) {
        console.error(` File not found: ${filePath}`);
        continue;
      }

      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      await Data.deleteOne({ filename: key }); 
      await Data.create({ filename: key, data: content }); 

      console.log(` Loaded data for: ${key}`);
    }

    console.log(' All data loaded!');
    process.exit();
  } catch (err) {
    console.error(' Error loading data:', err);
    process.exit(1);
  }
};

loadData();

