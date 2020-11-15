import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // 13: add async test with manual mock
    axios.get.mockResolvedValue({
      data: "haha",
    });
    await expect(getUsers()).resolves.toBe("haha");
  });
});
