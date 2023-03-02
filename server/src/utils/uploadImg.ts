import { v4 as uuidv4 } from "uuid";

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function uploadImg(imageURI: string) {
  let imageUrl = "";
  const image = imageURI;
  const extension = image.substring(
    "data:image/".length,
    image.indexOf(";base64")
  );
  const imageName = uuidv4() + "." + extension;
  const imageData = image.replace(/^data:image\/\w+;base64,/, "");
  const imageBuffer = Buffer.from(imageData, "base64");
  imageUrl = process.env.IMAGE_SERVER + imageName;

  const { data, error } = await supabase.storage
    .from("twitter-clone")
    .upload(imageName, imageBuffer, {
      cacheControl: "999999999",
    });
  console.log("data:", data, "error:", error);
  return imageUrl;
}
