import VaccineTest from "../vaccineTest";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockGetHasAtiBodies = jest.fn();

jest.mock("../recipient", () => {
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAtiBodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  mockAcceptInjection.mockClear();
  mockGetHasAtiBodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    mockGetHasAtiBodies.mockReturnValue(true);
    const vaccineTest = new VaccineTest();
    expect(vaccineTest.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    mockGetHasAtiBodies.mockReturnValueOnce(false);
    const vaccineTest = new VaccineTest();
    expect(vaccineTest.test()).toBe("Vaccine Test Failed");
  });
});
