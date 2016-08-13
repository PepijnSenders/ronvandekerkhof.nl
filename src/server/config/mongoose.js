import mongoose from 'mongoose';
import { URI } from '<server/config>/mongodb';

export default function mongooseConfig() {
    mongoose.connect(URI);
}
