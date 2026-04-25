const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


app.get('/api/generated-images', async (req, res) => {

  try {
    const response = await fetch('https://www.makealiensgreatagain.com/api/generated-images');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({
      error: 'Failed to retrieve data'
    });
  }
});

app.get('/api/views', async (req, res) => {

  try {
    const response = await fetch('https://www.makealiensgreatagain.com/api/views');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({
      error: 'Failed to retrieve data'
    });
  }
});


app.get('/validators', async (req, res) => {
  try {
    const {
      task_id,
      size,
      page
    } = req.query;

    if (!task_id) {
      return res.status(400).json({
        error: 'task_id is required'
      });
    }
    const response = await fetch(`https://www.makealiensgreatagain.com/api/views?task_id=${task_id}&page=${page}&size=${size}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({
      error: 'Failed to retrieve data'
    });
  }
});


module.exports = app;