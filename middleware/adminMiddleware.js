const admin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authorized, no user" });
  }

  const isAdmin =
    (typeof req.user.role === "string" && req.user.role === "admin") ||
    req.user.isAdmin === true;

  if (isAdmin) {
    return next();
  }

  return res.status(403).json({ message: "Admin access only" });
};

module.exports = { admin };
