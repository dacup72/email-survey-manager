const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body style="text-align: center;">
        <h3>I'd like your input!</h3>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}">No</a>
        </div>
      </body>
    </html>
  `;
};