import axios from "axios";
import { message } from "./messages";
import toast from "react-hot-toast";

const api = process.env.REACT_APP_API;

export const createDelete = ({ url }) => {
  return async (id) => {
    try {
      const { data } = await axios.delete(`${api}${url}?id=${id}`, {
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      });
      message(data);
    } catch (err) {
      console.error(err);
      toast.error("operation failed!");
    }
  };
};

export const createGet = ({ url }) => {
  return async () => {
    try {
      const { data } = await axios.get(api + url, {
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      });
      return data;
    } catch (err) {
      console.error(err);
      toast.error("operation failed!");
    }
  };
};

export const createPost = ({ url, reaction, dataToPost }) => {
  return async (data) => {
    try {
      const response = await axios.post(
        api + url,
        dataToPost ? dataToPost : data,
        {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        }
      );
      reaction(response.data);
      message(response.data);
    } catch (err) {
      console.error(err);
      toast.error("operation failed!");
    }
  };
};

export const createPatch = ({ url, reaction, dataToPost }) => {
  return async (data) => {
    try {
      const response = await axios.patch(
        api + url,
        dataToPost ? dataToPost : data,
        {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        }
      );
      reaction(response.data);
      message(response.data);
    } catch (err) {
      console.error(err);
      toast.error("operation failed!");
    }
  };
};

export const createRequests = ({ url, reaction, dataToPost }) => {
  return {
    delete: createDelete({ url }),
    get: createGet({ url }),
    post: createPost({ url, reaction, dataToPost }),
    patch: createPatch({ url, reaction, dataToPost }),
  };
};
