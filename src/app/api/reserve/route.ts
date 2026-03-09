import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const supabase = getSupabase();
    const body = await request.json();
    const { date, slot, partySize, name, phone, email, notes } = body;

    if (!date || !slot || !partySize || !name || !phone) {
      return NextResponse.json(
        { error: "请填写：到店日期、时间段、人数、姓名、手机号" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.from("reservations").insert({
      date,
      slot,
      party_size: Number(partySize),
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : null,
      notes: notes ? String(notes).trim() : null,
      status: "pending",
    }).select("id, date, slot, name, phone, created_at").single();

    if (error) {
      console.error("reserve insert error:", error);
      return NextResponse.json(
        { error: "预约提交失败，请稍后再试或致电 182-1857-3378" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      id: data.id,
      message: "预约已提交，我们会尽快与你确认",
    });
  } catch (e) {
    console.error("reserve error:", e);
    return NextResponse.json(
      { error: "预约提交失败，请稍后再试或致电 182-1857-3378" },
      { status: 500 }
    );
  }
}
