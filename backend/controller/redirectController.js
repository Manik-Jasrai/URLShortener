const System = require('../model/System');

const handleRedirect = async (req,res) => {
    if (!req?.params?.shortURL) return res.status(404).json({'message' : 'Short URL not found'});

    const {shortURL} = req.params;

    // Query for the longURL
    const validURL = await System.findOne({short : shortURL}).exec();

    if (!validURL) return res.status(404).json({'message' : 'Not in Database'});
    const longURL = validURL.long;

    // Redirect to the long url
    res.status(301).redirect(longURL);
};

module.exports = {
    handleRedirect
}