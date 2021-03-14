function titleize(sentence) {
  let noNos = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];

  let words = sentence.split(" ");

  for (let index = 0; index < words.length; index++) {
    if (noNos.find((el) => el === words[index]) === undefined) {
       words[index] = words[index][0].toUpperCase() + words[index].substring(1);
    } else {
      console.log("Found a no-no!");
    }
  }

  return words.join(" ");
}

test =
  "removes non-alphanumeric characters except for dash, single quote and space";

console.log(titleize(test));

// words[index] != 'the'; words[index] !='a', words[index] !='an', words[index] !='but', words[index] !='of', words[index] !='and', words[index] !='for', words[index] !='at', words[index] !='by' words[index] !='from'
