"use server";
import { CreateUserParams } from "./index.shared";
import { prisma } from "@/lib/prisma";

export const createUser = async (userData: CreateUserParams) => {
      try {
            const user = await prisma.user.create({ data: userData });

            return user;
      } catch (e) {
            console.log(e);
            throw e;
      }
};

export const getUserShops = async (params: { clerkId: string }) => {
      try {
            const { clerkId } = params;

            const user = await prisma.user.findFirst({
                  where: {
                        clerkId,
                  },
                  include: {
                        shops: {
                              orderBy: { createdOn: "desc" },
                              include: {
                                    products: true,
                              },
                        },
                  },
            });

            return {
                  shops: user?.shops!,
            };
      } catch (e) {
            console.log(e);
            throw e;
      }
};

export const getUserProducts = async (params: { clerkId: string | null }) => {
      try {
            const { clerkId } = params;
            if (!clerkId) return [];

            const user = await prisma.user.findFirst({
                  where: {
                        clerkId,
                  },
                  include: {
                        favorites: {
                              orderBy: {
                                    createdAt: "desc",
                              },
                              include: {
                                    product: {
                                          include: {
                                                Shop: true,
                                          },
                                    },
                              },
                        },
                  },
            });

            return user?.favorites;
      } catch (e) {
            console.log(e);
            throw e;
      }
};

export const getUserInfo = async (params: { clerkId: string | null }) => {
      try {
            const { clerkId } = params;

            if (!clerkId) return null;

            const user = await prisma.user.findFirst({
                  where: {
                        clerkId,
                  },
                  include: { shops: { orderBy: { createdOn: "desc" } }, follower: true },
            });

            if (!user) return null;

            return user;
      } catch (e) {
            console.log(e);
            throw e;
      }
};
