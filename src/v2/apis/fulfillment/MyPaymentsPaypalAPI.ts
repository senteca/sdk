/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { PaypalGeneratePaymentUrlResponseDTO, PaypalVerifyPaymentDataResponseDTO } from '../../../models';

export const MyPaymentsPaypalPayMyOrder = async (orderId: string, paymentId: string): Promise<PaypalGeneratePaymentUrlResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/paypal/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}/pay`,
        method: 'GET',
    });
    return (response as unknown) as PaypalGeneratePaymentUrlResponseDTO;
}

export const MyPaymentsPaypalCaptureOrder = async (): Promise<PaypalVerifyPaymentDataResponseDTO> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/paypal/capture`,
        method: 'POST',
    });
    return (response as unknown) as PaypalVerifyPaymentDataResponseDTO;
}

