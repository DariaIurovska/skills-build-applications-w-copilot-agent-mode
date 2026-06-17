import mongoose, { Schema } from 'mongoose';
const workoutSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true, enum: ['cardio', 'strength', 'flexibility', 'sports', 'other'] },
    difficulty: { type: String, required: true, enum: ['easy', 'medium', 'hard'] },
    duration: { type: Number, required: true },
    pointsReward: { type: Number, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    completedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });
export const Workout = mongoose.model('Workout', workoutSchema);
//# sourceMappingURL=Workout.js.map