import { api } from "@/api/api";
import { GetServerSideProps } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type ProductItem = {
  id: string;
  slug: string;
  title: string;
  stock: number;
};

const apiKey = "9b3b08f2-e641-40e3-9c60-46303c95da21";

export default function Home(props: any) {
  const { products } = props as { products: ProductItem[] };
  const [category, setCategoryName] = useState(null);

  if (!products.length) return null;

  useEffect(() => {
    if (typeof window === "undefined") return;

    (async () => {
      const category = await api.category(
        `https://api.example.com/category/${products[0].id}`,
        apiKey
      );

      console.log({ category });

      if (!category) {
        console.error("Category not found");
        return;
      }

      // @ts-ignore
      setCategoryName(category);
    })();
  });

  const updatedProducts = products.filter((item) => item.id && item.stock > 0);

  return (
    <main className={`${inter.className} max-w-screen-xl mx-auto p-4`}>
      {category && (
        <h2 className="p-4 text-2xl font-bold text-red-500">
          Browsing {(category as { name: string }).name}
        </h2>
      )}
      <ul className="grid grid-cols-3 gap-x-8 gap-y-16 mt-8">
        {updatedProducts.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col gap-4 p-4 hover:bg-gray-50 rounded-md">
              <img
                src={(item as any).img}
                className="w-full h-44 rounded-md bg-gray-300"
              />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <div className="text-sm pr-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit temporibus quo fugit deserunt, quod hic adipisci.
              </div>
              <a
                href={`/product/${item.slug}`}
                className="bg-red-500 text-white text-xs uppercase rounded-full px-4 py-2 self-start"
              >
                More Details
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<any> = async () => {
  const products = await handleFetchProducts();

  return {
    props: {
      products,
    },
  };
};

async function handleFetchProducts() {
  try {
    const products = await api.products(
      "https://api.example.com/products",
      apiKey
    );
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}
