import mongoose, { Schema } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    leader: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdDate: { type: Date, default: Date.now },
    totalPoints: { type: Number, default: 0 },
}, { timestamps: true });
export const Team = mongoose.model('Team', teamSchema);
//# sourceMappingURL=Team.js.map