export class BaseAPI {
  protected async request(context: RequestOptions): Promise<Response> {
    const { url, init } = this.createFetchParams(context);
    const response = await this.fetchApi(url, init);
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    throw response;
  }

  private createFetchParams(context: RequestOptions) {
    const config = Config.getGlobal();

    let url = config.basePath + context.path;
    if (context.query) {
      url += `?${context.query}`;
    }
    const body = context.body ? JSON.stringify(context.body) : undefined;

    const headers = {};
    headers["Content-Type"] = "application/json";
    if (config.token) {
      headers["Authorization"] = `Bearer ${config.token}`;
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

  protected stringifyQuery(queryObj): string {
    if (!queryObj) {
      return "";
    }
    return Object.keys(queryObj)
      .map((key) => `${key}=${encodeURIComponent(queryObj[key])}`)
      .join("&");
  }

  private fetchApi = async (url: string, init: RequestInit) => {
    let fetchParams = { url, init };
    let response = await Config.getGlobal().fetchApi(
      fetchParams.url,
      fetchParams.init
    );
    return response;
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

export class Config {
  static options: ConfigOptions;

  static setGlobal(o: ConfigOptions): void {
    Config.options = o;
  }

  static getGlobal(): ConfigOptions {
    return Config.options;
  }
}
