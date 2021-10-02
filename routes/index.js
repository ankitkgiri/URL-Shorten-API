const express = require('express');
const config = require('config')
const Url = require('../models/Url');

const router = express.Router();

// @routes GET /:code
// @desc Redirect the short URL to the long url

router.get('/:code', async (req, res) => {

    try {
        const url = await Url.findOne({urlCode : req.params.code});
        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No url found');
        }
    } catch (error) {
        return res.status(500).json('Internal server error!');
    }
});

module.exports = router;