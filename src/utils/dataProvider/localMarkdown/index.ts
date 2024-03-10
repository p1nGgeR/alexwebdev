import path from "path";

export const DATA_DIR = path.join(process.cwd(), "src/data");

export const MDX_FILE_EXT = ".mdx";

export * from "./getOne";

export * from "./getAll";

export * from "./blog/postAPI";
