import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  joinedDate: Date;
  totalPoints: number;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    joinedDate: { type: Date, default: Date.now },
    totalPoints: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>('User', userSchema);
