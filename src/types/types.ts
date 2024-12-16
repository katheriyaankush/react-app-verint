import { SortType } from "./enums";

export interface StoreItem {
  id: number;
  name: string;
  description: string;
  suggestedPrice: number;
  actualPrice: number;
  discount: number;
  image: string;
}

export interface StorePageProps {
  storeItems: StoreItem[];
  selectedSort: string;
  sortItems: (type: SortType) => void;
  handleBuy: (item: StoreItem) => void;
}

export interface pageName {
  currentPage: string;
  handleHome: () => void;
}


export interface FilterProps {
  filterText: string;
  selectedSort: string
  handleSearchChange: (text: string) => void;
  sortItems: (type: SortType) => void;
}

export interface SortButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean; 
}

export interface ConfirmationPageProps {
  selectedItem: StoreItem;
}