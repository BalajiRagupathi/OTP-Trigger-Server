const exp = require("express");
const app = exp();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/messageRouter");
const { port } = require("./utils/env");

app.use(cors());
app.use(exp.json());

// ---------------- Routings start-----------------

// User routing
app.use("/api",userRouter);

// SMS routing
app.use("/api/otp",messageRouter);

// -----------------Routing End---------------------

// Server listening port
app.listen(port || 3001,() => {
    console.log(port)
});