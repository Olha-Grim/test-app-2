
const defaultHighlight = s => <em>{s}</em>;

// Needed if the target includes ambiguous characters that are valid regex operators.
const escapeRegex = v => v && v.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");

const highlightWord = (source, target, callback) => {
    console.log(source, 'SOURSE!!')
    // console.log(target, 'target')
  const res = [];

  if (!source) return res;
  if (!target) return source;
  
  const regex = new RegExp(escapeRegex(target), 'gi');

  let lastOffset = 0;
  
  // Uses replace callback, but not its return value
  source.replace(regex, (val, offset) => {
    // Push both the last part of the string, and the new part with the highlight
    res.push(
      source.substr(lastOffset, offset - lastOffset),
      // Replace the string with JSX or anything.
      (callback || defaultHighlight)(val)
    );
    lastOffset = offset + val.length;
  });
  
  // Push the last non-highlighted string
  res.push(source.substr(lastOffset));
  console.log(res,'REEES')
  return res;
};

/**
 * React component that wraps our `highlightWord` util.
 */
export const Highlight = ({ source, target, children }) => highlightWord(source, target, children);

