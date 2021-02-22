import { BaseCurrencyConversion } from './BaseCurrencyConversion';
import { FacebookCredentialsDto } from './FacebookCredentialsDto';
import { GoogleCredentialsDto } from './GoogleCredentialsDto';
import { AppleCredentialsDto } from './AppleCredentialsDto';
import { InterfaceDTO } from './InterfaceDTO';
import { ChannelAssignmentDto } from './ChannelAssignmentDto';

export interface StoreDraftDTO {
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
  customerGroupChannels: ChannelAssignmentDto[];
  requiresEmailVerification?: boolean;
  requiresInvitation?: boolean;
}

