export const ProductImage = ({ src }: { src: string }) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <img
        src={src}
        alt="Product Image"
        width={600}
        height={600}
        className="object-cover w-full aspect-square"
      />
    </div>
  );
};
