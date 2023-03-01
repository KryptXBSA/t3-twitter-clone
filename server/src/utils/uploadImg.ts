import fs from "fs";
import { v4 as uuidv4 } from "uuid";
export function uploadImg(imageURI: string):string {
  let imageUrl = "";
  const image = imageURI;
  const extension = image.substring(
    "data:image/".length,
    image.indexOf(";base64")
  );
  const imageName = uuidv4() + "." + extension;
  imageUrl = process.env.IMAGE_SERVER + imageName;
  fs.writeFile(
    "./images/" + imageName,
    image.replace(/^data:image\/\w+;base64,/, ""),
    { encoding: "base64" },
    (err) => {
      if (err) throw err;
      console.log("Image saved successfully");
    }
  );
    return imageUrl
}
