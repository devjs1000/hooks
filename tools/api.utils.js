const struct = (status, msg) => {
  return ({ res, data = {} }) => {
    res.status(status).send({ msg, data, status: status == 200 });
  };
};

const responseOk = struct(200, "success");

const responseInternalError = struct(500, "Internal Server Error");

const responseDeny = struct(403, "Access Denied");

const responseWrongPassword = struct(403, "Wrong Password");

const responseWrongOtp = struct(403, "Wrong OTP");

const responseNotFound = struct(404, "Not Found");

const responseBadRequest = struct(400, "Bad Request");

const responseAlreadyExists = struct(409, "Already Exists");

const responseNotAllowed = struct(405, "Not Allowed");

const responseNotAuthenticated = struct(401, "Not Authenticated");

const responseDataCorrupted = struct(400, "Data Corrupted");

//unexpected success
const responseUnexpectedSuccess = struct(200, "Unexpected Success");

const responseCustom = ({ res, status, msg }) => {
  res.status(status).send({ msg, status: status == 200 });
};

module.exports = {
  responseOk,
  responseInternalError,
  responseDeny,
  responseWrongPassword,
  responseWrongOtp,
  responseNotFound,
  responseBadRequest,
  responseAlreadyExists,
  responseNotAllowed,
  responseNotAuthenticated,
  responseDataCorrupted,
  responseUnexpectedSuccess,
  responseCustom,
};
