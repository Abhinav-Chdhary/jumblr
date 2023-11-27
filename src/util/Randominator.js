const randominator = (word) => {
  //Fisher-Yates Algorithm
  const charArray = word.split("");

  for (let i = charArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    // Swap charArray[i] and charArray[j]
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }
  let res = charArray.join("");
  if (res === word) return randominator(word);
  return res;
};
module.exports = randominator;
