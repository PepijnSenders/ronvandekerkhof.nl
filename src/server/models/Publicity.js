import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const publicitySchema = mongoose.Schema({
});

publicitySchema.plugin(timestamps);

export default mongoose.model('Publicity', publicitySchema);
