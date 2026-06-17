const categories = [
  { label: '뉴스스탠드' },
  { label: '콘텐츠' },
  { label: '엔터' },
  { label: '스포츠', badge: 'LIVE' },
  { label: '게임' },
  { label: '쇼핑' },
  { label: '추천글' },
]

const channels = [
  '데일리뉴스',
  '위클리타임즈',
  '포커스인사이트',
  '라이프스타일',
  '테크리포트',
  '머니매거진',
  '컬처라인',
  '헬스앤뷰티',
  '트래블북',
  '스포츠피플',
]

const products = [
  { name: '무선 이어폰', price: '49,000원' },
  { name: '미니 가습기', price: '23,000원' },
  { name: '캔버스 백팩', price: '38,000원' },
  { name: '블루투스 스피커', price: '59,000원' },
  { name: '데일리 다이어리', price: '12,000원' },
]

const widgets = [
  { title: '찜한 글', desc: '관심 있는 글을 모아보세요' },
  { title: '오늘의 추천', desc: '에디터가 고른 인기글' },
  { title: '인기 검색어', desc: '지금 가장 많이 찾는 키워드' },
  { title: '이번주 화제', desc: '커뮤니티에서 뜨는 이야기' },
]

function IconButton({ children }) {
  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
    >
      {children}
    </button>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#f6f1e7] pb-16 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 pt-5">
        {/* 상단 검색바 */}
        <div className="flex items-center gap-3">
          <IconButton>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </IconButton>

          <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-2 py-1.5 shadow-sm">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
              커
            </span>
            <input
              type="text"
              placeholder="검색어를 입력해 주세요"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
            <button
              type="button"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
              </svg>
            </button>
          </div>

          <div className="hidden items-center gap-1 sm:flex">
            <IconButton>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path strokeLinecap="round" d="M3 7l9 6 9-6" />
              </svg>
            </IconButton>
            <IconButton>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </IconButton>
            <IconButton>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path strokeLinecap="round" d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
              </svg>
            </IconButton>
          </div>
        </div>

        {/* 프로모션 영역 */}
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-[1fr_280px]">
          <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-200 text-lg font-semibold text-slate-500">
              민
            </div>
            <div className="flex-1">
              <p className="font-medium">민지님이 방금 라이브를 시작했어요</p>
              <p className="mt-0.5 text-sm text-slate-500">실시간으로 이야기를 나눠보세요</p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              지금 보기
            </button>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-5 text-white">
            <p className="text-sm font-semibold opacity-90">EVENT</p>
            <p className="mt-1 text-lg font-bold leading-snug">
              가입 첫 달, 프리미엄
              <br />
              무료로 즐기기
            </p>
            <button
              type="button"
              className="mt-3 self-start rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/25"
            >
              지금 확인하기
            </button>
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div className="mt-5 flex items-center gap-5 overflow-x-auto text-sm font-medium text-slate-600">
          {categories.map((c) => (
            <button
              key={c.label}
              type="button"
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap py-1 transition hover:text-slate-900"
            >
              {c.label}
              {c.badge && (
                <span className="rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  {c.badge}
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            2026 커뮤니티 어워드
          </span>
        </div>

        {/* 메인 + 사이드바 */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[1fr_280px]">
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-500">오늘의 인기 채널</h2>
              <div className="mt-4 grid grid-cols-5 gap-3 sm:grid-cols-10">
                {channels.map((c) => (
                  <div key={c} className="flex flex-col items-center gap-1.5">
                    <div className="flex aspect-square w-full items-center justify-center rounded-full bg-slate-100 text-[11px] font-semibold text-slate-500">
                      {c.slice(0, 2)}
                    </div>
                    <span className="w-full truncate text-center text-[11px] text-slate-500">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-500">쇼핑</h2>
                <a href="#" className="text-xs font-medium text-slate-400 hover:text-slate-600">
                  쇼핑 더보기 →
                </a>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {products.map((p) => (
                  <div key={p.name} className="text-sm">
                    <div className="aspect-square rounded-xl bg-slate-100" />
                    <p className="mt-2 truncate text-slate-700">{p.name}</p>
                    <p className="font-semibold">{p.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-emerald-600 p-5 text-center text-white">
              <p className="font-semibold">커뮤니티 로그인</p>
              <p className="mt-1 text-xs text-emerald-50">로그인하고 맞춤 콘텐츠를 받아보세요</p>
              <button
                type="button"
                className="mt-3 w-full rounded-full bg-white py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                로그인
              </button>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold">신규 가입 혜택</p>
              <p className="mt-1 text-xs text-slate-500">지금 가입하면 포인트 5,000원 지급</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold">내 동네 인기 글</p>
              <p className="mt-1 text-xs text-slate-500">우리 동네 글 427건이 올라왔어요</p>
            </div>
          </div>
        </div>

        {/* 하단 위젯 */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {widgets.map((w) => (
            <div key={w.title} className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold">{w.title}</p>
              <p className="mt-1 text-xs text-slate-500">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} 커뮤니티. All rights reserved.
      </footer>
    </div>
  )
}

export default App
