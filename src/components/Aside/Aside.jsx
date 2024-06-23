import React, { useEffect, useContext, useState } from "react";
import Context from "../../contexts/Context";
import "./Aside.css";

const Aside = () => {
  const [color, setColor] = useState([]);
  const [brand, setBrand] = useState([]);
  const [load, setLoad] = useState(true);

  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch("http://localhost:3000/brands");
        const brandData = await response.json();
        setBrand(brandData);

        const response2 = await fetch("http://localhost:3000/colors");
        const colorData = await response2.json();
        setColor(colorData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTools();
  }, []);

  return (
    <aside className="aside">
      <div className="aside__wrapper">
        <ul className="filter_list">
          <li className="filter_box">
            <h3 className="filter__title">Brand</h3>
            <ul className="filter_brand_list">
              {brand.map((i, _) => {
                return (
                  <li key={_} className="filter_option_item">
                    <label htmlFor={i + "_brand" + _} className="brand_text">
                      {i}
                    </label>
                    <input
                      onClick={(e) => {
                        const newState = state.data.filter(
                          (product) =>
                            product.brand === e.target.labels[0].innerText
                        );
                        dispatch({ type: "FETCH_SUCCESS", payload: newState });
                        setLoad(!load);
                      }}
                      type="radio"
                      className="filter_brand_option"
                      id={i + "_brand" + _}
                      name="brand"
                    />
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="filter_box">
            <h3 className="filter__title">Color</h3>
            <ul className="filter_option_list">
              {color.map((i, _) => {
                return (
                  <li
                    key={_}
                    className="filter_color_option"
                    style={{ background: i }}
                  >
                    <label
                      htmlFor={i + "_color" + _}
                      className="color_text"
                    ></label>
                    <input
                      onClick={(e) => {
                        const newState = state.data.filter(
                          (product) =>
                            product.color === e.target.labels[0].innerText
                        );
                        dispatch({ type: "FETCH_SUCCESS", payload: newState });
                        setLoad(!load);
                      }}
                      type="radio"
                      className="filter_color_option"
                      id={i + "_color" + _}
                      name="color"
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
