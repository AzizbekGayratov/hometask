import React from "react";
import { Top, Aside, Products } from "./components/CombinedComponents.js";
import { useEffect, useReducer } from "react";
import Context from "./contexts/Context.js";
import reducer from "./contexts/Reducer.js";

const initialState = {
  data: [],
  error: null,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();

        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error });
      }
    };

    fetchData();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Top />
      <main className="main">
        <div className="container">
          <div className="main_wrapper">
            <Aside />
            <Products />
          </div>
        </div>
      </main>
    </Context.Provider>
  );
};

export default App;
