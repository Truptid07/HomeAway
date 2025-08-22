const mongoose = require("mongoose");
const Listing = require("./models/listing");
require("dotenv").config();

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const deleteAll = async () => {
  await Listing.deleteMany({});
  console.log("✅ All listings deleted");
};

deleteAll().then(() => mongoose.connection.close());
