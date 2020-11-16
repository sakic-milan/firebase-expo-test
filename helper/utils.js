import axios from "axios";

export const fetchApi = async (configRequest, data) => {
  let response;

  try {
    response = await axios({
      method: configRequest.method,
      url: configRequest.url,
      headers: {
        "Content-Type": configRequest.contentType,
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    return {
      response,
      status: "success",
    };
  } catch (error) {
    return {
      response,
      status: "error",
      error,
    };
  }
};
