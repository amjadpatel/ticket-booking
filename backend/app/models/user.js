import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Create User model
const UserSchema = new Schema({
    name: { type: String ,required: true},
    email: {type : String ,required: true}
});

export default mongoose.model('User',UserSchema);
