import { GoogleCloudPubSubDestinationDTO } from './GoogleCloudPubSubDestinationDTO';
import { MessageDTO } from './MessageDTO';

export interface SubscriptionDTO {
  key: string;
  type: SubscriptionDTOTypeEnum;
  destination: GoogleCloudPubSubDestinationDTO;
  messages: MessageDTO[];
}

export enum SubscriptionDTOTypeEnum {
    GoogleCloudPubSub = 'GoogleCloudPubSub',  
    SQS = 'SQS',  
    SNS = 'SNS',  
    AzureServiceBus = 'AzureServiceBus',  
    EventGrid = 'EventGrid',  
}
