import jwt from "jsonwebtoken";

export default function verifyAuthTokenMiddleware(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization headers",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }
    req.user = {
      id: decoded.sub,
      isAdm: decoded.isAdm
    }
    next();
  });
}
