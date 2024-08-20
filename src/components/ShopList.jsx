import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import ProductItem from "./ProductItem";
import Sidebar from "./Sidebar";
import { useSearchParams } from "react-router-dom";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helpers/helpers";
import SearchBox from "./SearchBox";
import { Bars } from "react-loader-spinner";

function ShopList() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products)
  const products = useSelector((state) => state.products.products);

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  console.log(products);
  return (
    <>
      <div className="max-w-[1400px] m-auto mt-10">
        
          <SearchBox
            search={search}
            setSearch={setSearch}
            setQuery={setQuery}
          />
        
        <div className="flex ">
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-10 my-10 gap-5 md:gap-8 ">
            {product.loading ? (
              <div className="col-span-full m-auto"><Bars color="#2563eb" width={60} /></div>
            ) : displayed.length ? (
              displayed.map((product) => (
                <div key={product.id}>
                  <ProductItem data={product} />
                </div>
              ))
            ) : product.error ? (
              <p className="text-center col-span-full">there is an error</p>
            ) : null}
          </div>
          <div className="my-10 mr-10">
            <Sidebar query={query} setQuery={setQuery} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopList;
