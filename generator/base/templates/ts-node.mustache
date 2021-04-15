/* eslint-disable */

export class BaseAPI {
  private config?: Configuration;

  constructor(config?: Configuration) {
    this.config = config;
  }

  private getOptions(): ConfigOptions | undefined {
    return this.config?.options;
  }

  protected async _request(context: RequestOptions): Promise<Response> {
    const { url, init } = this.createFetchParams(context);
    const response = await this.fetchApi(url, init);
    if (response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      const contentType = response.headers?.get('content-type')?.split(';')[0];
      if (contentType === "application/json") {
        throw await response.json();
      } else {
        throw await response.blob();
      }
    }
    return undefined as any;
  }

  private createFetchParams(context: RequestOptions) {
    const options = this.getOptions();

    let url = options?.basePath + context.path;
    if (context.query) {
      url += `?${context.query}`;
    }
    let body;
    if (context.body) {
      body =
        context.contentType === "multipart/form-data"
          ? context.body
          : JSON.stringify(context.body);
    }

    const headers = {};
    if (context.contentType !== "multipart/form-data") {
      // do not set explicit Content-Type "multipart/form-data" so that the boundary can be added
      headers["Content-Type"] = context.contentType || "application/json";
    }
    if (options?.token) {
      headers["Authorization"] = `Bearer ${options.token}`;
    }
    if (options?.cookies) {
      const cookieKeys = Object.keys(options.cookies);
      if (cookieKeys.length > 0) {
        const toCookie = (key: string) => {
          const value = options.cookies[key];
          if (value !== undefined) {
            return `${key}=${value}`;
          }
        };
        const isSet = (x: any) => !!x;
        headers["cookie"] = cookieKeys.map(toCookie).filter(isSet).join("; ");
      }
    }

    if (context.basicAuth) {
      const { username, password } = context.basicAuth;
      headers["Authorization"] = `Basic ${this.base64(
        [username, password].join(":")
      )}`;
    }

    const init = {
      method: context.method,
      headers: headers,
      body
    };
    return { url, init };
  }

  protected _stringifyQuery(queryObj: any): string {
    if (!queryObj) {
      return "";
    }
    return Object.keys(queryObj)
      .map((key) => `${key}=${encodeURIComponent(queryObj[key])}`)
      .join("&");
  }

  private fetchApi = async (url: string, init: RequestInit) => {
    let fetchParams = { url, init };

    const fetch =
      this.getOptions()?.fetchApi ||
      (typeof window !== "undefined" ? window.fetch.bind(window) : null);

    if (fetch) {
      return fetch(fetchParams.url, fetchParams.init);
    }
  };

  private base64(inputStr: string) {
    if (typeof btoa !== "undefined") {
      return btoa(inputStr);
    } else if (typeof Buffer !== "undefined") {
      return Buffer.from(inputStr, "utf-8").toString("base64");
    }
    return inputStr;
  }
}

export interface RequestOptions {
  path: string;
  method: string;
  query?: string;
  body?: any;
  contentType?: "application/json" | "multipart/form-data";
  basicAuth?: { username: string; password: string };
}

export type FetchAPI = WindowOrWorkerGlobalScope["fetch"];

export interface ConfigOptions {
  basePath?: string;
  fetchApi?: FetchAPI;
  token?: string;
  cookies?: any;
}

export class Configuration {
  public options: ConfigOptions;
  constructor(options: ConfigOptions) {
    this.options = options;
  }
}
