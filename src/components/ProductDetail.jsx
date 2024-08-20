import React, { useState } from "react";

import FsLightbox from "fslightbox-react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const param = useParams();
  const id = param.id;
  const products = useSelector((state) => state.products.products);
  const product = products[id - 1];
  console.log(product);

  const [toggler, setToggler] = useState(false);

  return (
    <div className="flex w-full">
      <button onClick={() => setToggler(!toggler)}>
				Open the lightbox.
			</button>
      <FsLightbox
				toggler={toggler}
				sources={[
					product.image,
          product.image,
          product.image,
          product.image
				]}
			/>
      <p>{product.title}</p>
    </div>
  );
}

export default ProductDetail;
