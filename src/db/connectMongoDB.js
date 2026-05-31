import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('✅ MongoDB connection established successfully');
};
