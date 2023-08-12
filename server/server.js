const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');


const app = express();
const PORT = 5000;

app.use(cors({
  origin:"https://ikf-elimillasrinivas.vercel.app"
}));
app.use(express.json());


mongoose.connect("mongodb+srv://ikf:ikf@cluster0.lnyft7n.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Error connecting to the database', err);
  });

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
