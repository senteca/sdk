/* eslint-disable */

import { HttpClient, toQueryString } from '../../runtime';
import { TaskDraftDTO } from '../../models/TaskDraftDTO';
import { TaskDTO } from '../../models/TaskDTO';
import { TaskFilterResultDTO } from '../../models/TaskFilterResultDTO';

export const TasksStart = async (name: string, query?: any): Promise<void> => {
    const response = await HttpClient.request({
        path: `/config/tasks/start/${encodeURIComponent(name)}`,
        method: 'POST',
        query: toQueryString(query),
        
        
        
    });
    
}

export const TasksFail = async (name: string, executionId: string, query: { info: string }): Promise<void> => {
    const response = await HttpClient.request({
        path: `/config/tasks/fail/${encodeURIComponent(name)}/execution/${encodeURIComponent(executionId)}`,
        method: 'POST',
        query: toQueryString(query),
        
        
        
    });
    
}

export const TasksComplete = async (name: string, executionId: string, query: { info: string }): Promise<void> => {
    const response = await HttpClient.request({
        path: `/config/tasks/comlete/${encodeURIComponent(name)}/execution/${encodeURIComponent(executionId)}`,
        method: 'POST',
        query: toQueryString(query),
        
        
        
    });
    
}

export const TasksCreate = async (dto: TaskDraftDTO): Promise<TaskDTO> => {
    const response = await HttpClient.request({
        path: `/config/tasks`,
        method: 'POST',
        
        body: dto,
        
        contentType: 'application/json',
    });
    return (response as unknown) as TaskDTO;
}

export const TasksFilter = async (query?: { storeKey?: string, interfaceKey?: string, currencyCode?: string, languageCode?: string, priceListKey?: string, time?: number, merchantKey?: string, expand?: string, project?: string, filter?: string, sort?: string, limit?: number, offset?: number }): Promise<TaskFilterResultDTO> => {
    const response = await HttpClient.request({
        path: `/config/tasks`,
        method: 'GET',
        query: toQueryString(query),
        
        
        
    });
    return (response as unknown) as TaskFilterResultDTO;
}

export const TasksGetByName = async (name: string): Promise<TaskDTO> => {
    const response = await HttpClient.request({
        path: `/config/tasks/name=${encodeURIComponent(name)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as TaskDTO;
}

export const TasksGetById = async (id: string): Promise<TaskDTO> => {
    const response = await HttpClient.request({
        path: `/config/tasks/${encodeURIComponent(id)}`,
        method: 'GET',
        
        
        
        
    });
    return (response as unknown) as TaskDTO;
}

export const TasksDelete = async (id: string): Promise<TaskDTO> => {
    const response = await HttpClient.request({
        path: `/config/tasks/${encodeURIComponent(id)}`,
        method: 'DELETE',
        
        
        
        
    });
    return (response as unknown) as TaskDTO;
}

