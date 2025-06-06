import { useState } from 'react';
import Star from './Star';

function StarRating() {
  const [selectedRating, setSelectedRating] = useState(0);
  const ratingInfo = ['Very Poor', 'Poor', 'Okay', 'Good', 'Very Good'];

  return (
    <>
      <div className="stars flex">
        {Array(5).fill(0).map((_, index) => (
          <Star key={index} selected={index < selectedRating} onClick={() => setSelectedRating(index + 1)} />
        ))}
      </div>
      <h2>{selectedRating > 0 ? ratingInfo[selectedRating - 1] : 'Choose Rating'}</h2>
    </>
  );
}

export default StarRating;