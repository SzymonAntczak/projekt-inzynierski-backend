import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
});

export default Mongoose.model('Restaurant', restaurantSchema);

