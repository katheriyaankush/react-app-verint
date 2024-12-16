import { useState, useEffect } from "react";
import { StorePageProps, StoreItem } from "../../types/types";
import Filter from "../../Components/Filter/Filter";
import useDebounce from "../../Hooks/useDebounce";
import "./StorePage.css";
import ProductCard from "../../Components/ProductCard/ProductCard";

const StorePage: React.FC<StorePageProps> = ({
  storeItems,
  sortItems,
  handleBuy,
  selectedSort,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<StoreItem[]>(storeItems);

  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    const filterItems = () => {
      const filtered = storeItems.filter((item) =>
        item.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
      );
      setFilteredItems(filtered);
    };
    filterItems();
  }, [debouncedSearchText, storeItems]);

  const handleSearchChange = (value: string) => {
    setSearchText(value);
  };

  return (
    <div className="store-page">
      <Filter
        filterText={searchText}
        handleSearchChange={handleSearchChange}
        sortItems={sortItems}
        selectedSort={selectedSort}
      />
      <div className="product-grid">
        {filteredItems.map((item) => (
          <ProductCard key={item.id} item={item} handleBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
};

export default StorePage;
