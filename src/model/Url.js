import mongoose from "mongoose";
import shortid from "shortid";

const Url = new mongoose.Schema({
    OriginalUrl:{
        type: String,
        requird: true
    },
    ShortUrl:{
        type: String,
        required: true,
        default: shortid.generate
    },
})


export default mongoose.model('ShortUrl', Url)