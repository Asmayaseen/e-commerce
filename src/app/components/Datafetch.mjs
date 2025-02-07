import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { client } from "@/sanity/lib/client";

const Datafetch = async () => {
  const query = await client.fetch(
   `*[_type == "product"]{
  _id,
  title,
  label,
  price,
  oldPrice,
  "imageUrl": image.asset->url
}`

  );

  return (
    <div>
      {query.map((product) => (
        <div key={product._id}>
          <h1>{product.productName}</h1>
          <p>{product.price}</p>
          <Image
            src={urlFor(product.image.asset.url).url()}
            alt={product.productName}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default Datafetch;
