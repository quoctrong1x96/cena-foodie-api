import jwt from 'jsonwebtoken';


export const verifyToken = ( req, res, next ) => {

    try {

        let token = req.header('xx-token');

        if( !token ){
            return res.status(401).json({
                resp: false,
                message: 'There is not Token in the request'
            });
        }

        const { idPerson } = jwt.verify( token, process.env.APP_KEY_JWT );

        req.id = idPerson;

        next();
        
    } catch (e) {
        return res.status(500).json({
            resp: false,
            message: e,
            user: { id: 0, first_name: '', last_name: '', image: '', email: '', rol_id: 0 },
            token: ''
        });
    }

}