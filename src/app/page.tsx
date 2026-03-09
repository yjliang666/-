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
    description: "细腻绵软，咖啡香气与奶香交织",
    price: "￥15",
  },
  {
    name: "芝士蛋糕",
    description: "醇厚芝士与清爽酸甜的平衡一口到位",
    price: "￥15",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-8 md:px-6 md:pt-10">
        {/* 顶部导航 */}
        <header className="flex items-center justify-between border-b border-border-subtle/60 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand/10 text-sm font-semibold text-brand">
              雨
            </div>
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                YUJIE COFFEE
              </div>
              <div className="text-sm font-medium text-zinc-900">
                汕头大学东海岸校区
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-medium text-zinc-600 md:flex">
            <Link
              href="#menu"
              className="transition-colors hover:text-zinc-900"
            >
              菜单 Menu
            </Link>
            <Link
              href="/reserve"
              className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md"
            >
              在线预约
            </Link>
          </nav>
        </header>

        <main className="mt-8 flex flex-1 flex-col gap-14 md:mt-10 md:gap-16">
          {/* Hero 区域 */}
          <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                MINIMAL COFFEE BAR · EAST COAST CAMPUS
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                雨姐咖啡，
                <br />
                汕大东海岸的极简风小宇宙。
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-600 md:text-base">
                早上八点到晚上十点，随时都有一杯刚好的咖啡等你。
                我们用干净利落的线条、柔和的光线和细节质感，留住你日常里的小片刻。
              </p>
              <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center">
                <Link
                  href="/reserve"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md"
                >
                  立即预约座位
                </Link>
                <Link
                  href="#menu"
                  className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-surface px-5 py-2.5 text-xs font-medium text-zinc-800 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-zinc-900 hover:text-white"
                >
                  看看今天喝什么
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 text-[11px] text-zinc-500">
                <span className="rounded-full bg-muted px-3 py-1">
                  汕头大学东海岸校区
                </span>
                <span className="rounded-full bg-muted px-3 py-1">
                  营业时间 08:00–22:00
                </span>
                <span className="rounded-full bg-muted px-3 py-1">
                  Tel 182-1857-3378
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-white via-white to-zinc-100" />
              <div className="relative overflow-hidden rounded-[28px] border border-border-subtle bg-surface shadow-sm">
                <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
                  <span className="text-xs font-medium text-zinc-800">
                    今日气氛：适合认真喝一杯
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    雨姐咖啡 · YUJIE COFFEE
                  </span>
                </div>
                <div className="grid gap-4 p-4 sm:grid-cols-[1.2fr_0.9fr]">
                  <div className="overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src="/photos/hero-coffee.jpg"
                      alt="雨姐咖啡店内环境与咖啡"
                      width={640}
                      height={480}
                      className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-3 text-xs text-zinc-600">
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                        SIGNATURE
                      </div>
                      <div className="text-sm font-semibold text-zinc-900">
                        美式 / 拿铁 · 搭一块小甜品
                      </div>
                      <p className="leading-relaxed">
                        经典咖啡与小甜品，全部 15 元起。早八课前、
                        晚自习后，都有一杯刚刚好的醒神/收尾。
                      </p>
                    </div>
                    <div className="space-y-1.5 rounded-2xl bg-muted px-3 py-2.5">
                      <div className="flex items-center justify-between text-[11px] text-zinc-500">
                        <span>今日推荐</span>
                        <span>只需 15 元 / 杯</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-zinc-900">
                            美式咖啡
                          </span>
                          <span className="text-zinc-500">
                            清爽不苦 · 日常首选
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-zinc-900">
                            拿铁咖啡
                          </span>
                          <span className="text-zinc-500">
                            奶香浓郁 · 拉花好看
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 菜单预览 */}
          <section id="menu" className="space-y-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  SIGNATURE MENU
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
                  先选一杯咖啡，再搭一块小甜品。
                </h2>
              </div>
              <Link
                href="/menu"
                className="hidden text-xs font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline md:inline-flex"
              >
                查看完整菜单
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-border-subtle/80">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                    经典咖啡
                  </h3>
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
                        <div className="h-10 w-10 overflow-hidden rounded-xl border border-border-subtle bg-surface">
                          <Image
                            src={getDishImageSrc(item.name)}
                            alt={item.name}
                            width={80}
                            height={80}
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
                  <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                    小甜品
                  </h3>
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
                        <div className="h-10 w-10 overflow-hidden rounded-xl border border-border-subtle bg-surface">
                          <Image
                            src={getDishImageSrc(item.name)}
                            alt={item.name}
                            width={80}
                            height={80}
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
            </div>
          </section>

          {/* 预约引导 */}
          <section className="grid gap-6 rounded-3xl bg-surface p-6 shadow-sm ring-1 ring-border-subtle/80 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:p-7">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                RESERVATION
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
                周末人多，提前在网上占个座。
              </h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                为了让你少打几个电话，也让我们在忙碌时段少漏接你的来电，
                我们会开放在线预约座位。简单填写到店时间和人数，店里确认后会以短信或电话与你核对。
              </p>
              <div className="flex flex-col gap-3 text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>营业时间：每日 08:00 – 22:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>建议提前至少 2 小时预约周五晚、周末黄金时段。</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/reserve"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md"
                >
                  前往在线预约
                </Link>
                <a
                  href="tel:18218573378"
                  className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-muted px-5 py-2.5 text-xs font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-transparent hover:bg-zinc-900 hover:text-white"
                >
                  紧急情况直接致电：182-1857-3378
                </a>
              </div>
            </div>
            <div className="space-y-3 rounded-2xl bg-muted p-4 text-xs text-zinc-600">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                  HOW IT WORKS
                </span>
                <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-[10px] font-medium text-white">
                  BETA · 试运行
                </span>
              </div>
              <ol className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-medium text-white">
                    1
                  </span>
                  <div>
                    <div className="text-[13px] font-medium text-zinc-900">
                      在线提交到店时间与人数
                    </div>
                    <p className="text-xs text-zinc-500">
                      简单填写名字、联系方式和预计到店时段，我们会根据店内座位情况安排。
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-medium text-white">
                    2
                  </span>
                  <div>
                    <div className="text-[13px] font-medium text-zinc-900">
                      店员确认后与你联系
                    </div>
                    <p className="text-xs text-zinc-500">
                      试运行阶段，我们会以短信或电话确认预约，避免信息遗漏。
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-medium text-white">
                    3
                  </span>
                  <div>
                    <div className="text-[13px] font-medium text-zinc-900">
                      到店报名字或手机号即可入座
                    </div>
                    <p className="text-xs text-zinc-500">
                      到店后跟店员报“预约人姓名 / 手机尾号”即可入座，尽量为你保留舒适位置。
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* 门店信息 */}
          <section className="mt-4 grid gap-6 text-xs text-zinc-600 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="space-y-2 rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-border-subtle/80">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                到店信息 · 雨姐咖啡
              </h3>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  <span>地址：汕头大学东海岸校区</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  <span>营业时间：每日 08:00 – 22:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                  <span>
                    电话：{" "}
                    <a
                      href="tel:18218573378"
                      className="font-medium text-zinc-900 underline-offset-4 hover:underline"
                    >
                      182-1857-3378
                    </a>
                  </span>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-zinc-500">
                建议搜索“雨姐咖啡 汕头大学东海岸校区”导航，或从东海岸校区主门步行 3–5
                分钟即可到店。
              </div>
            </div>

            <div className="space-y-3 rounded-3xl bg-surface p-5 shadow-sm ring-1 ring-border-subtle/80">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                  NOTES
                </span>
                <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] text-zinc-500">
                  适合拍照打卡 / 安静自习
                </span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-600">
                <li>· 店内提供插座与稳定 Wi‑Fi，适合长时间学习与工作。</li>
                <li>· 周末及考试周晚间人较多，推荐提前预约或错峰到店。</li>
                <li>· 欢迎拍照打卡，如需商拍或团体包场请提前与店员沟通。</li>
              </ul>
            </div>
          </section>
        </main>

        <footer className="mt-10 border-t border-border-subtle/60 pt-4 text-[11px] text-zinc-500">
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} 雨姐咖啡 · Yujie Coffee</span>
            <span className="text-[10px]">
              Designed with minimalism in mind · 极简美学与细节控的小咖啡馆
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
