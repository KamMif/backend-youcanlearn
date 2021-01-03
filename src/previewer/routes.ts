import {asyncMiddleware} from "../utils";
import {retrieve} from "./controller";

export const previewRoutes = (app: any) => {
    app.post(
        '/api/preview',
        asyncMiddleware(retrieve),
    );
}
