import { BaseAPI } from '../../runtime';
import { PaypalGeneratePaymentUrlResponseDTO, PaypalCaptureRequestDTO, PaypalVerifyPaymentDataResponseDTO } from '../../models';

export class MyPaymentsPaypalAPI extends BaseAPI {
   async payMyOrder (orderId: string, paymentId: string): Promise<PaypalGeneratePaymentUrlResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/my-payments/paypal/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}/pay`,
           method: 'GET',
        });
       return (response as unknown) as PaypalGeneratePaymentUrlResponseDTO;
   }

   async captureOrder (dto: PaypalCaptureRequestDTO): Promise<PaypalVerifyPaymentDataResponseDTO> {
       const response = await this._request({
           path: `/fulfillment/my-payments/paypal/capture`,
           method: 'POST',
           body: dto,
           contentType: 'application/json',
        });
       return (response as unknown) as PaypalVerifyPaymentDataResponseDTO;
   }

}
