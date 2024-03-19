import option from "../utility/option.js";
import matchPattern from "../utility/matchPattern.js";
const { Some, None } = option;
const { match, variant } = matchPattern;
// matching pattern

match(
  Some(120),
  variant("Some", (v) => {
    console.log(`v: ${v}`);
  }),
  variant("None", (v) => {
    console.log(`v: ${v}`);
  })
);
