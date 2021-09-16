/* eslint-disable */

export class HttpClient {
  public static defaultConfig?: ConfigurationV2;
  public static transientConfig?: ConfigurationV2;

  public static async request(context: RequestOptionsV2): Promise<Response> {
    const { url, init } = HttpClient.createFetchParams(context);
    const response = await HttpClient.fetch(url, init);
    let parsedResponse;
    if (response) {
      const contentType = response.headers?.get('content-type')?.split(';')[0];
      if (contentType === 'application/json') {
        parsedResponse = await response.json();
      } else {
        parsedResponse = await response.blob();
      }

      if (response.status >= 200 && response.status < 300) {
        return parsedResponse;
      } else {
        throw parsedResponse;
      }
    }
    return undefined as any;
  }

  private static getOptions(): ConfigOptionsV2 | undefined {
    return (this.transientConfig || this.defaultConfig)?.options;
  }

  private static createFetchParams(context: RequestOptionsV2) {
    const options = this.getOptions();

    let url = options?.basePath + context.path;
    if (context.query) {
      url += `?${context.query}`;
    }
    let body;
    if (context.body) {
      body =
        context.contentType === 'multipart/form-data'
          ? context.body
          : JSON.stringify(context.body);
    }

    const headers = {};
    if (context.contentType !== 'multipart/form-data') {
      // do not set explicit Content-Type "multipart/form-data" so that the boundary can be added
      headers['Content-Type'] = context.contentType || 'application/json';
    }
    if (options?.token) {
      headers['Authorization'] = `Bearer ${options.token}`;
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
        headers['cookie'] = cookieKeys.map(toCookie).filter(isSet).join('; ');
      }
    }

    if (options?.headers) {
      Object.assign(headers, options.headers);
    }

    if (context.basicAuth) {
      const { username, password } = context.basicAuth;
      headers['Authorization'] = `Basic ${this.base64(
        [username, password].join(':'),
      )}`;
    }

    const init = {
      method: context.method,
      headers: headers,
      body,
    };
    return { url, init };
  }

  private static fetch = async (url: string, init: RequestInit) => {
    let fetchParams = { url, init };

    const fetch =
      HttpClient.getOptions()?.fetchApi ||
      (typeof window !== 'undefined' ? window.fetch.bind(window) : null);

    HttpClient.onBeforeFetch();

    if (fetch) {
      return fetch(fetchParams.url, fetchParams.init);
    }
  };

  private static onBeforeFetch() {
    HttpClient.transientConfig = undefined;
  }

  private static base64(inputStr: string) {
    if (typeof btoa !== 'undefined') {
      return btoa(inputStr);
    } else if (typeof Buffer !== 'undefined') {
      return Buffer.from(inputStr, 'utf-8').toString('base64');
    }
    return inputStr;
  }
}

export interface RequestOptionsV2 {
  path: string;
  method: string;
  query?: string;
  body?: any;
  contentType?: 'application/json' | 'multipart/form-data';
  basicAuth?: { username: string; password: string };
}

export type FetchAPIV2 = WindowOrWorkerGlobalScope['fetch'];

export interface ConfigOptionsV2 {
  basePath?: string;
  fetchApi?: FetchAPIV2;
  token?: string;
  cookies?: any;
  headers?: any;
}

export class ConfigurationV2 {
  public options: ConfigOptionsV2;
  constructor(options: ConfigOptionsV2) {
    this.options = options;
  }
}

export const toQueryString = (queryObj: any): string => {
  if (!queryObj) {
    return '';
  }
  return Object.keys(queryObj)
    .map((key) => `${key}=${encodeURIComponent(queryObj[key])}`)
    .join('&');
};
