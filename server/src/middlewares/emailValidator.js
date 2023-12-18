const validateEmail = (req, res, next) => {
  if (!req.body.email) {
    return res.status(403).json({ error: "email is required" });
  }
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!req.body.email.match(EMAIL_REGEX)) {
    return res.status(403).json({ error: "invalid email address" });
  }

  next();
};

module.exports = validateEmail;
