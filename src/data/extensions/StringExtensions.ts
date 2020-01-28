declare global {
  interface String {
    toCamelCase(): string;
  }
}

// Mute eslint warning. Eslint complains about extension methods (it was complaining about prototype is readonly)
// eslint-disable-next-line no-extend-native
String.prototype.toCamelCase = function() {
  return this.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};

export default {};
