import createHttpError from 'http-errors';
import { UsersCollection } from '../models/user.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const updateUserAvatar = async (req, res) => {
  if (!req.file) throw createHttpError(400, 'No file');

  const result = await saveFileToCloudinary(
    req.file.buffer,
    req.user._id.toString(),
  );

  await UsersCollection.updateOne(
    { _id: req.user._id },
    { avatar: result.secure_url },
  );

  res.json({ url: result.secure_url });
};
