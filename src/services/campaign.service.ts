import { Campaign } from "../interfaces/campaign";
import CampaignModel from "../models/campaign";
import mongoose from "mongoose";

const getCampaignById = async (id:string) => {
    try {
        const response = await CampaignModel.findOne({ _id: id });
        return response;
    } catch (e) {
        return null;
    }
};

const getCampaigns = async () => {
    const response = await CampaignModel.find({});
    return response;
};

const saveCampaign = async (campaign: Campaign) => {
    const response = await CampaignModel.create(campaign);
    return response;
};

const updateCampaignById = async (id: string, data: Campaign) => {
    try {
        const response = await CampaignModel.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        );

        if (response) {
            return { updated: true, campaign: response };
        }
    } catch (e) {}
    return { updated: false };
};

const updateCampaignBudget = async (campaignId: string) => {
    const campaign = await CampaignModel.findById(campaignId);
    if (campaign) {
        const budget = parseFloat(campaign.budget.toString());
        const costPerUser = parseFloat(campaign.costPerUser.toString());
        const newBudget = budget - costPerUser;
        campaign.budget = mongoose.Types.Decimal128.fromString(newBudget.toString());
        await campaign.save();
    }
};

const deleteCampaignById = async (id: string) => {
    try {
        const response = await CampaignModel.findOneAndDelete({ _id: id });
        return response !== null;
    } catch (e) {
        return false;
    }
};

export { getCampaignById, getCampaigns, saveCampaign, updateCampaignById, updateCampaignBudget, deleteCampaignById };
