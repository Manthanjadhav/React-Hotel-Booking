import { USER_API_END_POINT } from "./utils/constants";

export const registerUser = async (formData) => {
    try {
      const response = await fetch(`${USER_API_END_POINT}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const resData = await response.json();
      if (response.ok && resData.success) {
        navigate("/login");
      } else {
        console.log(resData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } 
  };