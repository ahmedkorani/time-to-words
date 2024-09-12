const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles times after 30 mins - 2:00", () => {
    const timeInWords = convertTimeToWords("2:00");
    expect(timeInWords).toBe("Two o'clock");
  });

  it("Handles times after 30 mins - 9:00", () => {
    const timeInWords = convertTimeToWords("9:00");
    expect(timeInWords).toBe("Nine o'clock");
  });

  it("Handles whole times - 5:00", () => {
    const timeInWords = convertTimeToWords("5:00");
    expect(timeInWords).toBe("Five o'clock");
  });

  it("Handle minutes before 30 - 2:03", () => {
    const timeInWords = convertTimeToWords("2:03");
    expect(timeInWords).toBe("Three past Two");
  });

  it("Handle minutes before 30 - 2:11", () => {
    const timeInWords = convertTimeToWords("2:11");
    expect(timeInWords).toBe("Eleven past Two");
  });

  it("Handle minutes before 30 - 2:15", () => {
    const timeInWords = convertTimeToWords("2:15");
    expect(timeInWords).toBe("quarter past Two");
  });

  it("Handle minutes before 30 - 2:30", () => {
    const timeInWords = convertTimeToWords("2:30");
    expect(timeInWords).toBe("half past Two");
  });

  it("Handle minutes before 30 - 2:33", () => {
    const timeInWords = convertTimeToWords("2:33");
    expect(timeInWords).toBe("twenty seven to Three");
  });

  // it('Handles 30 - 8:30', () => {
  //   const timeInWords = convertTimeToWords('8:30');
  //   expect(timeInWords).toBe('half past eight');
  // });

  // it('Handles times after 30 mins - 2:45', () => {
  //   const timeInWords = convertTimeToWords('2:45');
  //   expect(timeInWords).toBe('quarter to three');
  // });
});
