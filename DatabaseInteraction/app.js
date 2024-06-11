//Database Interaction

//Import the Prisma Client module
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

//Wrapper for Prisma client “create” function
async function createDocuments() {
const user = await prisma.document.create({
    data: {
      name: 'Quick Brown Fox II',
      body: 'The quick brown fox jumps over the lazy dog',
      notes: 'simple record'
    },
  })
}

//create document record
createDocuments()

//Wrapper for Prisma client “findMany()”
async function getDocuments() {
   const documents = await prisma.document.findMany(); //call to DB and get all documents
   console.log(documents); //logs all documents to console
}

//list all document records
getDocuments()