import { TO_REMOVE } from "./TO_REMOVE";

export function removeProperties<T>(obj: T, toRemove?: string[]): T {
  if (!toRemove) toRemove = TO_REMOVE;
  if (obj instanceof Date || typeof obj !== "object" || obj === null) {
    return obj as T;
  }

  const newObj: any = Array.isArray(obj) ? [] : {};

  for (const [key, value] of Object.entries(obj)) {
    if (toRemove.includes(key)) {
      continue;
    }

    newObj[key] = removeProperties(value, toRemove);
  }

  return newObj as T;
}
