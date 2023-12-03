import { authMiddleware } from "@clerk/nextjs";

// publicRoutes - не защищены авторизацией
export default authMiddleware({
      publicRoutes: [
            "/",
            "/login",
            "/sign-up",
            "/api/webhook",
            "/for-sellers",
            "/new-products",
            "/help",
            "/shop/:name",
            "/shop/:name/reviews",
            "/shop/:name/about",
            "/search",
            "/category/:name",
            "/all-shops",
      ],
      ignoredRoutes: ["/api/webhook"],
});

export const config = {
      matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
