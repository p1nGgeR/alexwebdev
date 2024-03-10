import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { DATA_DIR, MDX_FILE_EXT } from ".";

export default async function getAll<T>(
  dataType: string,
): Promise<{ data: T; fileName: string }[]> {
  const files = fs.readdirSync(path.join(DATA_DIR, dataType));

  try {
    // @ts-ignore
    return files.reduce((result, fileName) => {
      const filePath = path.join(DATA_DIR, dataType, fileName);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);
      const modified_at = fs.statSync(filePath).mtime;

      return [
        {
          data: { ...data, modified_at },
          fileName: fileName.replace(MDX_FILE_EXT, ""),
        },
        ...result,
      ];
    }, []);
  } catch (exception) {
    console.error({ exception });
  }

  return [];
}
