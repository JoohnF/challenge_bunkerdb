import { Response } from "express";

const handleHttp = (res: Response, errorRaw: any) => {
    res.status(500).send(
        {
            'message': 'An error has ocurred.',
            'error': errorRaw.message
        }
    );
};

export { handleHttp };
