const Intern = require("../lib/Intern");

describe("Intern", () => {
    const mockIntern = new Intern(123, "Bob", "Bob@gmail.com", "University of Alabama")
    describe("constructor tests", () => {
        test("should construct a new instance of the intern class", () => {
            expect(mockIntern).toBeInstanceOf(Intern);
        });
        test("should construct a new instance of an intern class with name, id, email, and school", () => {
            expect(mockIntern).toEqual({
                name: "Bob",
                id: 123,
                email: "Bob@gmail.com",
                school: "University of Alabama",
            });
        });
    });
    describe("method tests", () => {
        test("should return id when the getid method is called", () => {
            expect(mockIntern.getId()).toEqual(123);
        });
        test("should return name when the getName method is called", () => {
            expect(mockIntern.getName()).toEqual("Bob");
        });
        test("should return email when the getEmail method is called", () => {
            expect(mockIntern.getEmail()).toEqual("Bob@gmail.com");
        });
        test("should return the school name when the getSchool method is called", () => {
            expect(mockIntern.getSchool()).toEqual("University of Alabama");
        });
        test("should return intern role when the getRole method is called", () => {
            expect(mockIntern.getRole()).toEqual("Intern");
        });
    });
});