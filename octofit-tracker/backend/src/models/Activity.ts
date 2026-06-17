import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IActivity extends Document {
  userId: Types.ObjectId;
  type: string;
  description: string;
  date: Date;
  duration: number;
  distance?: number;
  points: number;
}

const activitySchema = new Schema<IActivity>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, enum: ['running', 'cycling', 'swimming', 'gym', 'yoga', 'walking'] },
    description: { type: String },
    date: { type: Date, default: Date.now },
    duration: { type: Number, required: true },
    distance: { type: Number },
    points: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Activity = mongoose.model<IActivity>('Activity', activitySchema);
