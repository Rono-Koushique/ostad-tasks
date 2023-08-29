import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url);
    const theme = searchParams.get("scheme");

    if (!theme) {
        return NextResponse.json({ status: 400, msg: "Url parameters required" });
    }
    const response = NextResponse.json({
        status: 200,
        msg: "Cookie set",
    });
    response.cookies.set({
        name: "theme",
        value: theme,
        sameSite: "none",
        httpOnly: true,
        secure: true,
    });
    return response;
}
