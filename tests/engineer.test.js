const Engineer = require('../lib/engineer');

describe("Engineer", () => {

    describe("Initialization", () => {
        it("Should create an object with a name, id, email address, GitHub Username, role, and cardHTML if provided valid arguments", () => {
            const engineer = new Engineer("Paul Aston", 3, "p_aston@hotmail.co.uk", "PaulAston");

            expect(engineer.name).toEqual("Paul Aston");
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual("p_aston@hotmail.co.uk");
            expect(engineer.github).toEqual("PaulAston");
            expect(engineer.role).toEqual("Engineer");
            expect(engineer.engineerCard).toEqual(
            `<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div class='card engineer'>
                    <div class='card-body'>
                        <h4 class='card-title text-center'>Paul Aston</h4>
                        <h5 class='text-center'><i class="fas fa-laptop-code"></i>&nbsp Engineer</h5>
                        <div class='card'>
                            <ul class='list-group list-group-flush'>
                                <li class='list-group-item'>EMPLOYEE ID:&nbsp 3</li>
                                <li class='list-group-item'>EMAIL:&nbsp <a href="mailto:p_aston@hotmail.co.uk">p_aston@hotmail.co.uk</a></li>
                                <li class='list-group-item'>GITHUB USERNAME:&nbsp <a href="https://github.com/odders17">PaulAston</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
            )
        })
    });

    describe("GitHub", () => {
        it("Should set the GitHub Username via the constructor function", () => {
            const input = "PaulAston";
            const result = new Engineer("Name", 1, "name@name.com", input).getGithub();

            expect(input).toEqual(result);
        });
    });
});