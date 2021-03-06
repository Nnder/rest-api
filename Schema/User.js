import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true}
})

export default mongoose.model('user', User);