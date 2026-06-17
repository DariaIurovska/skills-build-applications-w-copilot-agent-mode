import mongoose, { Schema } from 'mongoose';
const leaderboardSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
    rank: { type: Number, required: true },
    points: { type: Number, required: true },
    activitiesCompleted: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now },
}, { timestamps: true });
export const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
//# sourceMappingURL=Leaderboard.js.map