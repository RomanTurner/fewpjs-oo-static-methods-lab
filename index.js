class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.replace(/\b\w/g, (l) => l.toUpperCase());
  }
  static sanitize(string) {
    return string.replace(/[^-,'A-Za-z0-9 ]+/g, "");
  }
  static titleize(sentence) {
    let noNos = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];

    let words = sentence.split(" ");
    words[0] = words[0][0].toUpperCase() + words[0].substring(1);
    for (let index = 1; index < words.length; index++) {
      if (noNos.find((el) => el === words[index]) === undefined) {
        words[index] =
          words[index][0].toUpperCase() + words[index].substring(1);
      } else {
        console.log("Found a no-no!");
      }
    }

    return words.join(" ");
  }
}
