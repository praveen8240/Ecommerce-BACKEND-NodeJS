const express = require('express');
require('dotenv').config();
const db = require('./db.js');
const app = express();
const authRoute = require('./routes/auth.js');
const cartRoute = require('./routes/cart.js');
const orderRoute = require('./routes/order.js')
const productRoute = require('./routes/product.js');
const stripeRoute = require('./routes/stripe.js');
const userRoute = require('./routes/user.js');


app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);





const port =process.env.PORT;
app.listen(port,console.log('server listening on port',port));

app.use('/api/user',userRoute);