"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useAppSelector, AppDispatch } from "@/store";
import { UseDispatch, useDispatch } from "react-redux";
import { getAllProducts } from "@/store/products";
import Link from "next/link";
export default function Home() {
  // const [user, setUser] = useState([]);
  const [username, setUsername] = useState("hoannsdope");
  const [password, setPassword] = useState("blehbleh");
  const [email, setEmail] = useState("loveme@yahoo.com");
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const allProducts = useAppSelector(state => state.products.products);

  // test get all products
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

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <main className="p-10 flex flex-col gap-10">
      <Navbar />
      <div className="flex flex-wrap gap-14">
        {allProducts &&
          allProducts.map(product => (
            <div className="flex flex-col justify-center items-center w-[400px]  border">
              <img
                src={product?.imageurl}
                alt="logo"
                className="w-full h-[350px]"
              />
              <p>{product?.name}</p>
              <p>{product?.description}</p>

              <Link href={`/product/${product.ID}`}>View</Link>
            </div>
          ))}
      </div>
    </main>
  );
}
