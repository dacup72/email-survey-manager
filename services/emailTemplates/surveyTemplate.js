module.exports = survey => {
  return `
    <html>
      <body style="text-align: center;">
        <h3>I'd like your input!</h3>
        <p>${survey.body}</p>
        <div>
          <a href="http://localhost:3000">Yes</a>
        </div>
        <div>
          <a href="http://localhost:3000">No</a>
        </div>
      </body>
    </html>
  `;
};