import { useEffect, useState } from "react";

export const MobileBanner = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return isMobile ? (
    <div className="bg-red-700 text-white p-2 rounded-md">
      <h3 className="text-lg font-bold">Hot Deal</h3>
      <p className="text-sm">Get 50% off on all orders</p>
      <span className="text-sm">
        Apply code at checkout: <span className="font-bold">HOTDEAL</span>
      </span>
    </div>
  ) : null;
};
