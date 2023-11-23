import {authMiddleware} from "@clerk/nextjs";

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
		"/category/:name",
	],
	ignoredRoutes: ["/api/webhook"],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
