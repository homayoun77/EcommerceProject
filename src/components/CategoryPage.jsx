import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Link, useParams } from "react-router-dom";
import CategoryButtons from "./CategoryButtons";

function CategoryPage() {
  const param = useParams();
  const category = param.type;

  const products = useSelector((state) => state.products);
  const allProducts = products.products;

  const filter = allProducts.filter((product) => product.category === category);
  console.log(filter);

  return (
    <>
    <div className="mt-10">
        <CategoryButtons active={category} />
      </div>
    <div className="flex">
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center mx-5 my-10 gap-5 md:gap-8 md:mx-10 lg:mx-20">
        {filter.map((product) => (
          <div key={product.id}>
            <ProductItem data={product} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default CategoryPage;
