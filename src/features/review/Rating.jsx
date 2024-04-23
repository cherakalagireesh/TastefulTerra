import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating() {
  const rating = 4.5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  return (
    <div className="flex gap-1 divide-x">
      <div>
        {[...Array(5)].map((_, index) => {
          if (index < filledStars) {
            return (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-sm text-yellow-500"
              />
            );
          } else if (index === filledStars && hasHalfStar) {
            return (
              <FontAwesomeIcon
                key={index}
                icon={faStarHalfAlt}
                className="text-sm text-yellow-500"
              />
            );
          } else {
            // Empty star
            return (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-sm text-gray-500"
              />
            );
          }
        })}
      </div>
      <span className="pl-1">{rating}</span>
    </div>
  );
}
