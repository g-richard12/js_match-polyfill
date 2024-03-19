function Some(v) {
  let variantIdentifier;
  try {
    variantIdentifier = arguments.callee.name;
  } catch (err) {
    variantIdentifier = err.stack
      .split(/\r\n|\r|\n/g)[1]
      .trim()
      .split(" ")[1];
  }

  return {
    valueOf() {
      return v;
    },
    [Symbol.toStringTag]: variantIdentifier,
  };
}

function None() {
  let variantIdentifier;
  try {
    variantIdentifier = arguments.callee.name;
  } catch (err) {
    variantIdentifier = err.stack
      .split(/\r\n|\r|\n/g)[1]
      .trim()
      .split(" ")[1];
  }

  return {
    valueOf() {
      return;
    },
    [Symbol.toStringTag]: variantIdentifier,
  };
}

export default {
  Some,
  None,
};
