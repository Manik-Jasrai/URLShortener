const System = require('../model/System');
const getModule = require('../utils/getModule');

const handleSubmit = async (req,res) => {
    try {
        const { longURL } = req.body;

        try {
            new URL(longURL);            
        } catch (err) {
            return res.status(406).json( {'message':`URl not Good`});
        }
        
        const normalURL = new URL(longURL);
        
        // if the url exists in DB the send the url else 
        const existingURL = await System.findOne( {long : normalURL} ).exec();
        if (existingURL) return res.send(existingURL);

        let { shortURL } = req.body;
        // Random URL Generation
        if (!shortURL) {
            const nanoid = await getModule("nanoid");
            const generateURL = nanoid.customAlphabet('abcedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',6);
            shortURL = generateURL();
        } else {
            const existingShort = await System.findOne( {short : shortURL} ).exec();
            if (existingShort) return res.status(403).json({'message' : 'URL Already exists'});
        }

        const body = {
            long : normalURL,
            short : shortURL
        };

        const entryURL = await System.create(body);
        
        res.send(entryURL);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    handleSubmit
}