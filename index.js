const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const AppError = require("./src/support/utils/appError");
const apiV1 = require('./src/routes/api_v1');

const app = express();
const port = process.env.PORT || 3000;

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json());
app.use(express.json());
app.use(cors()); // Allow all origins (not recommended for production)

// Define routes
app.use('/v1', apiV1);

app.all('*', (req, res, next) => {
  throw new AppError(`Requested URL ${req.path} not found!`, 404);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
