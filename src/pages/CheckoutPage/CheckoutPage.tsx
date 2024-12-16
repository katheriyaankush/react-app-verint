import React, { useState } from "react";
import { StoreItem } from "../../types/types";
import "./CheckoutPage.css";

interface CheckoutPageProps {
  selectedItem: StoreItem;
  handleOrderSubmit: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  selectedItem,
  handleOrderSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    creditCard: "",
  });
  const [error, setError] = useState<string | null>(null);

  const cardNumberPattern = "^\\d{16}$";
  const formatPhoneNumber = (value: string, regex: RegExp) => {
    const numericValue = value.replace(regex, "");
    if (numericValue.length <= 3) return numericValue; 
    if (numericValue.length <= 6) return `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
    return `${numericValue.slice(0, 3)}-${numericValue.slice(3,6)}-${numericValue.slice(6, 10)}`;
  };
  const handleBlur = () => {
    if (formData.phone.length !== 12) {
      setError(
        "Phone number must be in 10 digits. Please use proper format and enter 10 digits."
      );
    } else {
      setError(null);
    }
  };

  const handleInputChange = (field: string, value: string, regex: RegExp) => {
    if (field === "phone") {
      let formatNumber = formatPhoneNumber(value, regex);
      setFormData((prev) => ({ ...prev, [field]: formatNumber }));
    } else if (regex.test(value)) {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };
  const validateText = (value: string) => value.replace(/[^A-Za-z ]/g, "");
  return (
    <div className="checkout-page">
      <section className="selected-item-summary">
        <p>
          <strong>{selectedItem.name}</strong>
        </p>
        <p className="description">{selectedItem.description}</p>
        <p>
          Price: <strong>{selectedItem.actualPrice} Rs</strong>
        </p>
      </section>

      <form
        className="checkout-form"
        onSubmit={(e) => {
          e.preventDefault();
          !error && handleOrderSubmit();
        }}
      >
        <input
          id="fullName"
          type="text"
          value={formData.name}
          onChange={(e) =>
            handleInputChange("name", validateText(e.target.value), /.*/)
          }
          title="Name can only contain letters and spaces."
          placeholder="Full Name"
          required
        />
        <input id="address" type="text" placeholder="Address" required />
        <input id="email" type="email" placeholder="Email" required />

        <input
          id="phone"
          type="text"
          maxLength={12}
          onBlur={handleBlur}
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value, /\D/g)}
          title="Phone number must be exactly 10 digits."
          placeholder="Phone Number"
          required
        />
        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}

        <input
          id="creditCard"
          type="text"
          pattern={cardNumberPattern}
          value={formData.creditCard}
          onChange={(e) =>
            handleInputChange("creditCard", e.target.value, /^\d{0,16}$/)
          }
          title="Card number must be 16 digits."
          placeholder="Credit Card Number"
          required
        />

        <button type="submit" className="submit-button">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
