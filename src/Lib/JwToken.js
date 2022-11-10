import jwt from 'jsonwebtoken';

export const generateJsonWebToken = ( idPerson ) => {

    return new Promise(( resolve, reject ) => {

        const payload = { idPerson };

        jwt.sign( payload, process.env.APP_KEY_JWT, {
            expiresIn: '12h'
        }, (err, token) => {
            
            if( !err ) resolve ( token );
            else reject( 'Error Generate a Token' );
        });

    });

}