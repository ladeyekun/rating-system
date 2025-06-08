import { useState } from 'react';
import Star from './Star';

function StarRating() {
  const [selectedRating, setSelectedRating] = useState(0);
  const ratingInfo = ['Very Unlikely', 'Unlikely', 'Neutral', 'Likely', 'Very Likely'];

  return (
    <>
      <div className="stars flex">
        {Array(5).fill(0).map((_, index) => (
          <Star key={index} selected={index < selectedRating} onClick={() => setSelectedRating(index + 1)} />
        ))}
      </div>
      <h2 className="flex flex-center">{selectedRating > 0 ? ratingInfo[selectedRating - 1] : 'Choose Rating'}</h2>
    </>
  );
}

export default StarRating;