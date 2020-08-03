## @sentecacommerce/sdk

OpenAPI generated client for SentecaCommerce platform.

Sample use:

```
import { StoresApi, Configuration } from "@sentecacommerce/sdk";



const config = new Configuration({
    basePath: "<api_url>",
    headers: { Authorization: `Bearer ${<token>}` },
});

const api = new StoresApi(config);

const result: StoreDTO = await api.findStoreById({
    id: "<id>",
});

```
