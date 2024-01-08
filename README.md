# 🛒 Pick for Me (Web)

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/Si-gongan/sigongan-public-demo.git
```

2. Install the dependencies

```bash
yarn install
```

3. Start the application

```bash
yarn start
```

## Environment Variables

The following environment variables are used by the application:

- `REACT_APP_AI_API_URL` : The API URL for the application.
- `REACT_APP_COUPANG_API_URL` : The API URL for the products from Coupang.
- `REACT_APP_COUPANG_API_TOKEN` : The API Token for the products from Coupang.
- `REACT_APP_SENTRY_DSN` : The Sentry DSN key for tracking error.

To set these environment variables, create a `.env` file in the root directory of the project and add the following lines:

```
REACT_APP_AI_API_URL=YOUR_API
REACT_APP_COUPANG_API_URL=YOUR_API
REACT_APP_COUPANG_API_TOKEN=YOUR_TOKEN
REACT_APP_SENTRY_DSN=YOUR_SENTRY_KEY
```

## Development Environment

- Node.js v20.8.0
- yarn v1.22.19
