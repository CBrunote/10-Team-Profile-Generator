const Manager = require("../lib/Manager");

describe("Manager", () => {
    const mockManager = new Manager(123, "Bob", "Bob@gmail.com", 321)
    describe("constructor tests", () => {
        test("should construct a new instance of the manager class", () => {
            expect(mockManager).toBeInstanceOf(Manager);
        });
        test("should construct a new instance of an manager class with name, id, email and office number", () => {
            expect(mockManager).toEqual({
                name: "Bob",
                id: 123,
                email: "Bob@gmail.com",
                officeNumber: 321,
            });
        });
    });
    describe("method tests", () => {
        test("should return id when the getid method is called", () => {
            expect(mockManager.getId()).toEqual(123);
        });
        test("should return name when the getName method is called", () => {
            expect(mockManager.getName()).toEqual("Bob");
        });
        test("should return email when the getEmail method is called", () => {
            expect(mockManager.getEmail()).toEqual("Bob@gmail.com");
        });
        test("should return the office number when the getOfficeNumber method is called", () => {
            expect(mockManager.getOfficeNumber()).toEqual(321);
        });
        test("should return intern role when the getRole method is called", () => {
            expect(mockManager.getRole()).toEqual("Manager");
        });
    });
});