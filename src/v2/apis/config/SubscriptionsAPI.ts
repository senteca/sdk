/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { SubscriptionDraftDTO } from '../../models/SubscriptionDraftDTO';
import { SubscriptionDTO } from '../../models/SubscriptionDTO';

export const SubscriptionsCreate = async (dto: SubscriptionDraftDTO): Promise<SubscriptionDTO> => {
    const response = await HttpClient.request({
        path: `/config/subscriptions`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SubscriptionDTO;
}

export const SubscriptionsFilter = async (): Promise<SubscriptionDTO[]> => {
    const response = await HttpClient.request({
        path: `/config/subscriptions`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as SubscriptionDTO[];
}

export const SubscriptionsGetByKey = async (key: string): Promise<SubscriptionDTO> => {
    const response = await HttpClient.request({
        path: `/config/subscriptions/key=${encodeURIComponent(key)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as SubscriptionDTO;
}

export const SubscriptionsGetById = async (id: string): Promise<SubscriptionDTO> => {
    const response = await HttpClient.request({
        path: `/config/subscriptions/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as SubscriptionDTO;
}

export const SubscriptionsUpdate = async (id: string, dto: SubscriptionDraftDTO): Promise<SubscriptionDTO> => {
    const response = await HttpClient.request({
        path: `/config/subscriptions/${encodeURIComponent(id)}`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as SubscriptionDTO;
}

export const SubscriptionsDelete = async (id: string): Promise<SubscriptionDTO> => {
    const response = await HttpClient.request({
        path: `/config/subscriptions/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as SubscriptionDTO;
}

