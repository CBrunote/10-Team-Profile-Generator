const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const mockEngineer = new Engineer(123, "Bob", "Bob@gmail.com", "www.github.com/bob_coder")
    describe("constructor tests", () => {
        test("should construct a new instance of the engineer class", () => {
            expect(mockEngineer).toBeInstanceOf(Engineer);
        });
        test("should construct a new instance of an engineer class with name, id, email, and github profile", () => {
            expect(mockEngineer).toEqual({
                name: "Bob",
                id: 123,
                email: "Bob@gmail.com",
                github: "www.github.com/bob_coder",
            });
        });
    });
    describe("method tests", () => {
        test("should return id when the getid method is called", () => {
            expect(mockEngineer.getId()).toEqual(123);
        });
        test("should return name when the getName method is called", () => {
            expect(mockEngineer.getName()).toEqual("Bob");
        });
        test("should return email when the getEmail method is called", () => {
            expect(mockEngineer.getEmail()).toEqual("Bob@gmail.com");
        });
        test("should return the github proifle when the getGithub method is called", () => {
            expect(mockEngineer.getGithub()).toEqual("www.github.com/bob_coder");
        });
        test("should return engineer role when the getRole method is called", () => {
            expect(mockEngineer.getRole()).toEqual("Engineer");
        });
    });
});