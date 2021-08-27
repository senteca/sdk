/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { InternationalsDTO } from '@models';
import { InternationalsDraftDTO } from '@models';

export const InternationalsGet = async (): Promise<InternationalsDTO> => {
    const response = await HttpClient.request({
        path: `/config/internationals`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as InternationalsDTO;
}

export const InternationalsSet = async (dto: InternationalsDraftDTO): Promise<InternationalsDTO> => {
    const response = await HttpClient.request({
        path: `/config/internationals`,
        method: 'PUT',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as InternationalsDTO;
}

