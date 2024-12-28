# RR7 redirect Typescript Bug reproduction

This is a reproduction repository for issue https://github.com/remix-run/react-router/issues/12615

## Bug description

```
app/routes/redirect-to-home.tsx:8:17 - error TS4058: Return type of exported function has or is using name 'redirectSymbol' from external module "/Users/arishi/playground/rr7-redirect-ts-bug/node_modules/react-router/dist/development/route-data-aSUFWnQ6" but cannot be named.

8 export function loader({ context }: Route.LoaderArgs) {
                  ~~~~~~


Found 1 error.
```

## Steps to reproduce

Navigate to the `app/routes/redirect-to-home.tsx` file

This file contains a simple loader that redirects to the home page.

```tsx
import { redirect } from "react-router";
import { Route } from "./+types/redirect-to-home";

export function loader({ context }: Route.LoaderArgs) {
  return redirect("/", { status: 302 });
}
```

You should see the error mentioned above. You can also see it by running `npm run typecheck`.
