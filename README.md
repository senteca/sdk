# @sentecacommerce/sdk

OpenAPI generated client for SentecaCommerce platform.

## SDK generation
To generate the sdk for local development from an API running on localhost:5000, you can run:
```
npm run generate
```

To use a different API url, you can change the generator/config apiURL property.

To generate the SDK and publish a new version to npm, you can use:
```
npm run update
```

## Usage

```
import fetch from "isomorphic-unfetch";
import { StoresAPI, StoreDTO, Configuration, TokenAPI, AccessTokenDTO } from "@sentecacommerce/sdk";

// set a global configuration to be shared between all APIs
Configuration.setGlobal({
    basePath: <base path>,
    token: <access token | api key>,
    fetchApi: fetch, // optional, if not provided, window.fetch will be used by default on the client
  })

const storesApi = new StoresAPI();

const store: StoreDTO = await api.getById("<id>");


const localConfig = new Configuration({
    basePath: <some other base path>,
});

const tokenApi = new TokenAPI(localConfig); // only the basePath configuration will be set.

const apiKey: AccessTokenDTO = await tokenApi.createToken(
    { userName: <username>, password: <password> },  // basic auth provided instead of bearer token. Cannot have both.
    { grantType: "client-credentials" }
);

```

## API methods

All api methods reflect the REST endpoints available throughout the platform.
Parameters are positioned as follows:
 - authorization methods such as basic auth if any, e.g. { userName: <username>, password: <password> }
 - path parameters enumerated if any, e.g. id, key, productId, variantId
 - query parameters grouped in a query object if any, e.g. { filter: <filter>, sort: <sort> }
 - request body dto if any, e.g. dto: StoreDTO

Any additional headers such as Content-Type do not need to be added, they are set by the sdk automatically.
