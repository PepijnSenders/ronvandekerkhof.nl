import createLogger from 'redux-logger';
import { IS_CLIENT } from '<common/config>/app';

export default createLogger({
    collapsed: true,
    duration: true,
    predicate: (getState, action) => {
        if (IS_CLIENT) {
            return true;
        }

        console.log(`Redux action triggered: ${action.type}`, {
            action,
            state: getState().toJS(),
        });

        return false;
    },
    stateTransformer: (state) => state.toJS(),
});
