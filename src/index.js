import app from './server';
import {ports} from './settings';
// import your logic files below to be included in the bundle
import './articles';
import './noncypher';

const appListening = new Promise(resolve => app.listen(ports.app, resolve))
    .then(() => console.log(`App listening on port ${ports.app}.`))
    .then(() => app);

export {appListening};
