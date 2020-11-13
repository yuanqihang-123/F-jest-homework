import getUsers from "../users";

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // 13: add async test with manual mock
    await expect(getUsers()).rejects.toThrow("Network Error");
  });
});
