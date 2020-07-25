const monsoose = require("mongoose");
const shortId = require("shortid");
const Schema = monsoose.Schema;
const dataSchema = new Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        default: shortId.generate()
    },
    views: {
        type: Number,
        default: 0
    }
});
module.exports = monsoose.model('DataSchema',dataSchema);