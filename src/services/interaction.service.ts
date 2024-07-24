import { Interaction } from "../interfaces/interaction";
import InteractionModel from "../models/interaction";
import CampaignModel from "../models/campaign";
import campaignEventEmitter from "../utils/event.emitter";

const saveInteraction = async (interaction: Interaction) => {
    try {
        const campaignExists = await CampaignModel.exists({ _id: interaction.campaignId });
        if (campaignExists) {
            const response = await InteractionModel.create(interaction);
            campaignEventEmitter.emit('interaction', response);
            return response;
        }
    } catch (e) {}
    return null;
};

export { saveInteraction };
