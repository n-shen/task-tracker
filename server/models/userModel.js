import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    user_name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    backup_code: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('userModel',userSchema)

export default User;
