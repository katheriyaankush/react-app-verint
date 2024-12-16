import React, { useState } from "react";
import ConfirmationPage from "./pages/Confirmation/ConfirmationPage";
import StorePage from "./pages/StorePage/StorePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Header from "./Components/Header/Header";
import productList from "./Assests/data.json";
import { StoreItem } from "./types/types";
import { Page, SortType } from "./types/enums";
import "./App.css";

const App: React.FC = () => {
  const [storeItems, setStoreItems] = useState<StoreItem[]>(productList);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);
  const [currentPage, setCurrentPage] = useState<string>("Store");
  const [selectedSort, setSelectedSort] = useState<SortType | string>("");

  const sortItems = (type: string) => {
    setSelectedSort(type);
    const sorted = [...storeItems].sort((a, b) => {
      if (type === SortType.NameAsc) return a.name.localeCompare(b.name);
      if (type === SortType.NameDesc) return b.name.localeCompare(a.name);
      if (type === SortType.PriceLow) return a.actualPrice - b.actualPrice;
      if (type === SortType.PriceHigh) return b.actualPrice - a.actualPrice;
      return 0;
    });
    setStoreItems(sorted);
  };

  const handleBuy = (item: StoreItem) => {
    setSelectedItem(item);
    setCurrentPage(Page.Checkout);
  };

  const handleOrderSubmit = () => setCurrentPage(Page.Confirmation);

  const handleHome = () => {
    setSelectedItem(null);
    setStoreItems(productList);
    setCurrentPage(Page.Store);
    setSelectedSort("");
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case Page.Store:
        return (
          <StorePage
            storeItems={storeItems}
            sortItems={sortItems}
            handleBuy={handleBuy}
            selectedSort={selectedSort}
          />
        );
      case Page.Checkout:
        return (
          selectedItem && (
            <CheckoutPage
              selectedItem={selectedItem}
              handleOrderSubmit={handleOrderSubmit}
            />
          )
        );
      case Page.Confirmation:
        return selectedItem && <ConfirmationPage selectedItem={selectedItem} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} handleHome={handleHome} />
      {renderPageContent()}
    </div>
  );
};
export default App;
