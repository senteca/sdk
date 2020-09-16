/* tslint:disable */
/* eslint-disable */
/**
 * Auth
 * Auth API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    PasswordChangeDTO,
    PasswordChangeDTOFromJSON,
    PasswordChangeDTOToJSON,
    PasswordResetDTO,
    PasswordResetDTOFromJSON,
    PasswordResetDTOToJSON,
    PasswordTokenDTO,
    PasswordTokenDTOFromJSON,
    PasswordTokenDTOToJSON,
    UserCreateDTO,
    UserCreateDTOFromJSON,
    UserCreateDTOToJSON,
    UserDTO,
    UserDTOFromJSON,
    UserDTOToJSON,
    UserProfileUpdateDTO,
    UserProfileUpdateDTOFromJSON,
    UserProfileUpdateDTOToJSON,
    UserUpdateDTO,
    UserUpdateDTOFromJSON,
    UserUpdateDTOToJSON,
} from '../models';

export interface ChangeUserPasswordRequest {
    passwordChangeDTO: PasswordChangeDTO;
}

export interface CreateUserRequest {
    userCreateDTO: UserCreateDTO;
}

export interface DeleteUserByIdRequest {
    id: string;
}

export interface FilterUsersRequest {
    filter: string;
    sort: string;
    expand: string;
    project: string;
    limit?: number;
    offset?: number;
}

export interface FindUserByIdRequest {
    id: string;
}

export interface RequestUserPasswordTokenRequest {
    passwordTokenDTO: PasswordTokenDTO;
}

export interface ResetUserPasswordRequest {
    passwordResetDTO: PasswordResetDTO;
}

export interface UpdateUserByIdRequest {
    id: string;
    userUpdateDTO: UserUpdateDTO;
}

export interface UpdateUserProfileRequest {
    userProfileUpdateDTO: UserProfileUpdateDTO;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Updates the current user password if the provided current password matches.
     */
    async changeUserPasswordRaw(requestParameters: ChangeUserPasswordRequest): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters.passwordChangeDTO === null || requestParameters.passwordChangeDTO === undefined) {
            throw new runtime.RequiredError('passwordChangeDTO','Required parameter requestParameters.passwordChangeDTO was null or undefined when calling changeUserPassword.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/users/password`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordChangeDTOToJSON(requestParameters.passwordChangeDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Updates the current user password if the provided current password matches.
     */
    async changeUserPassword(requestParameters: ChangeUserPasswordRequest): Promise<UserDTO> {
        const response = await this.changeUserPasswordRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a new user.
     */
    async createUserRaw(requestParameters: CreateUserRequest): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters.userCreateDTO === null || requestParameters.userCreateDTO === undefined) {
            throw new runtime.RequiredError('userCreateDTO','Required parameter requestParameters.userCreateDTO was null or undefined when calling createUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserCreateDTOToJSON(requestParameters.userCreateDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Creates a new user.
     */
    async createUser(requestParameters: CreateUserRequest): Promise<UserDTO> {
        const response = await this.createUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Deletes a user by id.
     */
    async deleteUserByIdRaw(requestParameters: DeleteUserByIdRequest): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteUserById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Deletes a user by id.
     */
    async deleteUserById(requestParameters: DeleteUserByIdRequest): Promise<UserDTO> {
        const response = await this.deleteUserByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all users.
     */
    async filterUsersRaw(requestParameters: FilterUsersRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.filter === null || requestParameters.filter === undefined) {
            throw new runtime.RequiredError('filter','Required parameter requestParameters.filter was null or undefined when calling filterUsers.');
        }

        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling filterUsers.');
        }

        if (requestParameters.expand === null || requestParameters.expand === undefined) {
            throw new runtime.RequiredError('expand','Required parameter requestParameters.expand was null or undefined when calling filterUsers.');
        }

        if (requestParameters.project === null || requestParameters.project === undefined) {
            throw new runtime.RequiredError('project','Required parameter requestParameters.project was null or undefined when calling filterUsers.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.project !== undefined) {
            queryParameters['project'] = requestParameters.project;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Lists all users.
     */
    async filterUsers(requestParameters: FilterUsersRequest): Promise<void> {
        await this.filterUsersRaw(requestParameters);
    }

    /**
     * Returns a user by id.
     */
    async findUserByIdRaw(requestParameters: FindUserByIdRequest): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findUserById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Returns a user by id.
     */
    async findUserById(requestParameters: FindUserByIdRequest): Promise<UserDTO> {
        const response = await this.findUserByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns the current user profile.
     */
    async getUserProfileRaw(): Promise<runtime.ApiResponse<UserDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/users/profile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Returns the current user profile.
     */
    async getUserProfile(): Promise<UserDTO> {
        const response = await this.getUserProfileRaw();
        return await response.value();
    }

    /**
     * Generates a password reset token via which the user can reset his password.
     */
    async requestUserPasswordTokenRaw(requestParameters: RequestUserPasswordTokenRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.passwordTokenDTO === null || requestParameters.passwordTokenDTO === undefined) {
            throw new runtime.RequiredError('passwordTokenDTO','Required parameter requestParameters.passwordTokenDTO was null or undefined when calling requestUserPasswordToken.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/users/password-token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordTokenDTOToJSON(requestParameters.passwordTokenDTO),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Generates a password reset token via which the user can reset his password.
     */
    async requestUserPasswordToken(requestParameters: RequestUserPasswordTokenRequest): Promise<object> {
        const response = await this.requestUserPasswordTokenRaw(requestParameters);
        return await response.value();
    }

    /**
     * Resets a customer\'s password if the reset token is valid.
     */
    async resetUserPasswordRaw(requestParameters: ResetUserPasswordRequest): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters.passwordResetDTO === null || requestParameters.passwordResetDTO === undefined) {
            throw new runtime.RequiredError('passwordResetDTO','Required parameter requestParameters.passwordResetDTO was null or undefined when calling resetUserPassword.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/users/password/reset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PasswordResetDTOToJSON(requestParameters.passwordResetDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Resets a customer\'s password if the reset token is valid.
     */
    async resetUserPassword(requestParameters: ResetUserPasswordRequest): Promise<UserDTO> {
        const response = await this.resetUserPasswordRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a user by id.
     */
    async updateUserByIdRaw(requestParameters: UpdateUserByIdRequest): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateUserById.');
        }

        if (requestParameters.userUpdateDTO === null || requestParameters.userUpdateDTO === undefined) {
            throw new runtime.RequiredError('userUpdateDTO','Required parameter requestParameters.userUpdateDTO was null or undefined when calling updateUserById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserUpdateDTOToJSON(requestParameters.userUpdateDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Updates a user by id.
     */
    async updateUserById(requestParameters: UpdateUserByIdRequest): Promise<UserDTO> {
        const response = await this.updateUserByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates the current user profile.
     */
    async updateUserProfileRaw(requestParameters: UpdateUserProfileRequest): Promise<runtime.ApiResponse<UserDTO>> {
        if (requestParameters.userProfileUpdateDTO === null || requestParameters.userProfileUpdateDTO === undefined) {
            throw new runtime.RequiredError('userProfileUpdateDTO','Required parameter requestParameters.userProfileUpdateDTO was null or undefined when calling updateUserProfile.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/users/users/profile`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserProfileUpdateDTOToJSON(requestParameters.userProfileUpdateDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserDTOFromJSON(jsonValue));
    }

    /**
     * Updates the current user profile.
     */
    async updateUserProfile(requestParameters: UpdateUserProfileRequest): Promise<UserDTO> {
        const response = await this.updateUserProfileRaw(requestParameters);
        return await response.value();
    }

}
