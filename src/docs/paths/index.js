import post  from "./auth.path.js";

export default {
  '/auth/login-phone': {
    post: post.postPhone,
  },
  '/auth/login-email': {
    post: post.postEmail,
  },
};
