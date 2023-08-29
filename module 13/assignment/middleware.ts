import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
    const token = req.headers.get("Authorization");

    const bearerToken = `Bearer ${token}`;
    req.headers.set("Authorization", bearerToken);
    NextResponse.next();
}
