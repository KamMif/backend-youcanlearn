import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {routes} from "./routes";

const originalBoiler = {
    origin(origin: any, callback: any) {
        callback(null, true)
    },
    credential: true,
}

const app = express();
app.use(cors(originalBoiler));
app.use(bodyParser.json());
routes(app);

export { app };
