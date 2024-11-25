import axios from "axios";

const API_URL = "http://localhost:3000/books";
 // Replace with your backend URL

export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error.message);
    throw error; // Re-throw the error to handle it in the UI
  }
};
