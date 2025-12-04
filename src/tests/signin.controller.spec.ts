import { signinController } from "../controllers/signin.controllers.js";

describe("SignIn Controller", () => {
  it("Successfully SignIn", () => {
    const request = {
      body: {
        username: "Katyusha",
        password: "Pravda@123",
      },
    };


    const reply = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    }



  });
});
