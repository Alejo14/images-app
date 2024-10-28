# Photo App - Alejandro Tapia

### Configuration Details

In order to configure the site to work locally follow the instructions:

1. Register the app to work with the Unsplash API
2. Create in the root folder the following files .env and .env.d.ts
3. For the .env file:
- Create the variable VITE_ACCESS_KEY and assign it the access key obtained when registering the app.
- Create the variable VITE_SECRET_KEY and assing it the secret key obtained when registering the app.
- Create the variable VITE_API_URL and assing it the value of the base url of the Unsplash API: https://api.unsplash.com
- Create the variable VITE_API_VERSION and assign it the value V1 (this is to set up the connection to the correct version of the API)
4. For the .env.d.ts:
- Paste the following
```ts
interface ImportMetaEnv {
    readonly VITE_ACCESS_KEY: string;
    readonly VITE_SECRET_KEY: string;
    readonly VITE_API_URL: string;
    readonly VITE_API_VERSION: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
```
5. Run the comands npm install
6. Run the command npm run dev to deploy the solution

Considerations: Node Version: v20.10.0 | NPM Version: 10.8.3