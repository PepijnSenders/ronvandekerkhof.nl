import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const dateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

dateSchema.plugin(timestamps);

export default mongoose.model('Date', dateSchema);
