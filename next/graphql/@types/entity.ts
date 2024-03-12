import { Author, Novel as PrismaNovel } from "@prisma/client";

export interface Novel extends PrismaNovel {
  authors: Author[];
}
