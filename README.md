# NewsAPI APP!

### Local setup:

0. Node & Yarn installed
1. Run `yarn install`
2. Setup environment variables
   1. `cp .env.example .env.local`
   2. By default it will serve just mocked data via `MSW`
   3. Or, Add your news API key to env file (You can register [here](https://newsapi.org/)) and set `NEXT_PUBLIC_ENABLE_MOCKING=false`
3. Start development server `yarn dev`
4. Visit `http://localhost:3000` in your browser

#### Unit tests

1. Unit tests can be run via jest `yarn run test`

#### E2E tests

1. First, build app with `yarn run build`
2. Then run cypress
   1. For local development run `yarn run e2e`
   2. For headless mode run `yarn run e2e:headless`

### Still To Do:

1. Error handling for API endpoints
2. Consider using Storybook as component documentation
3. Add more Unit/E2E tests
4. More restrictive Linting rules
