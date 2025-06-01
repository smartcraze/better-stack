import { WebsiteStatus } from "./generated/prisma";
import { PrismaClient } from "./generated/prisma";

export const prismaClient = new PrismaClient();


export { WebsiteStatus };