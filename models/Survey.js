const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  // Array containing list of recipient schemas
  // Stores "sub document collection"
  recipients: [RecipientSchema],
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