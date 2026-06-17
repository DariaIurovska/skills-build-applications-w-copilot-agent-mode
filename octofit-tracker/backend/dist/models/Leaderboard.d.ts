import mongoose, { Document, Types } from 'mongoose';
export interface ILeaderboard extends Document {
    userId: Types.ObjectId;
    teamId?: Types.ObjectId;
    rank: number;
    points: number;
    activitiesCompleted: number;
    lastUpdated: Date;
}
export declare const Leaderboard: mongoose.Model<ILeaderboard, {}, {}, {}, mongoose.Document<unknown, {}, ILeaderboard, {}, {}> & ILeaderboard & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Leaderboard.d.ts.map