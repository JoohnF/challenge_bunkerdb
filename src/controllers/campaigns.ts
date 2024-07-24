import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { deleteCampaignById, getCampaignById, getCampaigns, saveCampaign, updateCampaignById } from "../services/campaign.service";

const getCampaign = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const campaign = await getCampaignById(id);
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found.' });
        }
        res.status(200).json(campaign);
    } catch (e) {
        handleHttp(res, e);
    }
};

const getAllCampaigns = async (req: Request, res: Response) => {
    try {
        const campaigns = await getCampaigns();
        res.status(200).json(campaigns);
    } catch (e) {
        handleHttp(res, e);
    }
};

const createCampaign = async ({ body }: Request, res: Response) => {
    try {
        const responseCampaign = await saveCampaign(body);
        res.status(201).json(responseCampaign);
    } catch (e) {
        handleHttp(res, e);
    }
};

const updateCampaign = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const result = await updateCampaignById(id, body);
        if (result.updated) {
            res.status(200).json({ message: 'Campaign updated successfully', data: result.campaign });
        } else {
            res.status(404).json({ message: 'Campaign not found' });
        }
    } catch (e) {
        handleHttp(res, e);
    };
};

const deleteCampaign = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCampaignById(id);
        if (response) {
            res.status(200).json({message: 'Campaign deleted successfully.'});
        } else {
            res.status(404).json({message: 'Campaign not found or could not deleted.'});
        }
    } catch (e) {
        handleHttp(res, e);
    };
};

export {
    getCampaign,
    getAllCampaigns,
    createCampaign,
    updateCampaign,
    deleteCampaign
};
