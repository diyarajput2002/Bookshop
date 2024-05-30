import React from "react";
import { loadStripe } from "@stripe/stripe-js";

function Cards({ item }) {
  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51PL6KsSI7GR5qFiugkkVHrgC2hzeW43wkK9VB8REE24T4SqUrAV2duqf63ggBoIjD8n4jiypHH2fbps3gwQ1AKV500lh53Syyj");
    const body = { products: [item] };
    const headers = { "Content-Type": "application/json" };

    const response = await fetch("https://bookshop-awkr.onrender.com/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error("Stripe checkout error:", result.error.message);
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline text-center py-4 px-4">₹{item.price}</div>
            <button
              className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              onClick={makePayment}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
