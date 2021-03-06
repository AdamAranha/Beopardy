const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
        },

        password: {
            type: String,
            trim: true
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema);