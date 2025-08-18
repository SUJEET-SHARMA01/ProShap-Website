import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductDetails from "./screens/ProductDetails.jsx";
import CardScreen from "./screens/CardScreen.jsx";
import SignIn from "./screens/SignIn.jsx";
import "./assets/Styles/bootstrap.custom.css";
import "./assets/Styles/index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import store from "./redux/store.js";
import {Provider} from "react-redux"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index="true" path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<CardScreen/>} />
      <Route path="/signin" element={<SignIn/>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
