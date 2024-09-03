export const ProductReviewCard = ({
  text,
  rating,
  userName,
}: {
  text: string;
  rating: number;
  userName: string;
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">{userName}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {i < fullStars ? (
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ) : i === fullStars && hasHalfStar ? (
                  <StarHalf className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ) : (
                  <Star className="w-5 h-5" />
                )}
              </span>
            ))}
            <span className="ml-2 text-sm">{rating}</span>
          </div>
        </div>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Star = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const StarHalf = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className={className}
  >
    <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
  </svg>
);
