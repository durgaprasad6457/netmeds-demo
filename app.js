const employee = require('./routes/employee');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/',home);
app.use('/employee',employee);

const port = 3000;
app.listen(port,()=>console.log(`listening on port ${port}`));
