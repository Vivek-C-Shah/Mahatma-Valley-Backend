import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB Connected"))
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connectDB;
