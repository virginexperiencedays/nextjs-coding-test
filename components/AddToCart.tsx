export const AddToCart = () => {
  return (
    <button
      className="p-1 bg-red-500 text-white rounded-md"
      onClick={() => {
        alert("Product added!");
      }}
    >
      Add to Cart
    </button>
  );
};
