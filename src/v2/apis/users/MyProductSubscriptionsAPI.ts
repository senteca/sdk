/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { CustomerProductSubscriptionCreateDTO, CustomerProductSubscriptionDTO } from '../../../models';

export const MyProductSubscriptionsSubscribe = async (query: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string }, dto: CustomerProductSubscriptionCreateDTO): Promise<CustomerProductSubscriptionDTO> => {
    const response = await HttpClient.request({
        path: `/users/my-product-subscriptions/subscribe`,
        method: 'POST',
        query: toQueryString(query),
        body: dto,
        contentType: 'application/json',
    });
    return (response as unknown) as CustomerProductSubscriptionDTO;
}

export const MyProductSubscriptionsUnsubscribe = async (): Promise<void> => {
    const response = await HttpClient.request({
        path: `/users/my-product-subscriptions/unsubscribe`,
        method: 'DELETE',
    });
    
}

