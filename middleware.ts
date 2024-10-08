import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
 
  publicRoutes: ['/','/api/webhooks/clerk','/api/webhooks/stripe' ],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/no-auth-in-this-route'],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};