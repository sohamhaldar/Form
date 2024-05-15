import mongoose,{Schema} from 'mongoose';

const tableSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    hobbies:{
        type:String,
        default:''
    }

},{timestamps:true});

export const Table=mongoose.model('Table',tableSchema);