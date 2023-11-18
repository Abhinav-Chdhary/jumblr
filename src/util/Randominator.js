const randominator = (word) => {
  const n = word.length;
  let res = "";
  for (let i = 0; i < n; i++) {
    let idx = Math.floor(Math.random() * n);
    let charArray = word.split("");
    [charArray[i], charArray[idx]] = [charArray[idx], charArray[i]];
    res = charArray.join("");
  }
  return res;
};
module.exports = randominator;
