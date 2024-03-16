import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./App.css";
import AppRouter from "./router/appRouter";

const store = configureStore({});
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
