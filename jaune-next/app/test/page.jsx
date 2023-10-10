"use client";
import StripeContainer from "@/components/StripeContainer";
import React, { useState } from "react";

const url = "https://www.creativefabrica.com/wp-content/uploads/2018/10/Store-shop-logo-by-DEEMKA-STUDIO-580x406.jpg";

export default function TestPage() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      <h1>Paga</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <div>
          <h3>$10.00</h3>
          <img src={`${url}`} alt="random img" />
          <button onClick={() => setShowItem(true)}>Purchase item</button>
        </div>
      )}
    </div>
  );
}
