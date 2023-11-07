import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// this function simply return the server info if passed in the serverID
// we need to find better ways to pass info here
export const GET = async (req: NextRequest) => {
  try {
    const { serverId } = await req.json();
    const server = await db.server.findUnique({
      where: {
        id: serverId,
      },
    });
    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVERSID_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
