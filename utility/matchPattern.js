const variant = (head, body) => {
  return (pattern) => {
    if (pattern[Symbol.toStringTag] === head) {
      body(pattern.valueOf());
    }
  };
};

const match = (pattern, ...variants) => {
  for (let i = 0; i < variants.length; i++) {
    const variant = variants.at(i);
    variant(pattern);
  }
};

export default {
  match,
  variant,
};
