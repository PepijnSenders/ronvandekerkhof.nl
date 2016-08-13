import { Strategy as FacebookStrategy } from 'passport-facebook';
import {
    APP_ID as clientID,
    APP_SECRET as clientSecret,
    CALLBACK_URL as callbackURL,
    PROFILE_IDS,
} from '<server/config>/facebook';

export default function passportConfig(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use(
        new FacebookStrategy({
            clientID,
            clientSecret,
            callbackURL,
        },
        (token, refreshToken, profile, done) => {
            process.nextTick(() => {
                console.log('Profile attempted login', profile);

                if (!!~PROFILE_IDS.indexOf(parseInt(profile.id, 10))) {
                    return done(null, profile);
                }

                return done(new Error('Unauthorized'));
            });
        })
    );
}
