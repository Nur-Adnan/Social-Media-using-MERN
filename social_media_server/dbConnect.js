const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://nuradnanchowdhuryanik01:0cEhWhpX72jY34I6@socialmediaappanuj.patcacd.mongodb.net/?retryWrites=true&w=majority&appName=socialMediaAppAnuj";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
