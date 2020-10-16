export class BaseAPI {
  private config: Configuration;

  constructor(config: Configuration = null) {
    this.config = config;
  }

  private getOptions(): ConfigOptions {
    return this.config ? this.config.options : Configuration.getGlobal();
  }

  protected async _request(context: RequestOptions): Promise<Response> {
    const { url, init } = this.createFetchParams(context);
    const response = await this.fetchApi(url, init);
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    throw await response.json();
  }

  private createFetchParams(context: RequestOptions) {
    const options = this.getOptions();

    let url = options.basePath + context.path;
    if (context.query) {
      url += `?${context.query}`;
    }
    const body = context.body ? JSON.stringify(context.body) : undefined;

    const headers = {};
    headers["Content-Type"] = "application/json";
    if (options.token) {
      headers["Authorization"] = `Bearer ${options.token}`;
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
      body,
    };
    return { url, init };
  }

  protected _stringifyQuery(queryObj): string {
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
      this.getOptions().fetchApi ||
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
  basicAuth?: { username: string; password: string };
}

export type FetchAPI = WindowOrWorkerGlobalScope["fetch"];

export interface ConfigOptions {
  basePath?: string;
  fetchApi?: FetchAPI;
  token?: string;
}

export class Configuration {
  public options: ConfigOptions;
  constructor(options: ConfigOptions) {
    this.options = options;
  }

  static options: ConfigOptions;

  static setGlobal(options: ConfigOptions): void {
    Configuration.options = options;
  }

  static getGlobal(): ConfigOptions {
    return Configuration.options;
  }
}
