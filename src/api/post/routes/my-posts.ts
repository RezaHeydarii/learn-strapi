export default {
  routes: [
    {
      // Path defined with a regular expression
      method: "GET",
      path: "/posts/me", // Only match when the URL parameter is composed of lowercase letters
      handler: "post.myPosts",
      config: {},
    },
  ],
};
