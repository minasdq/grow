import { Context } from "./types";

const resolvers = {
  Query: {
    novels: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findMany();
    },
    novel: async (parent: any, args: { id: string }, context: Context) => {
      return await context.prisma.novel.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    addNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.create({
        data: {
          title: args.title,
          image: args.image,
        },
      });
    },
    updateNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          image: args.image,
        },
      });
    },
    deleteNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.delete({
        where: {
          id: args.id,
        },
      });
    },
    addAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.create({
        data: {
          name: args.name,
          novelId: args.novelId,
        },
      });
    },
  },
  Novel: {
    authors: (parent: any, args: any, context: Context) => {
      return context.prisma.author.findMany({
        where: {
          novelId: parent.id,
        },
      });
    },
  },
};

export default resolvers;
