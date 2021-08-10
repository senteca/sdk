import { BaseCurrencyConversion } from './BaseCurrencyConversion';
import { FacebookCredentialsDto } from './FacebookCredentialsDto';
import { GoogleCredentialsDto } from './GoogleCredentialsDto';
import { AppleCredentialsDto } from './AppleCredentialsDto';
import { InterfaceDTO } from './InterfaceDTO';
import { ChannelAssignmentDto } from './ChannelAssignmentDto';

export interface StoreDTO {
  version?: number;
  key: string;
  label?: string;
  baseCurrency: string;
  baseCurrencyConversions: BaseCurrencyConversion[];
  facebookCredentials?: FacebookCredentialsDto;
  googleCredentials?: GoogleCredentialsDto;
  appleCredentials?: AppleCredentialsDto;
  interfaces: InterfaceDTO[];
  defaultCustomerGroupKey?: string;
  defaultCustomerStatus?: StoreDTODefaultCustomerStatusEnum;
  customerGroupChannels: ChannelAssignmentDto[];
  requiresEmailVerification?: boolean;
  requiresInvitation?: boolean;
  orderPrefix?: string;
  orderRefNumberFormula?: string;
  orderSequence?: string;
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export enum StoreDTODefaultCustomerStatusEnum {
    Active = 'active',  
    Disabled = 'disabled',  
    AwaitingApproval = 'awaiting-approval',  
    Rejected = 'rejected',  
}
