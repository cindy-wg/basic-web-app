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

  if (query.toLowerCase().includes("multiplied")) {
    const num1 = query.substring(query.indexOf("is ") + 3, query.indexOf(" multiplied"));
    const num2 = query.substring(query.indexOf("by ") + 3, query.indexOf("?"));
    const sum = parseInt(num1) * parseInt(num2);
    return sum.toString();
  }

  if (query.toLowerCase().includes("square and a cube")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
        const isPerfectSixthPower = (num : number) => {
            const sixthRoot = Math.round(Math.pow(num, 1/6));
            return Math.pow(sixthRoot, 6) === num;
        };

        const result = numbers.filter(num => isPerfectSixthPower(Number(num)));

        if (result.length > 0) {
            return result.join(", ");
        } else {
            return "";
        }
    }
  }

  if (query.toLowerCase().includes("primes")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
        const isPrime = (num : number) => {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        };

        const primes = numbers.filter(num => isPrime(Number(num)));

        if (primes.length > 0) {
            return primes.join(", ");
        } else {
            return "";
        }
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const num1 = query.substring(query.indexOf("is ") + 3, query.indexOf(" minus"));
    const num2 = query.substring(query.indexOf("minus ") + 6, query.indexOf("?"));
    const sum = parseInt(num1) - parseInt(num2);
    return sum.toString();
  }

  return "";
}
