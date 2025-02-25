export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "cindy";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "cindywan";
  }

  if (query.toLowerCase().includes("plus")) {
    const num1 = query.substring(query.indexOf("is ") + 3, query.indexOf(" plus"));
    const num2 = query.substring(query.indexOf("plus ") + 5, query.indexOf("?"));
    const sum = parseInt(num1) + parseInt(num2);
    return sum.toString();
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
        const numArray = numbers.map(Number);
        const largest = Math.max(...numArray);
        return largest.toString();
    }
  }

  return "";
}
