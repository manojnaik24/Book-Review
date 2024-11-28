import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Container, Box } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h2" gutterBottom>
        Welcome to the Book Review Platform
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Discover your next favorite book. Read reviews, rate books, and share your thoughts with our community.
      </Typography>

      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ margin: "10px" }}
          onClick={() => window.location.href = "/books"}
        >
          Browse Books
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          style={{ margin: "10px" }}
          onClick={() => window.location.href = "/login"}
        >
          Login
        </Button>
        <Link to="/register">
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              style={{ margin: "10px" }}
            >
              Register
            </Button>
            </Link>
        
      </Box>
    </Container>
  );
};

export default Home;
