import { GoogleCloudPubSubDestinationDTO } from './GoogleCloudPubSubDestinationDTO';
import { MessageDTO } from './MessageDTO';

export interface SubscriptionDTO {
  version?: number;
  key: string;
  type: SubscriptionDTOTypeEnum;
  destination: GoogleCloudPubSubDestinationDTO;
  messages: MessageDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum SubscriptionDTOTypeEnum {
    GoogleCloudPubSub = 'GoogleCloudPubSub',  
}
