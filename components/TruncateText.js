import React, { useState } from 'react';

const truncateText = (text, maxLength) => {
  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  return {
    fullText: text,
    truncatedText: truncatedText,
    isTruncated: text.length > maxLength,
  };
};

const TruncateText = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);
  const { fullText, truncatedText, isTruncated } = truncateText(text, maxLength);

  return (
    <p>
      {showFullText ? fullText : truncatedText}
      {isTruncated &&
        <button className=" cursor-pointer px-2 font-bold" onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? 'Show Less' : 'Show More'}
        </button>
      }
    </p>
  );
};

export default TruncateText;