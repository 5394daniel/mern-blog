import mongoose from "mongoose";

// it is kind of rule or conditions for our user

// mongo db is going to check or validate this
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
},  {timestamps:true}   // this is for the time of creation of user and update
);

const User = mongoose.model('User',userSchema);  // mongodb itself going to add 's' in User like Users

export default User;