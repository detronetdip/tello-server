import mongoose from "mongoose";
console.log(1);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected");
  }) 
  .catch((err) => {
    console.log(err);
  });
export default mongoose;
