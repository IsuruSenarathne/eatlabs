module.exports = function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    const err = new Error("Forbidden");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }

  const [username, password] = new Buffer(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  if (username === "admin" && password === "123") {
    next();
  } else {
    var err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    next(err);
  }
}
