import axios from "axios";

export const loginCall = (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("/auth/login", userCredential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      resolve(res);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      reject(err);
    }
  });
};

