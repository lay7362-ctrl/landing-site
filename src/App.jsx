const features = [
  {
    title: '빠른 시작',
    desc: 'Vite 기반으로 즉시 개발 서버가 켜지고, 변경사항이 바로 반영됩니다.',
  },
  {
    title: '간단한 배포',
    desc: 'GitHub에 push 하면 Cloudflare Pages가 자동으로 빌드하고 배포합니다.',
  },
  {
    title: '가벼운 스타일링',
    desc: 'Tailwind CSS로 클래스만으로 빠르게 디자인을 완성할 수 있습니다.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold">My Site</span>
          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            문의하기
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            React + Vite로 만든
            <br />
            간단한 랜딩 페이지
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-600">
            GitHub과 Cloudflare Pages가 연동되어 있어, 코드를 push하면 자동으로
            배포됩니다.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#features"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              더 알아보기
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium transition hover:bg-slate-50"
            >
              문의하기
            </a>
          </div>
        </section>

        <section id="features" className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-center text-2xl font-semibold">주요 특징</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold">더 궁금한 점이 있으신가요?</h2>
          <p className="mt-3 text-slate-600">언제든지 편하게 연락 주세요.</p>
          <a
            href="mailto:hello@example.com"
            className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            hello@example.com
          </a>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} My Site. All rights reserved.
      </footer>
    </div>
  )
}

export default App
