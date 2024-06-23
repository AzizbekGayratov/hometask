import React, { useContext } from "react";
import "./Products.css";
import Context from "../../contexts/Context";

const Products = () => {
  const { state } = useContext(Context);
  const products = state.data;

  return (
    <section className="products">
      <div className="products_wrapper">
        <ul className="products_list">
          {products.map((product) => {
            return (
              <div className="product_card" key={product.id}>
                <img
                  className="product_img"
                  src="/src/assets/images/img.svg"
                  alt="img"
                />
                <h3 className="product_title">{product.name}</h3>
                <p className="product_description">{product.description}</p>
                <div className="colors">
                  {product.color.map((color, index) => (
                    <div
                      className="filter_color_option"
                      key={index}
                      style={{
                        backgroundColor: `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`,
                      }}
                    ></div>
                  ))}
                </div>
                <p className="product_price">{product.price} $</p>
                <button className="product_btn">Add to cart</button>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Products;
