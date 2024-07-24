import { EventEmitter } from 'events';

class CampaignEventEmitter extends EventEmitter {};

const campaignEventEmitter = new CampaignEventEmitter();

export default campaignEventEmitter;
