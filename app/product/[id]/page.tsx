"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "@/store";
import { useParams } from "next/navigation";
import { getProductItem } from "@/store/singleProduct";

function ProductItem() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const productItem = useAppSelector(state => state.singleProduct.productItem);

  useEffect(() => {
    dispatch(getProductItem(id.toString()));
  }, [id]);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col w-[500px] justify-center items-center">
        <img
          src={productItem?.imageurl}
          alt="product"
          className="w-full h-[350px]"
        />
        <p>{productItem?.name}</p>
        <p>{productItem?.description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
