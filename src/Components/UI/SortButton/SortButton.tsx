import { SortButtonProps } from "../../../types/types";
import "./SortButton.css";

const SortButton: React.FC<SortButtonProps> = ({
  label,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={`sort-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SortButton;
