import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams(); // Extract the `id` from the URL params
  const [book, setBook] = useState(null);

  // Fetch book details when the component loads
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`/books/${id}`); // Replace with your actual API endpoint
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  // Display a loading message or the book details
  return (
    <div>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          <p>Author: {book.author}</p>
          <p>Rating: {book.rating}</p>
        </>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
};

export default BookDetails;
