const express = require('express');
const bodyParser = require('body-parser');
const fbRouter = require('./routes/fbRouter');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
  next();
});
app.use('/facebook', fbRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
