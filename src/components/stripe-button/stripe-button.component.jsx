import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JilKcC1AWNZwlax8bTxZ8BQK4jSHz31OGDk1Qc1bCECPQ4QU1hedQbdakox72bNYRcdiMp3UB9Qva0EYj5emzKT00DJcNMbfk";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SMNV CLOTHING LLC"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="PayNow"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
