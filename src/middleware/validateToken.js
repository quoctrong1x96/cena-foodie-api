import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    let token = req.header("xx-token");

    if (!token) {
      return res.status(403).json({
        resp: false,
        message: "There is not Token in the request",
      });
    }

    jwt.verify(token, process.env.APP_KEY_JWT, (err, decode) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }

      req.userId = decode.idPerson;

      next();
    });
  } catch (e) {
    return res.status(500).json({
      resp: false,
      message: e,
      user: {},
      store: {},
      token: "",
    });
  }
};

const isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.lenth; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!",
      });
      return;
    });
  });
};

const isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }

        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Moderator or Admin Role!",
      });
    });
  });
};

export const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  // isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin,
};