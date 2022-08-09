import { jest } from "@jest/globals";
import { usrRepository } from "../../src/repository/usrRepository";
import { usrService } from "../../src/service/usrService"

describe("POST signup", () => {
    it("given a valid input, should create an user", async () => {
        const usr = {
            "name": "ciclano",
            "email": "ciclano@email.com",
            "password": "senha"
        }

        jest.spyOn(usrRepository, "selectUserByEmail").mockImplementationOnce((usr): any => {
            return false
        })
        jest.spyOn(usrRepository, "createUser").mockImplementationOnce((): any => {

        })
        await usrService.create(usr)
        expect(usrRepository.createUser).toBeCalled()
    })
})