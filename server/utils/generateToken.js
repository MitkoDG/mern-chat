import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("jwt", token, {
    maxAge: 10800, // 3 hours in seconds
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !==  "development",
  });
};

export default generateTokenAndSetCookie;
