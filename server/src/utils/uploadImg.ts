import { v4 as uuidv4 } from "uuid";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function uploadImg(imageURI: string) {
  let imageUrl = "";
  const image = imageURI;
  const imageName = uuidv4();
  const imageData = image.replace(/^data:image\/\w+;base64,/, "");
  const imageBuffer = Buffer.from(imageData, "base64");
  imageUrl = process.env.IMAGE_SERVER!.endsWith("/")
    ? process.env.IMAGE_SERVER + imageName
    : process.env.IMAGE_SERVER + "/" + imageName;

  const { data, error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET!)
    .upload(imageName, imageBuffer, {
      cacheControl: "999999999",
    });
  console.info("data:", data, "err", error);
  return imageUrl;
}
