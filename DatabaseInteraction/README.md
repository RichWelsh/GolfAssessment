Database Interaction

1.	Import the Prisma Client module: Import the http module: const http = require('http');
2.	Define createDocuments() function
    a.	Wrapper for Prisma client “create” function
3.	Define getDocuments() function
    a.	Wrapper for Prisma client “findMany()”
4.	Call “createDocument ()” to create document record
5.	Call “getDocuments()” to list all document records
6.	Data Model
    a.	Data model resides in pricma/schema.prisma
7.	Migrations
    a.	“npx prisma migrate dev --name init” will create db tables
    b.	Connection string is located in “.env” & is set for a local SQL server



