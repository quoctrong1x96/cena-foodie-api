export const logRequest = ( req, res, next ) => {
    try {
        let method = req.method;
        let url = req.originalUrl;
        let time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        console.log("TIME: "+time+", METHOD: "+method+", API: "+url);

        next();

    } catch (err) {
        return res.status(503).json({
            resp: false,
            msg : err
        });
    }
}