import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    joinedDate: { type: Date, default: Date.now },
    totalPoints: { type: Number, default: 0 },
}, { timestamps: true });
export const User = mongoose.model('User', userSchema);
//# sourceMappingURL=User.js.map