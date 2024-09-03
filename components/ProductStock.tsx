export const ProductStock = ({ stock }: { stock: number }) => {
  const inStock = stock > 0;
  return (
    <div className="flex items-center gap-2">
      <CircleCheckIcon
        className={`w-5 h-5 ${inStock ? "text-green-500" : "text-red-500"}`}
      />
      <span>{inStock ? "In Stock" : "Out of Stock"}</span>
    </div>
  );
};

const CircleCheckIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
};
