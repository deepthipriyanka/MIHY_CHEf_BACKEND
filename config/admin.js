module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'da4f076eb92b0a0eeb79e78bed1f0f96'),
  },
});
