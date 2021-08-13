const Employee = require('../team/employee');

describe("Employee", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id and email address if provided valid arguments", () => {
            const employee = new Employee("Paul Aston", 3, "p_aston@hotmail.co.uk");

            expect(employee.name).toEqual("Paul Aston");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("p_aston@hotmail.co.uk");
        })
    });

    describe("Name", () => {
        it("Should set the Name via the constructor function", () => {
        const input = "Paul Aston";
        const expected = {"name": "Paul Aston", "id": 1, "email": "name@name.com"};
        
        const result = new Employee(input, 1, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should set the Employee ID via the constructor function", () => {
        const input = 100;
        const expected = {"name": "First Last", "id": 100, "email": "name@name.com"};
        
        const result = new Employee("First Last", input, "name@name.com");

        expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should set the Email via the constructor function", () => {
        const input = "p_aston@hotmail.co.uk";
        const expected = {"name": "First Last", "id": 1, "email": "p_aston@hotmail.co.uk"};
        
        const result = new Employee("First Last", 1, input);

        expect(result).toEqual(expected);
        });
    });
});