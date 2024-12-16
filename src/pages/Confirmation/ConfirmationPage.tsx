import { ConfirmationPageProps } from "../../types/types";
import "./ConfirmationPage.css";

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  selectedItem,
}) => {
  const { name, actualPrice, description } = selectedItem;
  return (
    <section className="confirmation-page">
      <div className="order-summary">
        <p className="confirmation-message">
          {" "}
          🎉 Congratulations! Your order has been successfully placed.🎉
        </p>
        <p>
          Order Number: <strong>{Math.floor(Math.random() * 100000)}</strong>
        </p>
        <p>
          Item: <strong>{name}</strong>
        </p>
        <p>
          Amount Charged: <strong>{actualPrice} Rs</strong>
        </p>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default ConfirmationPage;
