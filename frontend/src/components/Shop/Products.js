import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const url = "/api/"
const dataLimit = 2

const Products = (props) => {
  const [productList, setProductList] = useState([])
  const [pages] = useState(Math.round(productList.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong :(");
      }

      const responseData = await response.json();
      console.log("res ", responseData)
      setProductList(responseData)
    };

    fetchProducts()
      .then()
      .catch((err) => console.log(err));
  },[]);

const goToPreviousPage = () => {
  setCurrentPage((page) => page - 1);
}

const goToNextPage = () => {
  setCurrentPage((page) => page + 1);
}


const getPaginatedData = () => {
  const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;
  return productList.slice(startIndex, endIndex);
};


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {getPaginatedData().map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            stock={product.stock}
            image_url={product.image}
          />
        ))}
      </ul>
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </section>
  );
};

export default Products;
