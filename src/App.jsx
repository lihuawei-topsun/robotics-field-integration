import { useMemo, useState } from 'react'

const EMAIL = 'li.huawei@topsunpower.cc'
const INQUIRY_URL = 'https://github.com/lihuawei-topsun/robotics-field-integration/issues/new?template=project-inquiry.yml'

const scenarios = [
  {
    id: '01',
    title: '园区与厂区巡检',
    detail: '固定路线、远程回传、异常复核',
  },
  {
    id: '02',
    title: '设备间与高风险区域',
    detail: '代替人员进入、采集现场信息',
  },
  {
    id: '03',
    title: '二次开发与联合交付',
    detail: '导航、传感器、机械臂和业务系统接口',
  },
]

const pilotSteps = [
  ['01', '现场目标'],
  ['02', '路线与检查点'],
  ['03', 'Demo / 联调'],
  ['04', '现场验收'],
]

const evidence = [
  ['已有', '安防自主导航 Demo'],
  ['可扩展', '机械臂与现场传感器'],
  ['需要确认', '地面、坡度、网络、巡检点、告警方式'],
]

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === 'down' ? 'arrow arrow--down' : 'arrow'}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M4 12h15M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到页面顶部">
        <span>LI HUAWEI</span>
        <span className="brand__muted">ROBOTICS INTEGRATION</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-button__line" />
        <span className="menu-button__line" />
        <span className="sr-only">打开导航</span>
      </button>
      <nav id="site-nav" className={open ? 'site-nav site-nav--open' : 'site-nav'} aria-label="主导航">
        <a href="#capabilities" onClick={() => setOpen(false)}>能力</a>
        <a href="#scenarios" onClick={() => setOpen(false)}>场景</a>
        <a href="#pilot" onClick={() => setOpen(false)}>试点</a>
        <a href="#contact" onClick={() => setOpen(false)}>联系</a>
      </nav>
    </header>
  )
}

function RouteLine({ number }) {
  return (
    <div className="route-line" aria-hidden="true">
      <span className="route-line__number">{number}</span>
      <span className="route-line__track" />
      <span className="route-line__node" />
    </div>
  )
}

