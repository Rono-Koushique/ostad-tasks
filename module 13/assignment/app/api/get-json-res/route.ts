import { NextResponse } from "next/server";

export async function GET() {
    const response = NextResponse.json({
        message: "Welcome to our API!",
        version: "1.0",
    });
    return response;
}
