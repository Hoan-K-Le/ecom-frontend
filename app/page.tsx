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

  const signUp = async () => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:8000/signup",
        data: {
          email: email,
          password: password,
          username: username,
        },
      });
      console.log(data, "data 20 frontend");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  console.log(allProducts);
  return (
    <main className="">
      <Navbar />
      <button onClick={signUp}>Sign Up</button>
      <div className="flex flex-wrap justify-between p-4">
        {allProducts &&
          allProducts.map(product => (
            <div className="flex flex-col justify-center w-[200px]">
              <img src={product?.imageurl} alt="logo" className="w-[100px]" />
              <p>{product?.name}</p>
              <p>{product?.description}</p>

              <Link href={`/product/${product.ID}`}>View</Link>
            </div>
          ))}
      </div>
    </main>
  );
}
