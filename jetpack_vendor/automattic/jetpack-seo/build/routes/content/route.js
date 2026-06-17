// routes/content/route.tsx
var route = {
  /**
   * Show the inspector only when a post is selected.
   *
   * @param props               - Route props.
   * @param props.search        - The search parameters.
   * @param props.search.postId - The selected post id, when set.
   * @return Whether to render the inspector.
   */
  inspector: ({ search }) => !!search?.postId
};
export {
  route
};
