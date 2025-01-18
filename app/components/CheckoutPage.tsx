import PaymentButton from "./PaymentButton";


export default function CheckoutPage() {
  return (
    <PaymentButton
      amount="100.00"
      productInfo="Product Description"
      customerDetails={{
        firstname: "John Doe",
        email: "john@example.com",
        phone: "1234567890"
      }}
    />
  );
}