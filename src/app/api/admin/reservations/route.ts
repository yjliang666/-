import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace(/^Bearer\s+/i, "");
    const secret = process.env.ADMIN_SECRET;

    if (!secret || token !== secret) {
      return NextResponse.json({ error: "未授权" }, { status: 401 });
    }

    const supabase = createAdminClient();
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    let query = supabase
      .from("reservations")
      .select("id, date, slot, party_size, name, phone, notes, status, created_at")
      .order("date", { ascending: true })
      .order("slot", { ascending: true });

    if (date) {
      query = query.eq("date", date);
    }

    const { data, error } = await query;

    if (error) {
      console.error("admin reservations error:", error);
      return NextResponse.json(
        { error: "获取预约列表失败" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (e) {
    console.error("admin error:", e);
    return NextResponse.json({ error: "服务器错误" }, { status: 500 });
  }
}
