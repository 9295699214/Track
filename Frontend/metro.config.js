const { getDefaultConfig } = require('metro-config');

module.exports = async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);

  return {
    resolver: {
      sourceExts: [...sourceExts, 'jsx', 'tsx'], // Add other source extensions as needed
      assetExts: [...assetExts, 'png', 'jpg', 'jpeg', 'gif', 'webp'], // Add other asset extensions as needed
    },
  };
};
