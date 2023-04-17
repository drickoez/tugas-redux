import React from "react";
import { Provider } from "react-redux";
import Counter from "./counter/Counter";
import store from "../app/features/store";

const Redux = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Redux;
