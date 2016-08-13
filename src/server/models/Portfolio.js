import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

export const portfolioSchema = new mongoose.Schema({
});

portfolioSchema.plugin(timestamps);

export default mongoose.model('Portfolio', portfolioSchema);
