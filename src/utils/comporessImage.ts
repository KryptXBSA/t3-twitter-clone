import { compress } from "image-conversion";
  export async function compressFile(file: File, quality: number): Promise<Blob> {
    let compressed = await compress(file, quality);
    return compressed;
  }
