import {index, layout, route, type RouteConfig} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    layout("routes/auth/layout.tsx", [
        route("login", "routes/auth/login.tsx"),
    ]),
] satisfies RouteConfig;

