const monsoose = require("mongoose");
const customId = require("custom-id");
const Schema = monsoose.Schema;
const dataSchema = new Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        default: customId({ lowerCase: true })
    },
    views: {
        type: Number,
        default: 0
    }
});
module.exports = monsoose.model('DataSchema',dataSchema);