"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "@/store/products";
import { useAppSelector, AppDispatch } from "@/store";
import Link from "next/link";

function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const dispatch = useDispatch<AppDispatch>();
  const allProducts = useAppSelector(state => state.products.products);

  const fetchAllProducts = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "http://localhost:8000/product/all",
      });
      dispatch(getAllProducts(data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickCategory = (category: string): void => {
    setActiveCategory(category);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter(
          product =>
            product.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center gap-10 text-3xl border-b-2 pb-6 ">
        <button onClick={() => handleClickCategory("all")}>Shop</button>
        <button onClick={() => handleClickCategory("shirt")}>Top</button>
        <button onClick={() => handleClickCategory("pants")}>Pants</button>
      </div>
      {/* Update this div to use grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {filteredProducts &&
          filteredProducts.map(product => (
            <div className="flex flex-col justify-center items-center w-[400px] border">
              <img
                src={product?.imageurl}
                alt="product"
                className="w-full h-[350px]"
              />
              <p>{product?.name}</p>
              <p>{product?.description}</p>
              <Link href={`/product/${product.ID}`}>View</Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
