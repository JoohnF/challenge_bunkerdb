import { Schema, model } from "mongoose";
import { Interaction } from "../interfaces/interaction";

const InteractionSchema = new Schema<Interaction>(
    {
        campaignId: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        interactionType: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const InteractionModel = model('interactions', InteractionSchema);
export default InteractionModel;
