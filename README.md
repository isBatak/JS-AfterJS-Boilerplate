# Next.js React frontend

## Setup

```bash
yarn
```


## Running

```bash
yarn dev
```

## Deploying

```bash
yarn build
yarn start
```
## Storybook

```bash
yarn run storybook
```

## Environment variables
Environment variables are kept in Vault.

### Setup
1. Install `gem install secrets_cli`
2. Ask DevOps to give you access to the project Vault
3. Create `.secrets` file in the root of the project and add this content:
    ```
    ---
    :secrets_file: .env
    :secrets_storage_key: js/...
    ```
    NOTE: You should get `:secrets_storage_key` from the DevOps
4. Rename `.env.example` to `.env`
5. Fill in the environment variables and push them to Vault `secrets push -e development`

### Access the environment variables in the client code
We don't want all the env variables to end up in client code because some of them are used only on the server side and some of them should remain secret.
That's why we need to pick them manually from the `process.env` in the `pages/_document.js` file, like this:
```js
const {
  APP_ENV,
  API_URL,
  BUGSNAG_API_KEY,
} = process.env;
const env = {
  APP_ENV,
  API_URL,
  BUGSNAG_API_KEY,
};
```
