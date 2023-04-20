import app from "./app";
import mongoose from "mongoose";

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
const DB = process.env.DATABASE_DEV!.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD!,
);

mongoose.connect(DB, {
}).then(() => console.log('DB connection successful!'));