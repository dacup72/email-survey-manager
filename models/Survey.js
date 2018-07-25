const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  // Array containing list of strings
  recipients: [String]
});

mongoose.model('surveys', surveySchema);