String.prototype.camelCase = function() {
  return this
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
          if(!index) {
            return word;
          }
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
};
