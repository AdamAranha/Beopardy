const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContentSchema = new Schema(
    {

    }
)

module.exports = mongoose.model('ContentSchema', ContentSchema)