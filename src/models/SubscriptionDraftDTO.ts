import { GoogleCloudPubSubDestinationDTO } from './GoogleCloudPubSubDestinationDTO';
import { MessageDTO } from './MessageDTO';

export interface SubscriptionDraftDTO {
  key: string;
  type: SubscriptionDraftDTOTypeEnum;
  destination: GoogleCloudPubSubDestinationDTO;
  messages: MessageDTO[];
}

export enum SubscriptionDraftDTOTypeEnum {
    GoogleCloudPubSub = 'GoogleCloudPubSub',  
    SQS = 'SQS',  
    SNS = 'SNS',  
    AzureServiceBus = 'AzureServiceBus',  
    EventGrid = 'EventGrid',  
}
