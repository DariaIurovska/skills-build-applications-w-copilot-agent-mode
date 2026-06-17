import mongoose, { Schema } from 'mongoose';
const activitySchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, enum: ['running', 'cycling', 'swimming', 'gym', 'yoga', 'walking'] },
    description: { type: String },
    date: { type: Date, default: Date.now },
    duration: { type: Number, required: true },
    distance: { type: Number },
    points: { type: Number, default: 0 },
}, { timestamps: true });
export const Activity = mongoose.model('Activity', activitySchema);
//# sourceMappingURL=Activity.js.map