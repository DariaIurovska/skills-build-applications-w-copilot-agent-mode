import mongoose, { Document, Types } from 'mongoose';
export interface ITeam extends Document {
    name: string;
    description: string;
    leader: Types.ObjectId;
    members: Types.ObjectId[];
    createdDate: Date;
    totalPoints: number;
}
export declare const Team: mongoose.Model<ITeam, {}, {}, {}, mongoose.Document<unknown, {}, ITeam, {}, {}> & ITeam & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Team.d.ts.map