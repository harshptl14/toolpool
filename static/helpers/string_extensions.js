/* eslint-disable no-extend-native */
// extensions methods for String object

// Function to check alphabetic characters
var isAlpha = function (ch) {
  return /^[A-Za-z]$/i.test(ch);
};

Object.defineProperty(String.prototype, "toMixedCase", {
  value: function toMixedCase() {
    var result = "";
    for (var i = 0; i < this.length; i++) {
      if (isAlpha(this.charAt(i))) {
        if (i % 2 !== 0) {
          result += this.charAt(i).toLowerCase();
        } else {
          result += this.charAt(i).toUpperCase();
        }
      } else {
        result += this.charAt(i);
      }
    }
    return result;
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(String.prototype, "toInverseCase", {
  value: function toInverseCase() {
    var result = "";
    for (var i = 0; i < this.length; i++) {
      if (isAlpha(this.charAt(i))) {
        if (i % 2 === 0) {
          result += this.charAt(i).toLowerCase();
        } else {
          result += this.charAt(i).toUpperCase();
        }
      } else {
        result += this.charAt(i);
      }
    }
    return result;
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(String.prototype, "toSentenceCase", {
  value: function toSentenceCase() {
    let text = this.replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, (s) =>
      s.replace(/([a-z])/, (s) => s.toUpperCase())
    );
    return text;
  },
  writable: true,
  configurable: true,
});

Object.defineProperty(String.prototype, "toTitleCase", {
  value: function toTitleCase() {
    var result = "";
    for (var i = 0; i < this.length; i++) {
      if (i === 0) {
        result += this.charAt(i).toUpperCase();
      } else if (this.charAt(i) === " ") {
        if (isAlpha(this.charAt(i + 1))) {
          result += " " + this.charAt(i + 1).toUpperCase();
          i++;
        } else {
          result += " ";
        }
      } else {
        result += this.charAt(i);
      }
    }
    return result;
  },
  writable: true,
  configurable: true,
});
