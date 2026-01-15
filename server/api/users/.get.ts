import { prisma } from "../../db/prisma"
export default defineEventHandler(async (event) => {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.log('All users:', JSON.stringify(allUsers, null, 2))

  prisma.$disconnect();
  return allUsers;
})