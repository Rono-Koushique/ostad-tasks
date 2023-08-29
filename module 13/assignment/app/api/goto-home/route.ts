import { checkEnvironment } from "@/utils/environment";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET() {
    redirect(checkEnvironment());
}
