// init project
const express = require('express');
const app = express();

// enable CORS (so the API can be remotely tested)
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// Serve static files (optional, if needed)
app.use(express.static('public'));

// Default route to serve the homepage (optional)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint to handle the request header parsing
app.get('/api/whoami', (req, res) => {
  // Get the IP address from the request
  const ipaddress = req.ip;

  // Get the preferred language from the 'Accept-Language' header
  const language = req.headers['accept-language'];

  // Get the software info from the 'User-Agent' header
  const software = req.headers['user-agent'];

  // Return a JSON object with ipaddress, language, and software
  res.json({
    ipaddress: ipaddress,
    language: language,
    software: software
  });
});

// Listen on port 3000 or the environment's port
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
