export default function TweetBody({ body }: { body: string }) {

  const formatText = () => {
    let formattedText = body;
    formattedText = formattedText.replace(/(\w)(@|#)/g, "$1 $2"); // Add space before @ and #
    formattedText = formattedText.replace(/(@|#)\s+(\w+)/g, "$1$2"); // Remove space after @ and #
    const words = formattedText.split(" ");
    const formattedWords = words.map((word) => {
      if (word.includes("@") || word.includes("#")) {
        return (
          <span className="text-blue-500 underline-offset-2 hover:underline">
            {word}{" "}
          </span>
        );
      } else {
        return <span>{word} </span>;
      }
    });
    return formattedWords;
  };

  return (
    <p className="text-tweet whitespace-pre-line break-words">{formatText()}</p>
  );
}
