import mongoose from "mongoose";
import "dotenv/config";

const connectDatabase = () => {
  console.log("Conectando ao banco...");
  mongoose
    .connect(
      process.env.DATABASE_URL,
      {useNewUrlParser: true},
      {useUnifiedTopology: true}
    )
    .then(() => console.log("Conectado!"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
