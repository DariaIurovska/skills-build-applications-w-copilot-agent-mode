import mongoose, { Document, Types } from 'mongoose';
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
export declare const Workout: mongoose.Model<IWorkout, {}, {}, {}, mongoose.Document<unknown, {}, IWorkout, {}, {}> & IWorkout & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Workout.d.ts.map