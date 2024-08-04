import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma/prisma";

export async function GET(){
  const users = await prisma.user.findMany();
  const a = await prisma.user;
  return NextResponse.json(users)
}
export async function POST(req: NextRequest){
  const data = await req.json();
  const user = await prisma.user.create({
    data
  });
  return NextResponse.json(user);

}