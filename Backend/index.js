import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import Stripe from 'stripe';
dotenv.config();

const stripe = new Stripe(`${process.env.STRIPE_SECRET_URL}`);
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    const lineItems = products.map((product) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: product.name,
            images: [product.image],
          },
          unit_amount: product.price * 100,
        },
        quantity: 1,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'https://bookshop-flax.vercel.app/success',
        cancel_url: 'https://bookshop-flax.vercel.app/cancel',
      });
      res.json({ id: session.id });
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
