import { getData } from "@/util/fetchData";
import { useState } from "react";
import ProductItem from "@/components/product/ProductItem";
import Head from "next/head";
const Home = (props) => {
  const [products, setProducts] = useState(props.products);
  console.log(products);

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <div className="products">
        {products.length === 0 ? (
          <h2>No Products</h2>
        ) : (
          products.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              handleCheck={handleCheck}
            />
          ))
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await getData("product");
  console.log(res);
  return {
    props: {
      products: res.products,
      result: res.result,
    }, // will be passed to the page component as props
  };
}
export default Home;
