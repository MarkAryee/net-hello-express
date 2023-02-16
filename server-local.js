'use strict';
const app = require('./express/server');
const path = require('path');

// Load View Engine


// Local request handlers.
app.get('/home', (req, res) => {
  res.render('index');
  res.send('Hello World!')  
});

// Route Files.


// Start Server.
let port = 3005;
app.listen(port, function(){
  console.log(`Server started on port ${port}...`);
});
