function timeConversion(s) {
  let am = s.includes("AM");
  let pm = s.includes("PM");

  if (am) {
    if (s.slice(0, 2) === "12") {
      return "00" + s.slice(2, 8);
    } else {
      return s.slice(0, 8);
    }
  } else if (pm) {
    if (s.slice(0, 2) === "12") {
      return s.slice(0, 8);
    } else {
      let result = s.slice(0, 8);
      let ttr = result.slice(0, 2);
      let finalres = parseInt(ttr) + 12;
      let replace = result.replace(ttr, finalres);
      return replace;
    }
  } else {
    return "Invalid input";
  }
}
