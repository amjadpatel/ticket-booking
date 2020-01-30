import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Create Book model
const BookSchema = new Schema({
    user_id: { type:Schema.Types.ObjectId ,ref:"User" ,required : true},
    seat_no :{ type : String , required: true},
    is_booked :{ type : Boolean , default : false}
});

export default mongoose.model('Book',BookSchema);
