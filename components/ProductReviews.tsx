import { api } from "@/api/api";
import React, { useState, useEffect } from "react";
import { ProductReviewCard } from "./ProductReview";

export const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const reviews = await api.reviews(
        `https://api.example.com/reviews/${productId}`
      );

      setReviews(reviews);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold my-4 text-2xl">Product Reviews</h3>
      {reviews.map((review, index) => (
        <div>
          <ProductReviewCard
            text={review.text}
            rating={review.rating}
            userName={review.author}
          />
        </div>
      ))}
    </div>
  );
};
