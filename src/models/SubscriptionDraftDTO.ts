import { GoogleCloudPubSubDestinationDTO } from './GoogleCloudPubSubDestinationDTO';
import { MessageDTO } from './MessageDTO';

export interface SubscriptionDraftDTO {
  version?: number;
  key: string;
  type: SubscriptionDraftDTOTypeEnum;
  destination: GoogleCloudPubSubDestinationDTO;
  messages: MessageDTO[];
}

export enum SubscriptionDraftDTOTypeEnum {
    GoogleCloudPubSub = 'GoogleCloudPubSub',  
}
