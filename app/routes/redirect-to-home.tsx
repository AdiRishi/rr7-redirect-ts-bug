import { redirect } from "react-router";
import { Route } from "./+types/redirect-to-home";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Redirect" }];
};

export function loader({ context }: Route.LoaderArgs) {
  return redirect("/", { status: 302 });
}

export default function Home() {
  return <div>You should not see this text. If you do, the redirect did not work.</div>;
}
