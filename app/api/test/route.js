import { NextResponse } from "next/server"

export const GET = async () => {
  
  return NextResponse.json({
    message: "This is a test route for NextAuth",
  })
}

export const POST = async (requiest) => {
  const data = await requiest.json();
  const {name} = data;
  return NextResponse.json({
    message:`Hello ${name}, this is a test route for NextAuth`,
  })
}