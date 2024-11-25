import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../services/bookService";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Books
      </Typography>
      <List>
        {books.map((book) => (
          <ListItem key={book.id} component={Link} to={`/books/${book.id}`} button>
            <ListItemText primary={book.title} secondary={`by ${book.author}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Books;
