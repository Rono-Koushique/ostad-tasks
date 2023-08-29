import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const themeCookie = req.cookies.get("theme");

    if (!themeCookie) {
        return NextResponse.json({ status: 400, msg: "Theme cookie not set" });
    }

    const response = NextResponse.json({
        status: 200,
        msg: "Cookie Received",
        data: themeCookie,
    });
    return response;
}
