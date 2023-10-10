import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51Nx8dWKHwlKBibi9a3lWbAzxAkywgv4tZF5WcLLbCko9c2RXv2L25U6xi5K7lErXPID8prXAu0hBToyyj3MNP53X00wQfvbWNJ";

const stripePromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
