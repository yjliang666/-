import Image from "next/image";
import Link from "next/link";

function getDishImageSrc(name: string) {
  // public/photos/菜品名.jpg → 访问路径为 /photos/菜品名.jpg
  return `/photos/${encodeURIComponent(name)}.jpg`;
}

const coffees = [
  {
    name: "美式咖啡",
    description: "清爽不苦，日常必备",
    price: "￥15",
  },
  {
    name: "拿铁咖啡",
    description: "奶香浓郁，拉花好看",
    price: "￥15",
  },
];

const desserts = [
  {
    name: "提拉米苏",
    description: "细腻绵软，咖啡香气与奶香交织，是很多客人的心头好。",
    price: "￥15",
  },
  {
    name: "芝士蛋糕",
    description: "醇厚芝士与清爽酸甜平衡，一块刚刚好，不会太腻。",
    price: "￥15",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 md:px-6 md:pt-10">
        <header className="flex items-center justify-between border-b border-border-subtle/60 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              YUJIE COFFEE
            </p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
              雨姐咖啡 · 菜单
            </h1>
          </div>
          <Link
            href="/"
            className="text-xs font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
          >
            返回首页
          </Link>
        </header>

        <main className="mt-8 space-y-10 md:mt-10">
          <section className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-border-subtle/80">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
                  经典咖啡
                </h2>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium text-brand">
                  每杯 15 元
                </span>
              </div>
              <ul className="space-y-3 text-sm">
                {coffees.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-muted px-3.5 py-2.5 text-zinc-700 transition hover:-translate-y-0.5 hover:bg-zinc-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-xl border border-border-subtle bg-surface">
                        <Image
                          src={getDishImageSrc(item.name)}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-zinc-900">
                          {item.name}
                        </div>
                        <p className="mt-0.5 text-xs text-zinc-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-zinc-900">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-border-subtle/80">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
                  小甜品
                </h2>
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-medium text-white">
                  咖啡的最佳搭子
                </span>
              </div>
              <ul className="space-y-3 text-sm">
                {desserts.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-muted px-3.5 py-2.5 text-zinc-700 transition hover:-translate-y-0.5 hover:bg-zinc-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-xl border border-border-subtle bg-surface">
                        <Image
                          src={getDishImageSrc(item.name)}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-[13px] font-medium text-zinc-900">
                          {item.name}
                        </div>
                        <p className="mt-0.5 text-xs text-zinc-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-zinc-900">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl bg-surface p-5 text-xs text-zinc-600 shadow-sm ring-1 ring-border-subtle/80 md:p-6">
            <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
              小贴士
            </h2>
            <ul className="mt-2 space-y-1.5">
              <li>· 所有咖啡均可根据口味微调浓度、冷热和糖度。</li>
              <li>· 如有不耐乳制品，可提前和店员沟通替换或减量牛奶。</li>
              <li>· 甜品每日新鲜制作，售完可能会暂时下架，欢迎到店询问当天状态。</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

