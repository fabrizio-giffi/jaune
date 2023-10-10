require("dotenv").config();
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// Route handling
const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

const checkoutRoutes = require("./routes/checkout.routes");
app.use("/checkout", checkoutRoutes);


// Error handling
require("./error-handling")(app);

module.exports = app;
