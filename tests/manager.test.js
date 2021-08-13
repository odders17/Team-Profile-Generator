const Manager = require('../team/manager');

describe("Manager", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address and office number if provided valid arguments", () => {
            const manager = new Manager("Paul Aston", 3, "p_aston@hotmail.co.uk", "123");

            expect(manager.name).toEqual("Paul Aston");
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual("p_aston@hotmail.co.uk");
            expect(manager.officeNumber).toEqual("123");
            expect(manager.role).toEqual("Manager");
            expect(manager.managerCard).toEqual(
            `<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card manager'>
                    <div class='card-body'>
                        <h4 class='card-title text-center'>Paul Aston</h4>
                        <h5 class='card-title text-center'><i class="fas fa-tasks"></i>&nbsp Manager</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>EMPLOYEE ID:&nbsp 3</li>
                                <li class='list-group-item'>EMAIL:&nbsp <a href="mailto:p_aston@hotmail.co.uk">p_aston@hotmail.co.uk</a></li>
                                <li class='list-group-item'>OFFICE NUMBER:&nbsp 123</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
        )
        })
    });

    describe("OfficeNum", () => {
        it("Should set the Office Number via the constructor function", () => {
            const input = "42";
            const result = new Manager("Name", 1, "name@name.com", input).getOfficeNumber();

            expect(input).toEqual(result);
        });
    });
});