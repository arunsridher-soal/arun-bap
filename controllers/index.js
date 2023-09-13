const sendAcknowledgement = (res, ack) => {
  res.status(200).json({
    message: {
      ack: {
        status: ack,
      },
    },
  });
};

const requestForwarder = async (url, reqData) => {
  try {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        random_header: "hey there",
      },
      withCredentials: true,
      mode: "cors",
    };
    console.log("calling request forwarder");
    const response = await axios.post(url, reqData, requestOptions);
    return response.data;
  } catch (err) {
    console.error("error in request forwarder: ", err);
    throw new InternalServerError("Internal Server Error");
  }
};

export const on_select = async (req, res) => {
  try {
    const reqData = req.body;
    sendAcknowledgement(res, "ACK");
    return requestForwarder(process.env.PROXY_URI, reqData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "failure",
    });
  }
};
