const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");

// @desc Create order
const createOrder = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate(
    "items.product"
  );

  if (!cart || cart.items.length === 0) {
    res.status(400);
    throw new Error("Cart is empty");
  }

  const orderItems = cart.items.map((item) => ({
    product: item.product._id,
    quantity: item.quantity,
    price: item.product.price,
  }));

  const totalPrice = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const order = await Order.create({
    user: req.user._id,
    orderItems,
    totalPrice,
  });

  cart.items = [];
  await cart.save();

  res.status(201).json(order);
};

// @desc Get user orders
const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate(
    "orderItems.product"
  );
  res.json(orders);
};

module.exports = { createOrder, getMyOrders };
