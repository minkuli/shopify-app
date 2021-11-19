import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description, stock, image_url } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>€{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <p>Currently in stock: {stock} pieces</p>
        </div>
        <img src={image_url} alt='product-img' className={classes.img} />
      </Card>
    </li>
  );
};

export default ProductItem;
