import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReviewForm from './components/ReviewForm/ReviewForm';
import BookList from "./pages/BookList";



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Review/:bookId" component={ReviewForm} />
        <Route path="/BookList" component={<BookList/>}/>
      </Routes>
    </Router>

  );
};

export default App;
