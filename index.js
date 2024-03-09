const express = require("express");
const cors = require("cors");
const connectDatabase = require("./utils/connectDatabase");
const userRouter= require("./routes/userRoutes");
const transactionRoute = require("./routes/transactionRoutes");

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

connectDatabase();
app.use(userRouter);
app.use(transactionRoute)

app.listen(port, () => {
  console.log(
    `Kindly be advised that your backend server has been successfully initiated and is presently operational on port ${port}`
  );
});
