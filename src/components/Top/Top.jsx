import React from "react";
import Context from "../../contexts/Context";
import "./Top.css";

const Top = () => {
  const { state, dispatch } = React.useContext(Context);

  const select = (value) => {
    if (value === "0") {
      const getData = () => {
        fetch("http://localhost:3000/products")
          .then((response) => response.json())
          .then((data) => {
            dispatch({ type: "FETCH_SUCCESS", payload: data });
          });
      };
      getData();
    } else if (value === "price") {
      const getData = () => {
        fetch("http://localhost:3000/products?_sort=price")
          .then((response) => response.json())
          .then((data) => {
            dispatch({ type: "SORT_BY_PRICE", payload: data });
          });
      };
      getData();
    } else if (value === "-price") {
      const getData = () => {
        fetch("http://localhost:3000/products?_sort=-price")
          .then((response) => response.json())
          .then((data) => {
            dispatch({ type: "SORT_BY_PRICE", payload: data });
          });
      };
      getData();
    }
  };

  return (
    <div className="top">
      <div className="container">
        <div className="wrapper">
          <h2 className="top__title">Filter By:</h2>
          <select onChange={(e) => select(e.target.value)} id="sort_by_price">
            <option className="default_option" default value="0">
              Sort By Price
            </option>
            <option value="price">Low to High</option>
            <option value="-price">High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Top;
