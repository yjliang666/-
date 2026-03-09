"use client";

import Link from "next/link";
import { useState } from "react";

export default function ReservePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = {
      date: fd.get("date"),
      slot: fd.get("slot"),
      partySize: fd.get("partySize"),
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email") || undefined,
      notes: fd.get("notes") || undefined,
    };
    if (!body.date || !body.slot || !body.partySize || !body.name || !body.phone) {
      setStatus("error");
      setMessage("请填写：到店日期、时间段、人数、姓名、手机号");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(json.error || "提交失败");
        return;
      }
      setStatus("success");
      setMessage(json.message || "预约已提交，我们会尽快与你确认");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("网络异常，请稍后再试或致电 182-1857-3378");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 md:px-6 md:pt-10">
        <header className="flex items-center justify-between border-b border-border-subtle/60 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              YUJIE COFFEE
            </p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
              在线预约 · 雨姐咖啡
            </h1>
          </div>
          <Link
            href="/"
            className="text-xs font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
          >
            返回首页
          </Link>
        </header>

        <main className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <section className="space-y-5 rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-border-subtle/80 md:p-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                RESERVATION FORM
              </p>
              <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
                填写以下信息，帮你保留一个安静的位置。
              </h2>
              <p className="text-xs leading-relaxed text-zinc-600">
                表单提交后，预约信息会发送到店里进行人工确认。如遇高峰满位或临时调整，我们会以短信或电话与你沟通。
              </p>
              {status === "success" && (
                <div className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800">
                  {message}
                </div>
              )}
              {status === "error" && (
                <div className="rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-800">
                  {message}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="date"
                    className="text-xs font-medium text-zinc-800"
                  >
                    到店日期
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="h-9 w-full rounded-xl border border-border-subtle bg-muted px-3 text-xs text-zinc-800 outline-none transition focus:border-zinc-900 focus:bg-surface focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="slot"
                    className="text-xs font-medium text-zinc-800"
                  >
                    预计到店时间段
                  </label>
                  <select
                    id="slot"
                    name="slot"
                    className="h-9 w-full rounded-xl border border-border-subtle bg-muted px-3 text-xs text-zinc-800 outline-none transition focus:border-zinc-900 focus:bg-surface focus:ring-1 focus:ring-zinc-900"
                  >
                    <option value="">选择一个时间段</option>
                    <option value="08:00-10:00">08:00 – 10:00</option>
                    <option value="10:00-12:00">10:00 – 12:00</option>
                    <option value="12:00-14:00">12:00 – 14:00</option>
                    <option value="14:00-17:00">14:00 – 17:00</option>
                    <option value="17:00-20:00">17:00 – 20:00</option>
                    <option value="20:00-22:00">20:00 – 22:00</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="partySize"
                    className="text-xs font-medium text-zinc-800"
                  >
                    预计人数
                  </label>
                  <select
                    id="partySize"
                    name="partySize"
                    className="h-9 w-full rounded-xl border border-border-subtle bg-muted px-3 text-xs text-zinc-800 outline-none transition focus:border-zinc-900 focus:bg-surface focus:ring-1 focus:ring-zinc-900"
                  >
                    <option value="">选择人数</option>
                    {Array.from({ length: 8 }).map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1} 人
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-zinc-800"
                  >
                    预约人姓名
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="用于到店核对"
                    className="h-9 w-full rounded-xl border border-border-subtle bg-muted px-3 text-xs text-zinc-800 placeholder:text-zinc-400 outline-none transition focus:border-zinc-900 focus:bg-surface focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs font-medium text-zinc-800"
                  >
                    手机号
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="用于确认预约"
                    className="h-9 w-full rounded-xl border border-border-subtle bg-muted px-3 text-xs text-zinc-800 placeholder:text-zinc-400 outline-none transition focus:border-zinc-900 focus:bg-surface focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="notes"
                    className="text-xs font-medium text-zinc-800"
                  >
                    备注（可选）
                  </label>
                  <input
                    id="notes"
                    name="notes"
                    type="text"
                    placeholder="如需靠窗位 / 插座 / 安静区域等"
                    className="h-9 w-full rounded-xl border border-border-subtle bg-muted px-3 text-xs text-zinc-800 placeholder:text-zinc-400 outline-none transition focus:border-zinc-900 focus:bg-surface focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-10 w-full items-center justify-center rounded-full bg-zinc-900 px-5 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md disabled:opacity-60 disabled:hover:translate-y-0 md:w-auto"
              >
                {status === "loading" ? "提交中…" : "提交预约"}
              </button>
            </form>
          </section>

          <aside className="space-y-4 rounded-3xl bg-surface p-5 text-xs text-zinc-600 shadow-sm ring-1 ring-border-subtle/80 md:p-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                QUICK CONTACT
              </span>
              <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] text-zinc-500">
                遇到急事请直接致电
              </span>
            </div>
            <div className="space-y-2">
              <p>
                紧急情况（例如 30
                分钟内临时到店、需要马上确认位置等），建议直接致电店里：
              </p>
              <p className="text-sm font-medium text-zinc-900">
                电话：{" "}
                <a
                  href="tel:18218573378"
                  className="underline-offset-4 hover:underline"
                >
                  182-1857-3378
                </a>
              </p>
              <p>
                后续接入完整预约系统后，你可以在这里直接看到预约成功提示和规则说明，店员也可以在后台一目了然地看到每天每个时段的预约情况。
              </p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

