import express from 'express';
import Link from '../models/Link';
import {LinkApi} from "../types";
import {generateRandomId} from "../utils";

const linksRouter = express.Router();

linksRouter.get('/:shortUrl', async (req, res, next) => {
    try {
        const shortUrl = req.params.shortUrl;
        if (shortUrl === undefined || (/^\s*$/.test(shortUrl))) {
            return res.status(400).json({"error": "Shor URL must be present in the request"});
        }

        const link: LinkApi | null = await Link.findOne({shortUrl});

        if (!link) {
            return res.status(404).send({error: 'Short URL not found'});
        }

        return  res.status(301).redirect(link.originalUrl);

    } catch (e) {
        next(e);
    }

});

linksRouter.post('/',  async (req, res, next) => {
    const originalUrl = req.body.originalUrl;

    if (originalUrl === undefined || (/^\s*$/.test(originalUrl))) {
        return res.status(400).json({"error": "URL must be present in the request"});
    }

    let shortUrl: string = '';
    let linkItem: LinkApi | null;

    do {
        shortUrl = generateRandomId(7);
        linkItem = await Link.findOne({shortUrl});
    } while (linkItem);

    const link = new Link({originalUrl, shortUrl});

    try {
        const data = await link.save();
        return res.send(data);
    } catch (e) {
        next(e);
    }

});

export default linksRouter;