import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("presentation", "routes/presentation.tsx"),
  route("achievements", "routes/achievements.tsx"),
] satisfies RouteConfig;
