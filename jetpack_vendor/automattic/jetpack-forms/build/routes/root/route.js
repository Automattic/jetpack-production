// routes/root/route.ts
import { redirect } from "@wordpress/route";
var route = {
  /**
   * Redirect `/` to the default dashboard view.
   *
   * In wp-admin integrated mode, the boot router uses the `p` query arg and defaults to `/`
   * when missing. Adding this route lets us redirect to the default forms view.
   */
  beforeLoad: () => {
    throw redirect({ href: "/forms" });
  }
};
export {
  route
};
