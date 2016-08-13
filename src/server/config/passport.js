import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import {
    APP_ID as clientID,
    APP_SECRET as clientSecret,
    CALLBACK_URL as callbackURL,
    PROFILE_IDS,
} from '<server/config>/facebook';

export default function passportConfig(passport) {
    passport.use(
        new FacebookStrategy({
            clientID,
            clientSecret,
            callbackURL,
        },
        (token, refreshToken, profile, done) => {
            process.nextTick(() => {
                if (!!~PROFILE_IDS.indexOf(profile.id)) {
                    return done(null, profile);
                }

                return done(new Error('Unauthorized'));
            });
        })
    );
}
