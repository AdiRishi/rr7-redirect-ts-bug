import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/redirect-to-home", "routes/redirect-to-home.tsx"),
] satisfies RouteConfig;
