import { SpeedyServiceCodDTO } from './SpeedyServiceCodDTO';
import { SpeedyServiceObpdDTO } from './SpeedyServiceObpdDTO';
import { SpeedyDeclaredValueAdditionalServiceDTO } from './SpeedyDeclaredValueAdditionalServiceDTO';

export interface SpeedyAdditionalServiceDTO {
  cod: SpeedyServiceCodDTO;
  obpd: SpeedyServiceObpdDTO;
  declaredValue: SpeedyDeclaredValueAdditionalServiceDTO;
  returns?: string[];
  fixedTimeDelivery: number;
  specialDeliveryId: number;
  deliveryToFloor: number;
}

