

export const escapeHTML = (text) => {
  return text.replace(/[<>]/g, function(match, pos, originalText) {
    switch (match) {
      case '<': return '&lt;';
      case '>': return '&gt;';
    }
  });
};

export const isType = (obj) => {
  return (obj === undefined || obj === null) ? obj : (obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1]);  // eslint-disable-line
};

