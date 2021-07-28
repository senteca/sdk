import { MessageDTO } from './MessageDTO';

export interface SubscriptionDTO {
  version?: number;
  key: string;
  type: SubscriptionDTOTypeEnum;
  destination: any;
  messages: MessageDTO[];
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum SubscriptionDTOTypeEnum {
    GoogleCloudPubSub = 'GoogleCloudPubSub',  
    ServiceBroker = 'ServiceBroker',  
}
