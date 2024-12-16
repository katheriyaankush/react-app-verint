import { SortType } from "../../types/enums";
import { FilterProps } from "../../types/types";
import SortButton from "../UI/SortButton/SortButton";
import "./Filter.css";

const Filter: React.FC<FilterProps> = ({
  filterText,
  handleSearchChange,
  sortItems,
  selectedSort,
}) => {
  const handleSearchMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value);
  };

  const renderSortButtons = () => {
    const sortOptions = [
      { label: "Name (A-Z)", type: SortType.NameAsc },
      { label: "Name (Z-A)", type: SortType.NameDesc },
      { label: "Low to High", type: SortType.PriceLow },
      { label: "High to Low", type: SortType.PriceHigh },
    ];
    return sortOptions.map((option) => (
      <SortButton
        key={option.type}
        label={option.label}
        onClick={() => sortItems(option.type)}
        isActive={selectedSort === option.type} 
      />
    ));
  };

  return (
    <div className="filter">
      <input
        type="text"
        className="filter-search-input"
        placeholder="Search Products by Name"
        value={filterText}
        onChange={handleSearchMethod}
      />
      <div className="filter-right">{renderSortButtons()}</div>
    </div>
  );
};

export default Filter;
