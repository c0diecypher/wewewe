import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { BackButton } from "@twa-dev/sdk/react";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Header from "./Header";
import Footer from "./Footer";
import SizeInfoDetail from "./SizeInfoDetail";
import Searchbar from "./component/Searchbar";
import Search from "./component/Search";
import Stories from "./Stories";
import Catalog from "./Catalog";
import BasketItem from "./Basket";
import { useTelegram } from "../hooks/useTelegram";

function App() {
  const { tg } = useTelegram();
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="wrapper">
              {tg.expand()}
              {tg.enableClosingConfirmation()}
              <Header />
              <Searchbar />

              <Stories />
              <BasketItem />
              <Catalog />
              <Products />

              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/products/:productId"
          element={
            <>
              <BackButton />
              <ProductDetail />
            </>
          }
        ></Route>
        <Route
          path="/size"
          element={
            <>
              <BackButton />
              <SizeInfoDetail />
            </>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <>
              <BackButton />
              <Search />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
