import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { DATA_DIR, MDX_FILE_EXT } from ".";

export default async function getOne<T>(
  dataType: string,
  fileName: string,
): Promise<T | null> {
  const filePath = path.join(DATA_DIR, dataType, `${fileName}${MDX_FILE_EXT}`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const source = fs.readFileSync(filePath, "utf8");
    const modified_at = fs.statSync(filePath).mtime;

    const { data, content } = matter(source);

    return {
      ...data,
      modified_at,
      content,
    } as T;
  } catch (exception) {
    console.error({ exception });
  }

  return null;
}
