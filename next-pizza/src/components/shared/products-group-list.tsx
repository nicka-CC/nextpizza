'use client'
import {Title} from "./title";
import {cn} from "../../lib/utils";
import {ProductCard} from "./product-cart";
import {useEffect, useRef} from "react";
import {useIntersection} from "react-use";
import React from "react";
import {useCategoryStore} from "../../../store/category";

interface Props {
  title:string;
  products:any[];
  className?:string;
  listClassName?:string;
  categoryId: number;
}
export const ProductsGroupList = ({className,title,products,listClassName, categoryId}:Props) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef,{threshold: 0.4,});
  const setOnCategoryId = useCategoryStore((state:any) => state.setActiveId)
  useEffect(()=>{
    if (intersection?.isIntersecting){
      setOnCategoryId(categoryId);
    }
  },[categoryId, intersection?.isIntersecting, title])
  return(
    <div id={title} ref={intersectionRef}>
       <Title text={title} size="lg" className="font-extrabold mb-5"/>
      <div className={cn('grid grid-cols-3 gsp-[50px]', listClassName)}>
        {products.map((product:any, key:number)=>
        <ProductCard key={key} id={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl}/>)}
      </div>
    </div>
  )
}