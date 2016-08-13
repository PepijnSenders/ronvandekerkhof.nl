import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const aboutSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

aboutSchema.plugin(timestamps);

export default mongoose.model('About', aboutSchema);
