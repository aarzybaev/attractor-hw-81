import {ObjectId} from "mongodb";

export interface LinkWoId {
    shortUrl: string;
    originalUrl: string;
}

export interface LinkApi extends LinkWoId {
    _id: ObjectId;
}