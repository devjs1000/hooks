const sendMessage = ({ admin, tokens, message}) => {
  admin
    .messaging()
    .sendToDevice(tokens, message)
    .then((response) => {
      console.log("Successfully sent with response: ", response);
      res.status(200).contentType("application/json").json({
        message: "Success",
        data: response,
      });
    })
    .catch((error) => {
      console.error("Something has gone wrong!");
      console.error(error);
      res.status(400);
    });
};

module.exports = sendMessage;