function InquiryForm() {
  const [form, setForm] = useState({ name: '', company: '', location: '', task: '', contact: '' })
  const [copied, setCopied] = useState(false)

  const emailBody = useMemo(() => [
    `称呼：${form.name || '未填写'}`,
    `公司 / 团队：${form.company || '未填写'}`,
    `现场位置：${form.location || '未填写'}`,
    `希望机器人完成：${form.task || '未填写'}`,
    `回访联系方式：${form.contact || '未填写'}`,
  ].join('\n'), [form])

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function submit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`[现场机器人试点] ${form.company || form.name || '新询盘'}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(emailBody)}`
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="contact-layout">
      <form className="inquiry-form" onSubmit={submit}>
        <h2>把现场问题发过来</h2>
        <div className="field-grid">
          <label>
            <span>怎么称呼</span>
            <input name="name" value={form.name} onChange={update} autoComplete="name" required />
          </label>
          <label>
            <span>公司 / 团队</span>
            <input name="company" value={form.company} onChange={update} autoComplete="organization" />
          </label>
          <label>
            <span>现场在哪里</span>
            <input name="location" value={form.location} onChange={update} autoComplete="address-level1" />
          </label>
          <label>
            <span>邮箱或电话</span>
            <input name="contact" value={form.contact} onChange={update} autoComplete="email" required />
          </label>
          <label className="field--wide">
            <span>希望机器人完成什么</span>
            <textarea name="task" value={form.task} onChange={update} rows="4" required />
          </label>
        </div>
        <p className="form-note">提交后会打开你的邮件客户端，并生成完整询盘内容。</p>
        <button className="submit-button" type="submit">
          <span className="submit-button__icon"><ArrowIcon /></span>
          <span>生成询盘邮件</span>
        </button>
      </form>
      <aside className="contact-aside" aria-label="直接联系">
        <div className="contact-aside__email">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <rect x="2.5" y="4.5" width="19" height="15" stroke="currentColor" strokeWidth="1.5" />
            <path d="m3 6 9 7 9-7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <button className="copy-button" type="button" onClick={copyEmail}>{copied ? '已复制' : '复制邮箱'}</button>
        <a className="github-inquiry" href={INQUIRY_URL} target="_blank" rel="noreferrer">
          在 GitHub 填写项目询盘 <ArrowIcon />
        </a>
        <div className="contact-aside__note">
          <p>我们不代表宇树官方。</p>
          <p>方案与能力以双方确认的现场测试为准。</p>
        </div>
      </aside>
    </div>
  )
}

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <h1 id="hero-title">让机器人先进入<br />危险与重复的现场</h1>
            <p>基于宇树 G1 / Go2-W 的自主导航、安防巡检与机械臂集成。已有可演示系统，从现场目标开始做二次开发。</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contact">描述你的现场 <ArrowIcon /></a>
              <a className="button button--link" href="#capabilities">查看现有能力 <ArrowIcon /></a>
            </div>
          </div>
          <figure className="hero__media">
            <img src="assets/robot-lab.png" alt="人形机器人与轮足四足机器人在明亮实验室中的开发示意图" fetchPriority="high" />
            <figcaption>开发平台视觉示意，并非现场实拍或具体交付配置。</figcaption>
          </figure>
        </section>

        <section className="capabilities section" id="capabilities" aria-labelledby="capability-title">
          <RouteLine number="01" />
          <div className="section-heading section-heading--inline">
            <h2 id="capability-title">现在能演示什么</h2>
            <p>具体能力以现场测试与配置为准。</p>
          </div>
          <div className="capability-list">
            <div><span>01</span><strong>自主导航</strong><ArrowIcon /></div>
            <div><span>02</span><strong>安防场景 Demo</strong><ArrowIcon /></div>
            <div><span>03</span><strong>机械臂可集成</strong><ArrowIcon /></div>
          </div>
        </section>

        <section className="scenarios section" id="scenarios" aria-labelledby="scenario-title">
          <RouteLine number="02" />
          <div className="section-heading section-heading--wide">
            <h2 id="scenario-title">先卖一个可验证的现场结果</h2>
            <p>不从“买一台机器人”开始，而从一条路线、一个检查点、一次告警闭环开始。</p>
          </div>
          <div className="scenario-list">
            {scenarios.map((scenario) => (
              <article key={scenario.id}>
                <span>{scenario.id}</span>
                <h3>{scenario.title}</h3>
                <p>{scenario.detail}</p>
              </article>
            ))}
          </div>
          <figure className="field-media">
            <img src="assets/industrial-patrol.png" alt="四足机器人在工业场地路线中执行巡检的视觉示意" loading="lazy" />
            <figcaption>工业巡检场景视觉示意，不代表已落地客户案例。</figcaption>
          </figure>
        </section>

        <section className="pilot section" id="pilot" aria-labelledby="pilot-title">
          <div className="section-heading section-heading--wide">
            <span className="section-index">02 / PILOT</span>
            <h2 id="pilot-title">一次试点怎么推进</h2>
          </div>
          <ol className="pilot-steps">
            {pilotSteps.map(([number, label]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{label}</strong>
              </li>
            ))}
          </ol>
          <a className="text-link" href="#contact">讨论一个试点 <ArrowIcon /></a>
        </section>

        <section className="evidence section" aria-labelledby="evidence-title">
          <RouteLine number="03" />
          <div className="section-heading section-heading--wide">
            <h2 id="evidence-title">你带来现场，我们带来可运行的机器人</h2>
          </div>
          <dl className="evidence-list">
            {evidence.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
                <ArrowIcon />
              </div>
            ))}
          </dl>
        </section>

        <section className="contact" id="contact" aria-label="联系与询盘">
          <InquiryForm />
          <div className="contact-route" aria-hidden="true"><span /></div>
          <footer>
            <span>Independent robotics integration / China</span>
            <span>© {new Date().getFullYear()} Li Huawei</span>
          </footer>
        </section>
      </main>
    </div>
  )
}
