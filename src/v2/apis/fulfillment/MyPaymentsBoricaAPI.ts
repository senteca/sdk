/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { BoricaGeneratePaymentUrlResponse } from '@models';
import { BoricaVerifyPaymentResultRequest } from '@models';
import { BoricaVerifyPaymentResultResponse } from '@models';
import { BoricaGeneratePaymentDataResponse } from '@models';
import { BoricaVerifyPaymentDataRequest } from '@models';
import { BoricaVerifyPaymentDataResponse } from '@models';

export const MyPaymentsBoricaPayMyOrder = async (orderId: string, paymentId: string): Promise<BoricaGeneratePaymentUrlResponse> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/borica/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}/pay`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as BoricaGeneratePaymentUrlResponse;
}

export const MyPaymentsBoricaVerifyMyPaymentResult = async (dto: BoricaVerifyPaymentResultRequest): Promise<BoricaVerifyPaymentResultResponse> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/borica/verify-payment-result`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as BoricaVerifyPaymentResultResponse;
}

export const MyPaymentsBoricaCreateMyPaymentTransactionRequest = async (orderId: string, paymentId: string): Promise<BoricaGeneratePaymentDataResponse> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/borica/${encodeURIComponent(orderId)}/payments/${encodeURIComponent(paymentId)}/transaction-request`,
        method: 'POST',
        
        
        
        
    });
    return (response as unknown) as BoricaGeneratePaymentDataResponse;
}

export const MyPaymentsBoricaVerifyMyPaymentTransactionResponse = async (dto: BoricaVerifyPaymentDataRequest): Promise<BoricaVerifyPaymentDataResponse> => {
    const response = await HttpClient.request({
        path: `/fulfillment/my-payments/borica/verify-transaction-response`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as BoricaVerifyPaymentDataResponse;
}

