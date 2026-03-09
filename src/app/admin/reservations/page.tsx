"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Reservation = {
  id: string;
  date: string;
  slot: string;
  party_size: number;
  name: string;
  phone: string;
  notes: string | null;
  status: string;
  created_at: string;
};

export default function AdminReservationsPage() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<Reservation[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filterDate, setFilterDate] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!password.trim()) return;
    setToken(password);
    setError("");
  }

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    const url = filterDate
      ? `/api/admin/reservations?date=${encodeURIComponent(filterDate)}`
      : "/api/admin/reservations";
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => {
        if (r.status === 401) {
          setToken(null);
          setError("密码错误");
          return null;
        }
        return r.json();
      })
      .then((json) => {
        if (json && json.data) setData(json.data);
        else if (json?.error) setError(json.error);
      })
      .catch(() => setError("加载失败"))
      .finally(() => setLoading(false));
  }, [token, filterDate]);

  function handleLogout() {
    setToken(null);
    setPassword("");
    setData(null);
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 md:px-6 md:pt-10">
        <header className="flex items-center justify-between border-b border-border-subtle/60 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              YUJIE COFFEE · ADMIN
            </p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
              预约管理
            </h1>
          </div>
          {token ? (
            <button
              type="button"
              onClick={handleLogout}
              className="text-xs font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
            >
              退出
            </button>
          ) : (
            <Link
              href="/"
              className="text-xs font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
            >
              返回首页
            </Link>
          )}
        </header>

        <main className="mt-8 space-y-6">
          {!token ? (
            <form
              onSubmit={handleLogin}
              className="max-w-xs space-y-3 rounded-3xl bg-surface p-6 shadow-sm ring-1 ring-border-subtle/80"
            >
              <label htmlFor="admin-pw" className="text-xs font-medium text-zinc-800">
                管理员密码
              </label>
              <input
                id="admin-pw"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="输入 .env 中的 ADMIN_SECRET"
                className="h-9 w-full rounded-xl border border-border-subtle bg-muted px-3 text-xs text-zinc-800 placeholder:text-zinc-400 outline-none transition focus:border-zinc-900 focus:bg-surface focus:ring-1 focus:ring-zinc-900"
              />
              {error && (
                <p className="text-xs font-medium text-red-600">{error}</p>
              )}
              <button
                type="submit"
                className="inline-flex h-9 w-full items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white shadow-sm transition hover:bg-zinc-800"
              >
                登录
              </button>
            </form>
          ) : (
            <>
              <div className="flex flex-wrap items-center gap-3">
                <label className="text-xs font-medium text-zinc-700">
                  按日期筛选：
                </label>
                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="h-8 rounded-lg border border-border-subtle bg-muted px-2 text-xs text-zinc-800 outline-none transition focus:border-zinc-900"
                />
                <span className="text-xs text-zinc-500">
                  {filterDate ? `仅显示 ${filterDate}` : "显示全部"}
                </span>
              </div>

              {loading ? (
                <p className="text-sm text-zinc-500">加载中…</p>
              ) : error ? (
                <p className="text-sm font-medium text-red-600">{error}</p>
              ) : data && data.length > 0 ? (
                <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-border-subtle bg-muted/50">
                        <th className="px-4 py-3 font-medium text-zinc-800">日期</th>
                        <th className="px-4 py-3 font-medium text-zinc-800">时段</th>
                        <th className="px-4 py-3 font-medium text-zinc-800">人数</th>
                        <th className="px-4 py-3 font-medium text-zinc-800">姓名</th>
                        <th className="px-4 py-3 font-medium text-zinc-800">电话</th>
                        <th className="px-4 py-3 font-medium text-zinc-800">备注</th>
                        <th className="px-4 py-3 font-medium text-zinc-800">状态</th>
                        <th className="px-4 py-3 font-medium text-zinc-800">提交时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((r) => (
                        <tr
                          key={r.id}
                          className="border-b border-border-subtle/60 last:border-0"
                        >
                          <td className="px-4 py-3 text-zinc-700">{r.date}</td>
                          <td className="px-4 py-3 text-zinc-700">{r.slot}</td>
                          <td className="px-4 py-3 text-zinc-700">{r.party_size} 人</td>
                          <td className="px-4 py-3 font-medium text-zinc-900">{r.name}</td>
                          <td className="px-4 py-3">
                            <a
                              href={`tel:${r.phone}`}
                              className="text-zinc-700 underline-offset-2 hover:underline"
                            >
                              {r.phone}
                            </a>
                          </td>
                          <td className="px-4 py-3 text-zinc-500">{r.notes || "—"}</td>
                          <td className="px-4 py-3">
                            <span
                              className={
                                r.status === "confirmed"
                                  ? "rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700"
                                  : r.status === "cancelled"
                                    ? "rounded-full bg-zinc-200 px-2 py-0.5 text-[10px] font-medium text-zinc-600"
                                    : "rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700"
                              }
                            >
                              {r.status === "pending" && "待确认"}
                              {r.status === "confirmed" && "已确认"}
                              {r.status === "cancelled" && "已取消"}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-zinc-500">
                            {new Date(r.created_at).toLocaleString("zh-CN", {
                              dateStyle: "short",
                              timeStyle: "short",
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="rounded-2xl border border-border-subtle bg-surface p-8 text-center text-sm text-zinc-500">
                  暂无预约记录
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
