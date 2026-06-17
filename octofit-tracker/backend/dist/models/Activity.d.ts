import mongoose, { Document, Types } from 'mongoose';
export interface IActivity extends Document {
    userId: Types.ObjectId;
    type: string;
    description: string;
    date: Date;
    duration: number;
    distance?: number;
    points: number;
}
export declare const Activity: mongoose.Model<IActivity, {}, {}, {}, mongoose.Document<unknown, {}, IActivity, {}, {}> & IActivity & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Activity.d.ts.map