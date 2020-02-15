module.exports = function auth(req, res, next) {
  if (!req.signedCookies.user) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      const err = new Error("Forbidden");
      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      return next(err);
    }

    const [username, password] = new Buffer.from(
      authHeader.split(" ")[1],
      "base64"
    )
      .toString()
      .split(":");
    if (username === "admin" && password === "123") {
      res.cookie("user", "admin", { signed: true });
      next(); // authorized
    } else {
      var err = new Error("You are not authenticated!");
      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      next(err);
    }
  } else {
    if (req.signedCookies.user === "admin") {
      next();
    } else {
      const err = new Error("Forbidden");
      err.status = 401;
      return next(err);
    }
  }
};
