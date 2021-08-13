const Intern = require('../lib/intern');

describe("Intern", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address and school if provided valid arguments", () => {
            const intern = new Intern("Paul Aston", 3, "p_aston@hotmail.co.uk", "PH");

            expect(intern.name).toEqual("Paul Aston");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("p_aston@hotmail.co.uk");
            expect(intern.school).toEqual("PH");
            expect(intern.role).toEqual("Intern");
            expect(intern.internCard).toEqual(
                `<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card intern'>
                    <div class='card-body'>
                    <h4 class='card-title text-center'>Paul Aston</h4>
                    <h5 class='text-center'><i class="fas fa-user-graduate"></i>&nbsp Intern</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>EMPLOYEE ID:&nbsp 3</li>
                                <li class='list-group-item'>EMAIL:&nbsp <a href="p_aston@hotmail.co.uk">p_aston@hotmail.co.uk</a></li>
                                <li class='list-group-item'>SCHOOL:&nbsp UW</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
            )
        })
    });

    describe("School", () => {
        it("Should set the School via the constructor function", () => {
            const input = "Park Hall";
            const result = new Intern("Name", 1, "name@name.com", input).getSchool();

            expect(input).toEqual(result);
        });
    });
});
