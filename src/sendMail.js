const sgMail = require("@sendgrid/mail");
const sendEmail = (req, res, user) => {
  const msg = {
    to: req.body.email,
    from: "pete's@petespets.com",
    subject: "Thank you for your purchase",
    text: "Thank you for you purchase of <PURCHASE HERE> from pete's pets!",
    html: "<strong>Pete's pets</strong>"
  };
  sgMail.send(msg);
};

module.exports = sendEmail;
