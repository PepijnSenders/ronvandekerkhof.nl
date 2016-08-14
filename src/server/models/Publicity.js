import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const publicitySchema = new mongoose.Schema({
    images: [{
        link: String,
        size: {
            width: Number,
            height: Number,
        },
    }],
    title: String,
    description: String,
    link: String,
});

publicitySchema.plugin(timestamps);

export default mongoose.model('Publicity', publicitySchema);
