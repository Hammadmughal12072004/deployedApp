const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require('./routes/User');
const examQuestionsRoute = require('./routes/ExamQuestions');
const userExamsRoute = require('./routes/UserExams');
const examRoute = require('./routes/Exam');
const mcqsRoute = require('./routes/mcq'); // Import the mcqs route
const tutorialRoute = require('./routes/Tutorial');
const path = require("path");

mongoose.set('strictQuery', false);

// Directly use the MongoDB Atlas connection string and port number
const uri = 'mongodb+srv://hammadanwaar04:ZOILXM1OrYlncl0e@cluster0.6zalccu.mongodb.net/';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch(err => {
  console.error('Error connecting to MongoDB Atlas', err);
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/examquestions', examQuestionsRoute);
app.use('/exam', examRoute);
app.use('/userexams', userExamsRoute);
app.use('/mcqs', mcqsRoute); // Use the mcqs route
app.use('/tutorials', tutorialRoute);

app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', (res, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

const PORT = process.env.PORT || 4000; // Use environment port or 5001 as default
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
