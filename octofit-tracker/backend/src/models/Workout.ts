import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  description: string;
  type: string;
  difficulty: string;
  duration: number;
  pointsReward: number;
  createdBy: Types.ObjectId;
  completedBy: Types.ObjectId[];
}

const workoutSchema = new Schema<IWorkout>(
  {
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true, enum: ['cardio', 'strength', 'flexibility', 'sports', 'other'] },
    difficulty: { type: String, required: true, enum: ['easy', 'medium', 'hard'] },
    duration: { type: Number, required: true },
    pointsReward: { type: Number, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    completedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
