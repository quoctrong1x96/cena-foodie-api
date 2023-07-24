import jwt from 'jsonwebtoken';

export default ValidatedToken = ( req, res, next ) => {

    let token = req.header('xx-token');

    if( !token ){
        return res.status(401).json({
            resp: false,
            message: 'There is not Token in the request'
        });
    }

    try {
        
        const { idPerson } = jwt.verify( token, process.env.APP_KEY_JWT );

        req.idPerson = idPerson;

        next();

    } catch (err) {
        return res.status(500).json({
            resp: false,
            message: err
        });
    }

}