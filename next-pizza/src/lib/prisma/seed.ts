import {prisma} from "@/lib/prisma/prisma";
import {hashSync} from "bcrypt";

async function up(){

  await prisma.user.createMany({data:[
      {
      fullname: "User",
      email: "user@use.ru",
      password: hashSync('11111',10),
      // role: {status: "DEFAULT"}
      },

      {fullname: "Admin",
        email: "admin@use.ru",
        password: hashSync('11111',10),
        // role: {status: "ADMIN"}
      }
    ]})
}
async function down(){
  await prisma.$executeRaw`TRUNCATE TABLE "USER" RESTART IDENTITY CASCADE`;
}
async function main(){
try{
  await down();
  await up();

}catch(e){
  console.error(e)
}
}
main().then(async ()=> {
  await prisma.$disconnect();
})
.catch(async (e)=> {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
})
