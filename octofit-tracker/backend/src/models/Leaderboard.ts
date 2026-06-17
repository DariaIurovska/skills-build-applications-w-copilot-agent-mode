import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ILeaderboard extends Document {
  userId: Types.ObjectId;
  teamId?: Types.ObjectId;
  rank: number;
  points: number;
  activitiesCompleted: number;
  lastUpdated: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
    rank: { type: Number, required: true },
    points: { type: Number, required: true },
    activitiesCompleted: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Leaderboard = mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);
