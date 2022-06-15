const produits_controller = require("../produits.controller")
// @ponicode
describe("produits_controller.saveProduct", () => {
    test("0", () => {
        let result = produits_controller.saveProduct({ body: "package" }, { send: () => 400 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = produits_controller.saveProduct({ body: "key" }, { send: () => 429 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = produits_controller.saveProduct({ body: "wasGeneratedBy" }, { send: () => 404 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = produits_controller.saveProduct({ body: "action" }, { send: () => 429 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = produits_controller.saveProduct({ body: "role" }, { send: () => 200 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = produits_controller.saveProduct({ body: "" }, { send: () => Infinity })
        expect(result).toMatchSnapshot()
    })
})
