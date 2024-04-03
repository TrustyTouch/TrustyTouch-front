import { createWebHistory, createRouter, Router } from "vue-router";
import routes from "../pages";

const router: Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;