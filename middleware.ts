import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// A set of pages which are publicly accessible
const isPublicPage = createRouteMatcher([
	"/sign-in(.*)",
	"/sign-up(.*)",
	"/forgot-password(.*)",
	"/reset-password(.*)",
	"/verify-email(.*)",
	"/api/uploadthing(.*)",
]);

// Protect all pages except public pages
export default clerkMiddleware((auth, req) => {
	if (!isPublicPage(req)) auth().protect();
});

// Path: middleware.ts
export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
