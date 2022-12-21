import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected");// skipcq: JS-0002
  }) 
  .catch((err) => {
    console.log(err);// skipcq: JS-0002
  });
export default mongoose;
