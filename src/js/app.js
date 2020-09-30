export default function sortByHealth(charsArray) {
  charsArray.sort((a, b) => b.health - a.health);
  return charsArray;
}
