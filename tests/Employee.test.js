const Employee = require("../lib/Employee");

describe("Employee", () => {
    const mockEmployee = new Employee(123, "Bob", "Bob@gmail.com")
    describe("constructor tests", () => {
        test("should construct a new instance of an employee class", () => {
            expect(mockEmployee).toBeInstanceOf(Employee);
        });
        test("should construct a new instance of an employee class with name, id, and email", () => {
            expect(mockEmployee).toEqual({
                id: 123,
                name: "Bob",
                email: "Bob@gmail.com",
            });
        });
    });
    describe("method tests", () => {
        test("should return id when the getid method is called", () => {
            expect(mockEmployee.getId()).toEqual(123);
        });
        test("should return name when the getName method is called", () => {
            expect(mockEmployee.getName()).toEqual("Bob");
        });
        test("should return email when the getEmail method is called", () => {
            expect(mockEmployee.getEmail()).toEqual("Bob@gmail.com");
        });
    });
});