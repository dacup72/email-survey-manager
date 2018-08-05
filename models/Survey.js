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
  // Sets up relationship between survey and the user it belongs to
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateSent: Date,
  lastResponded: Date

  // TODO: Add in redirect url for thank you message (So user can add their own custom redirects)
});

mongoose.model('surveys', surveySchema);