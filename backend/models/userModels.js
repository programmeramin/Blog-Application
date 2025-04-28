import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
    },

    password : {
        type : String,
        required : true,
        trim : true,
    },

    profilePicture : {
        type : String,
        default : "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg",
       },
    
        role : {
            type :  String,
            enum : ["user", "admin"],
        }

},{timestamps : true});

export default mongoose.model("User", userSchema)