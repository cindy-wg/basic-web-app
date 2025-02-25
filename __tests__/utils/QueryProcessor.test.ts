import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "cindy"
          ));
    })

    test('should return andrew id', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "cindywan"
          ));
    })

    test('should return addition', () => {
        const query = "What is 2 plus 7?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "9"
          ));
    })

    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 33, 62, 78?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "78"
          ));
    })

    test('should return multiplication', () => {
        const query = "What is 3 multiplied by 8?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "24"
          ));
    })

    test('should return numbers that are a square and a cube', () => {
        const query = "Which of the following numbers is both a square and a cube: 2, 3, 5, 6, 64?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "64"
          ));
    })
});