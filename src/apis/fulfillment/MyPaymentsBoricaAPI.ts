import { BaseAPI } from '../../runtime';
import { BoricaGeneratePaymentUrlResponse } from '../../models/BoricaGeneratePaymentUrlResponse';
import { BoricaVerifyPaymentResultRequest } from '../../models/BoricaVerifyPaymentResultRequest';
import { BoricaVerifyPaymentResultResponse } from '../../models/BoricaVerifyPaymentResultResponse';
import { BoricaGeneratePaymentDataResponse } from '../../models/BoricaGeneratePaymentDataResponse';
import { BoricaVerifyPaymentDataRequest } from '../../models/BoricaVerifyPaymentDataRequest';
import { BoricaVerifyPaymentDataResponse } from '../../models/BoricaVerifyPaymentDataResponse';

export class MyPaymentsBoricaAPI extends BaseAPI {
   async payMyOrder (orderId: string, paymentId: string): Promise<BoricaGeneratePaymentUrlResponse> {
       const response = await this._request({
           path: `/fulfillment/my-payments/borica/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}/pay`,
           method: 'GET',
           
           
           
           
        });
       return (response.json() as unknown) as BoricaGeneratePaymentUrlResponse;
   }

   async verifyMyPaymentResult (dto: BoricaVerifyPaymentResultRequest): Promise<BoricaVerifyPaymentResultResponse> {
       const response = await this._request({
           path: `/fulfillment/my-payments/borica/verify-payment-result`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as BoricaVerifyPaymentResultResponse;
   }

   async createMyPaymentTransactionRequest (orderId: string, paymentId: string): Promise<BoricaGeneratePaymentDataResponse> {
       const response = await this._request({
           path: `/fulfillment/my-payments/borica/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}/transaction-request`,
           method: 'POST',
           
           
           
           
        });
       return (response.json() as unknown) as BoricaGeneratePaymentDataResponse;
   }

   async verifyMyPaymentTransactionResponse (dto: BoricaVerifyPaymentDataRequest): Promise<BoricaVerifyPaymentDataResponse> {
       const response = await this._request({
           path: `/fulfillment/my-payments/borica/verify-transaction-response`,
           method: 'POST',
           
           body: dto,
           
           contentType: 'application/json',
        });
       return (response.json() as unknown) as BoricaVerifyPaymentDataResponse;
   }

}
