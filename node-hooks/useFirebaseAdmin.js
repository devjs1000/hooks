const admin = require("firebase-admin");

// var serviceAccount = require("./anmolcoal-firebase-service-account-config.json");

const createAdmin = ({ firebaseServerConfig }) => {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseServerConfig),
  });
  return admin;
};

module.exports = createAdmin;
