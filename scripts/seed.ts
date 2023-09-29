// The `seed.ts` file is a script that is used to populate your database with initial or dummy data.
// The script typically contains a series of
// create, read, update, and delete (CRUD) operations using Prisma Client.

const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Famous People' },
        { name: 'Movies & TV' },
        { name: 'Musicians' },
        { name: 'Games' },
        { name: 'Animals' },
        { name: 'Philosophy' },
        { name: 'Scientists' },
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories', error);
  } finally {
    await db.$disconnect();
  }
}

main();
