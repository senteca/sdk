import { BaseAPI } from '../../runtime';
import { BoricaGeneratePaymentUrlResponse, BoricaVerifyPaymentResultRequest, BoricaVerifyPaymentResultResponse, BoricaGeneratePaymentDataResponse, BoricaVerifyPaymentDataRequest, BoricaVerifyPaymentDataResponse } from '../../models';

export class MyPaymentsBoricaAPI extends BaseAPI {
   async payMyOrder (orderId: string, paymentId: string): Promise<BoricaGeneratePaymentUrlResponse> {
       const response = await this._request({
           path: `/fulfillment/my-payments/borica/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}/pay`,
           method: 'GET',
        });
       return (response as unknown) as BoricaGeneratePaymentUrlResponse;
   }

   async verifyMyPaymentResult (dto: BoricaVerifyPaymentResultRequest): Promise<BoricaVerifyPaymentResultResponse> {
       const response = await this._request({
           path: `/fulfillment/my-payments/borica/verify-payment-result`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as BoricaVerifyPaymentResultResponse;
   }

   async createMyPaymentTransactionRequest (orderId: string, paymentId: string): Promise<BoricaGeneratePaymentDataResponse> {
       const response = await this._request({
           path: `/fulfillment/my-payments/borica/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}/transaction-request`,
           method: 'POST',
        });
       return (response as unknown) as BoricaGeneratePaymentDataResponse;
   }

   async verifyMyPaymentTransactionResponse (dto: BoricaVerifyPaymentDataRequest): Promise<BoricaVerifyPaymentDataResponse> {
       const response = await this._request({
           path: `/fulfillment/my-payments/borica/verify-transaction-response`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as BoricaVerifyPaymentDataResponse;
   }

}
