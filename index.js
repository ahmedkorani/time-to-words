// expecting time to be a string in the format like '8:15' or '12:30'

// -"2:33" > "twenty seven to three";

const TIME_IN_WORDS = {
  2: "Two",
  3: "Three",
  5: "Five",
  9: "Nine",
  11: "Eleven",
  27: "twenty seven",
};

const MINS_IN_WORDS = {
  15: "quarter",
  45: "quarter",
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  const [hours, mins] = time.split(":");

  if (mins === "00") return `${TIME_IN_WORDS[hours]} o'clock`;

  const hoursInt = Number(hours);
  const minsInt = Number(mins);

  if (minsInt === 15) {
    return `quarter past ${TIME_IN_WORDS[hours]}`;
  }

  if (minsInt === 30) {
    return `half past ${TIME_IN_WORDS[hours]}`;
  }

  if (minsInt <= 30) {
    return `${TIME_IN_WORDS[minsInt]} past ${TIME_IN_WORDS[hours]}`;
  }

  const minsToNextHour = 60 - minsInt;
  const nextHour = hoursInt + 1;

  return `${TIME_IN_WORDS[minsToNextHour]} to ${TIME_IN_WORDS[nextHour]}`;

  return "half past eight";
}

module.exports = { convertTimeToWords };
