module.exports = {
    entry: './src/bootstrap.ts',
    resolve: {
        fallback: {
          util: require.resolve("util/")
        }
    },
    experiments: {
        syncWebAssembly: true,
      },
  };
