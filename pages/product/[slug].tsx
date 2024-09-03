import { useState } from "react";
import type { GetServerSideProps } from "next";

import { AddToCart } from "@/components/AddToCart";
import { ProductImage } from "@/components/ProductImage";
import { ProductStock } from "@/components/ProductStock";
import { ProductReviews } from "@/components/ProductReviews";
import ProductQuantity from "@/components/ProductQuantity";
import { MobileBanner } from "@/components/MobileBanner";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug;
  const isMobile = window.innerWidth < 768;

  const res = await fetch(new URL("/api/getAllProducts", context.req.url));

  if (!res.ok)
    return {
      notFound: true,
    };
  const allProducts = await res.json();

  const product = allProducts.find((product: any) => product.slug === slug);

  return { props: { product } };
};

export default function ProductPage(props: any) {
  const { product, isMobile } = props;
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="p-4 container max-w-4xl mx-auto my-8 grid gap-8 md:grid-cols-2">
      <ProductImage src={product.img} />
      <div className="grid gap-4">
        <h1 title={product.title}></h1>
        <div>{product.description}</div>
        <div className="text-2xl font-bold">${product.price}</div>
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        <ProductStock stock={product.stock} />
        <AddToCart />
      </div>
      {isMobile && <MobileBanner />}
      <ProductReviews productId={product.id} />
    </section>
  );
}
