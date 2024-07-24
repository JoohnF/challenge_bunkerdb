import mongoose, { Schema, model } from "mongoose";
import { Campaign } from "../interfaces/campaign";

const CampaignSchema = new Schema<Campaign>(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        budget: {
            type: mongoose.Types.Decimal128,
            required: true
        },
        costPerUser: {
            type: mongoose.Types.Decimal128,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const CampaignModel = model('campaign', CampaignSchema);
export default CampaignModel;
