const sgMail = require("@sendgrid/mail");
// const sendgridAPIKey =
//   "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";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "akbaribehzad@yahoo.com",
    subject: "Thanks for joining in!",
    text: "Welcome to the app, ${ name }. Give us some feedback."
  });
};

const sendCancellationEmail = async (email, name) => {
  sgMail.send({
    to: email,
    from: "akbaribehzad@yahoo.com",
    subject: "Sorry to see you go!",
    text: "Goodbye, ${name}. Hope to see you back soon."
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};

// sgMail.send({
//   to: "akbaribehzad@yahoo.com",
//   from: "akbaribehzad@yahoo.com",
//   subject: "This is my first creation",
//   text: "I hope this one gets to you"
// });

//To run
// node src/emails/account.js
