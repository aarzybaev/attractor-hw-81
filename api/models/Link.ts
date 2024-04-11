import mongoose from "mongoose";
import config from "../config";


const Schema = mongoose.Schema;

const LinkSchema = new Schema({
   originalUrl: {
       type: String,
       required: true
   },
    shortUrl: String
}, config.mongoose.versionKey);

const Link = mongoose.model('Link', LinkSchema);
export default Link;