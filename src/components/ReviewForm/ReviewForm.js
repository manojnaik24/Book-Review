// src/components/ReviewForm/ReviewForm.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewForm = () => {
  const { bookId } = useParams(); // Gets the bookId from the URL
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the review submission, like an API call
    console.log({ bookId, review, rating });
  };

  return (
    <div>
      <h1>Submit Review</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review"
        />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Star{r > 1 ? 's' : ''}
            </option>
          ))}
        </select>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
