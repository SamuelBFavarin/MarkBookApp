import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          List: {
            screens: {
              List: 'List',
            },
          },
          New: {
            screens: {
              New: 'New',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
