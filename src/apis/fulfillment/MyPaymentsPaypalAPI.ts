import { BaseAPI } from '../../runtime';
import { PaypalGeneratePaymentUrlResponseDTO, PaypalVerifyPaymentDataResponseDTO } from '../../models';

export class MyPaymentsPaypalAPI extends BaseAPI {
   async payMyOrder (orderId: string, paymentId: string): Promise<PaypalGeneratePaymentUrlResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/my-payments/paypal/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}/pay`,
           method: 'GET',
        });
       return (response as unknown) as PaypalGeneratePaymentUrlResponseDTO;
   }

   async captureOrder (): Promise<PaypalVerifyPaymentDataResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/my-payments/paypal/capture`,
           method: 'POST',
        });
       return (response as unknown) as PaypalVerifyPaymentDataResponseDTO;
   }

}
