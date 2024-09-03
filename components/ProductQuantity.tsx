import { type Dispatch, type SetStateAction } from "react";

export default function ProductQuantity({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}) {
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(0, prev - 1));

  const handleInputChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value);
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="flex items-center space-x-2">
        <button onClick={decrement}>
          <MinusIcon className="h-4 w-4" />
        </button>
        <input
          value={quantity}
          onChange={handleInputChange}
          className="w-20 text-center"
          min="0"
          type="number"
        />
        <button onClick={increment}>
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

const PlusIcon = ({ className }: { className: string }) => (
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
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const MinusIcon = ({ className }: { className: string }) => (
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
    <path d="M5 12h14" />
  </svg>
);
