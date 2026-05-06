// routes/dashboard/route.tsx
var route = {
  /**
   * Show the inspector slot only when a subscriber is selected via URL params.
   * Boot's router calls this on every navigation and uses the boolean to
   * decide whether to render the `<Inspector />` export.
   *
   * @param ctx        - Route loader context.
   * @param ctx.search - URL search-param record.
   * @return Whether to render the inspector slot.
   */
  inspector: ({ search }) => {
    return Boolean(search?.subscriber || search?.u);
  }
};
export {
  route
};
