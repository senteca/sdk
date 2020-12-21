import { SkuReservationDTO } from './SkuReservationDTO';

export interface SkuReservationResponseDTO {
  ok: boolean;
  skuReservations: SkuReservationDTO[];
}

