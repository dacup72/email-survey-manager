const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  // Array containing list of strings
  // Stores "sub document collection"
  recipients: [String],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
});

mongoose.model('surveys', surveySchema);