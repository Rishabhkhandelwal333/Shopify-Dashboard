import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

export default mongoose.model('User', userSchema);
