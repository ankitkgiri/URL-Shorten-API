const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Url');

const router = express.Router();

// @route       POST /api/url/shorten
// @desc        Create short URL
router.post('/shorten', async (req, res) =>{
    const {longUrl} = req.body;
    const baseUrl = config.get('baseUrl');

    if (!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base url');
    }

    // Create urlCode 
    const urlCode = shortid.generate();

    if (validUrl.isUri(longUrl)){
        
        try {
            let url = await Url.findOne({longUrl});

            if (url){
                return res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date : new Date()
                });

                await url.save();

                return res.json(url);
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json("Internal Server Error");
        }

    } else {
        return res.status(401).json('Invalid Long Url');
    }

});

module.exports = router;