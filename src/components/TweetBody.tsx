export default function TweetBody({ body }: { body: string }) {

const formatText = (text:string) => {
  let formattedText = text;
  formattedText = formattedText.replace(/(\w)(@|#)/g, '$1 $2'); // Add space before @ and #
  formattedText = formattedText.replace(/(@|#)\s+(\w+)/g, '$1$2'); // Remove space after @ and #
  const words = formattedText.split(/(?<=\s)(?=\S)|(?<=\S)(?=\s)/); // Split on spaces that are followed by a non-newline character or on non-newline characters that are preceded by a space
  const formattedWords = words.map((word, index) => {
    if (word.includes('@') || word.includes('#')) {
      // Check if the previous character was a new line or the beginning of the string
      const isStartOfLine = index === 0 || /\n/.test(words[index-1]);
      const blueClass = isStartOfLine ? "text-blue-500" : "";
      return <span className={blueClass}>{word} </span>;
    } else {
      return <span>{word} </span>;
    }
  });
  return formattedWords;
};

  return (
    <p className="text-tweet whitespace-pre-line break-words">{formatText(body)}</p>
  );
}
