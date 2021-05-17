import { CustomerInvitationDTO } from './CustomerInvitationDTO';

export interface CustomerInvitationFilterResultDTO {
  results: CustomerInvitationDTO[];
  offset: number;
  limit: number;
  count: number;
  total: number;
}

