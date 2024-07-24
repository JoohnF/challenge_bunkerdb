import campaignEventEmitter from './event.emitter';
import { updateCampaignBudget } from '../services/campaign.service';
import axios from 'axios';

campaignEventEmitter.on('interaction', async (interaction) => {
    try {
        await axios.post('https://webhook.site/2c44d592-0962-4e13-9695-717fb7d1fcd0', interaction);
        await updateCampaignBudget(interaction.campaignId);
    } catch (e) {
        console.error(`Error processing interaction.`);
    }
});

export default campaignEventEmitter;
