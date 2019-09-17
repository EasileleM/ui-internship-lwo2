// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  return this
      .toLowerCase()
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
};
