// path: ./config/plugins.ts

export default ({ env }) => ({
    upload: {
      config: {
        providerOptions: {
          localServer: {
            maxage: 300000
          },
        },
      },
    },
  });