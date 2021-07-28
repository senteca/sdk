import { MessageDTO } from './MessageDTO';

export interface SubscriptionDraftDTO {
  version?: number;
  key: string;
  type: SubscriptionDraftDTOTypeEnum;
  destination: any;
  messages: MessageDTO[];
}

export enum SubscriptionDraftDTOTypeEnum {
    GoogleCloudPubSub = 'GoogleCloudPubSub',  
    ServiceBroker = 'ServiceBroker',  
}
