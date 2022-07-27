import mongoose from "mongoose";
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected");
  }) 
  .catch((err) => {
    console.log(err);
  });
export default mongoose;
