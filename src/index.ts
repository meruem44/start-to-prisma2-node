import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true
        }
    });
    console.log(allUsers);
}

main()
.catch(e => {
    throw e
})
.finally(async () => {
    await prisma.disconnect();
});