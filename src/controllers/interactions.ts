import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { saveInteraction } from "../services/interaction.service";

const createInteraction = async ({ body }: Request, res: Response) => {
    try {
        const response = await saveInteraction(body);
        if (response !== null) {
            res.status(201).send(response);
        } else {
            res.status(404).send({'message': 'Campaign not found.'})
        }
    } catch (e) {
        handleHttp(res, e);
    };
};

export {
    createInteraction
};
