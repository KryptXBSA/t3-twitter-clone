export function limitText(text: string) {
  if (text.length > 15) return text.slice(0, 15) + "...";
    return text
}
