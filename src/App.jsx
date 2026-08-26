import { useEffect, useMemo, useState } from 'react'

const EMAIL = 'li.huawei@topsunpower.cc'
const INQUIRY_URL = 'https://github.com/lihuawei-topsun/robotics-field-integration/issues/new?template=project-inquiry.yml'
const PDF_URL = 'assets/unitree-g1-go2w-integration-one-pager.pdf'
const INSPECTION_GUIDE_URL = 'industrial-inspection-robot-selection.html'

const content = {
  zh: {
    pageTitle: '李华为｜宇树 G1 / Go2-W 现场机器人二次开发',
    pageDescription: '基于宇树 G1 与 Go2-W 的自主导航、安防巡检、机械臂与现场机器人二次开发。已有安防自主导航 Demo，可从一个现场试点开始。',
    top: '回到页面顶部',
    menu: '打开导航',
    navLabel: '主导航',
    nav: ['能力', '场景', '试点', '联系'],
    languageAction: 'EN',
    languageLabel: 'Switch to English',
    hero: {
      title: <>让机器人先进入<br />危险与重复的现场</>,
      body: '基于宇树 G1 / Go2-W 的自主导航、安防巡检与机械臂集成。已有可演示系统，从现场目标开始做二次开发。',
      primary: '描述你的现场',
      secondary: '查看现有能力',
      alt: '人形机器人与轮足四足机器人在明亮实验室中的开发示意图',
      caption: '开发平台视觉示意，并非现场实拍或具体交付配置。',
      meta: [['PLATFORM', 'G1 + GO2-W'], ['MODE', 'FIELD INTEGRATION'], ['DEMO', 'AVAILABLE']],
    },
    capabilities: {
      heading: '现在能演示什么',
      note: '具体能力以现场测试与配置为准。',
      items: ['自主导航', '安防场景 Demo', '机械臂可集成'],
    },
    scenarios: {
      heading: '先卖一个可验证的现场结果',
      intro: '不从“买一台机器人”开始，而从一条路线、一个检查点、一次告警闭环开始。',
      items: [
        ['园区与厂区巡检', '固定路线、远程回传、异常复核'],
        ['设备间与高风险区域', '代替人员进入、采集现场信息'],
        ['二次开发与联合交付', '导航、传感器、机械臂和业务系统接口'],
      ],
      alt: '四足机器人在工业场地路线中执行巡检的视觉示意',
      caption: '工业巡检场景视觉示意，不代表已落地客户案例。',
      routeLabel: '路线',
      checkpointLabel: '检查点',
    },
    pilot: {
      heading: '一次试点怎么推进',
      steps: ['现场目标', '路线与检查点', 'Demo / 联调', '现场验收'],
      cta: '讨论一个试点',
    },
    evidence: {
      heading: '你带来现场，我们带来可运行的机器人',
      items: [
        ['已有', '安防自主导航 Demo'],
        ['可扩展', '机械臂与现场传感器'],
        ['需要确认', '地面、坡度、网络、巡检点、告警方式'],
      ],
    },
    contact: {
      aria: '联系与询盘',
      heading: '把现场问题发过来',
      fields: {
        name: '怎么称呼',
        company: '公司 / 团队',
        location: '现场在哪里',
        contact: '邮箱或电话',
        task: '希望机器人完成什么',
      },
      empty: '未填写',
      subject: '现场机器人试点',
      newInquiry: '新询盘',
      emailLabels: ['称呼', '公司 / 团队', '现场位置', '希望机器人完成', '回访联系方式'],
      formNote: '提交后会打开你的邮件客户端，并生成完整询盘内容。',
      submit: '生成询盘邮件',
      direct: '直接联系',
      copied: '已复制',
      copy: '复制邮箱',
      github: '在 GitHub 填写项目询盘',
      pdf: '下载能力一页纸',
      inspectionGuide: '工业质检选型指南',
      disclaimer: ['我们不代表宇树官方。', '方案与能力以双方确认的现场测试为准。'],
    },
  },
  en: {
    pageTitle: 'Li Huawei | Unitree G1 / Go2-W Robotics Integration',
    pageDescription: 'Real-hardware secondary development for Unitree G1 and Go2-W: autonomous navigation, security patrol, arm and sensor integration, starting from a verifiable field pilot.',
    top: 'Back to top',
    menu: 'Open navigation',
    navLabel: 'Main navigation',
    nav: ['Capabilities', 'Scenarios', 'Pilot', 'Contact'],
    languageAction: '中文',
    languageLabel: '切换到中文',
    hero: {
      title: <>Robots enter first.<br />Dangerous, repetitive sites.</>,
      body: 'Real-hardware secondary development for Unitree G1 and Go2-W: autonomous navigation, security patrol, arm and sensor integration. Start with a field objective and a working demo.',
      primary: 'Describe your site',
      secondary: 'See current capabilities',
      alt: 'Illustrative humanoid and wheeled quadruped development robots in a bright lab',
      caption: 'Development-platform illustration, not a customer site or a delivery configuration.',
      meta: [['PLATFORM', 'G1 + GO2-W'], ['MODE', 'FIELD INTEGRATION'], ['DEMO', 'AVAILABLE']],
    },
    capabilities: {
      heading: 'What can be demonstrated now',
      note: 'Final capability depends on configuration and field testing.',
      items: ['Autonomous navigation', 'Security patrol demo', 'Arm integration available'],
    },
    scenarios: {
      heading: 'Sell one verifiable field result first',
      intro: 'Do not begin with “buy a robot.” Begin with one route, one checkpoint and one alert or data-return loop.',
      items: [
        ['Site and factory patrol', 'Fixed routes, remote data return, human review'],
        ['Equipment rooms and high-risk areas', 'Reduce human entry and collect field information'],
        ['Integration and joint delivery', 'Navigation, sensors, robotic arms and business-system interfaces'],
      ],
      alt: 'Illustrative quadruped robot following an inspection route in an industrial site',
      caption: 'Industrial inspection illustration, not a deployed customer case.',
      routeLabel: 'ROUTE',
      checkpointLabel: 'CHECKPOINT',
    },
    pilot: {
      heading: 'How a pilot moves forward',
      steps: ['Field objective', 'Route & checkpoints', 'Demo / integration', 'On-site acceptance'],
      cta: 'Discuss a pilot',
    },
    evidence: {
      heading: 'Bring the site. We bring a robot that runs.',
      items: [
        ['Available', 'Security autonomous-navigation demo'],
        ['Extendable', 'Robotic arm and field sensors'],
        ['Confirm first', 'Ground, slope, network, checkpoints and alert method'],
      ],
    },
    contact: {
      aria: 'Contact and project inquiry',
      heading: 'Send the field problem',
      fields: {
        name: 'Your name',
        company: 'Company / team',
        location: 'Site location',
        contact: 'Email or phone',
        task: 'What should the robot accomplish?',
      },
      empty: 'Not provided',
      subject: 'Field robotics pilot',
      newInquiry: 'New inquiry',
      emailLabels: ['Name', 'Company / team', 'Site location', 'Robot objective', 'Contact'],
      formNote: 'Submitting opens your email client with a complete inquiry draft. No form data is uploaded.',
      submit: 'Create inquiry email',
      direct: 'Direct contact',
      copied: 'Copied',
      copy: 'Copy email',
      github: 'Open a GitHub project inquiry',
      pdf: 'Download one-page capability brief',
      inspectionGuide: 'Industrial inspection selection guide',
      disclaimer: ['We do not represent Unitree Robotics.', 'Scope and capability depend on mutually confirmed field testing.'],
    },
  },
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="arrow" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h15M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
    </svg>
  )
}

function Header({ language, setLanguage, text }) {
  const [open, setOpen] = useState(false)
  const sectionIds = ['capabilities', 'scenarios', 'pilot', 'contact']

  function toggleLanguage() {
    const next = language === 'zh' ? 'en' : 'zh'
    localStorage.setItem('site-language', next)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState({}, '', url)
    setLanguage(next)
    setOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={text.top}>
        <span className="brand__reticle" aria-hidden="true"><i /></span>
        <span>LI HUAWEI</span>
        <span className="brand__muted">ROBOTICS INTEGRATION</span>
      </a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
        <span className="menu-button__line" />
        <span className="menu-button__line" />
        <span className="sr-only">{text.menu}</span>
      </button>
      <nav id="site-nav" className={open ? 'site-nav site-nav--open' : 'site-nav'} aria-label={text.navLabel}>
        {text.nav.map((label, index) => (
          <a key={sectionIds[index]} href={`#${sectionIds[index]}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <button className="lang-toggle" type="button" onClick={toggleLanguage} aria-label={text.languageLabel}>{text.languageAction}</button>
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

function InquiryForm({ text }) {
  const [form, setForm] = useState({ name: '', company: '', location: '', task: '', contact: '' })
  const [copied, setCopied] = useState(false)

  const emailBody = useMemo(() => [
    `${text.emailLabels[0]}: ${form.name || text.empty}`,
    `${text.emailLabels[1]}: ${form.company || text.empty}`,
    `${text.emailLabels[2]}: ${form.location || text.empty}`,
    `${text.emailLabels[3]}: ${form.task || text.empty}`,
    `${text.emailLabels[4]}: ${form.contact || text.empty}`,
  ].join('\n'), [form, text])

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function submit(event) {
    event.preventDefault()
    const subject = encodeURIComponent(`[${text.subject}] ${form.company || form.name || text.newInquiry}`)
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
        <h2>{text.heading}</h2>
        <div className="field-grid">
          <label><span>{text.fields.name}</span><input name="name" value={form.name} onChange={update} autoComplete="name" required /></label>
          <label><span>{text.fields.company}</span><input name="company" value={form.company} onChange={update} autoComplete="organization" /></label>
          <label><span>{text.fields.location}</span><input name="location" value={form.location} onChange={update} autoComplete="address-level1" /></label>
          <label><span>{text.fields.contact}</span><input name="contact" value={form.contact} onChange={update} autoComplete="email" required /></label>
          <label className="field--wide"><span>{text.fields.task}</span><textarea name="task" value={form.task} onChange={update} rows="4" required /></label>
        </div>
        <p className="form-note">{text.formNote}</p>
        <button className="submit-button" type="submit">
          <span className="submit-button__icon"><ArrowIcon /></span>
          <span>{text.submit}</span>
        </button>
      </form>
      <aside className="contact-aside" aria-label={text.direct}>
        <div className="contact-aside__email">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <rect x="2.5" y="4.5" width="19" height="15" stroke="currentColor" strokeWidth="1.5" />
            <path d="m3 6 9 7 9-7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <button className="copy-button" type="button" onClick={copyEmail}>{copied ? text.copied : text.copy}</button>
        <a className="github-inquiry" href={INQUIRY_URL} target="_blank" rel="noreferrer">{text.github} <ArrowIcon /></a>
        <a className="pdf-download" href={PDF_URL} download>{text.pdf} <ArrowIcon /></a>
        <a className="inspection-guide" href={INSPECTION_GUIDE_URL}>{text.inspectionGuide} <ArrowIcon /></a>
        <div className="contact-aside__note">
          {text.disclaimer.map((line) => <p key={line}>{line}</p>)}
        </div>
      </aside>
    </div>
  )
}

function initialLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang')
  if (queryLanguage === 'zh' || queryLanguage === 'en') return queryLanguage
  const saved = localStorage.getItem('site-language')
  if (saved === 'zh' || saved === 'en') return saved
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export default function App() {
  const [language, setLanguage] = useState(initialLanguage)
  const text = content[language]

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
    document.title = text.pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', text.pageDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', text.pageTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', text.pageDescription)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'zh' ? 'zh_CN' : 'en_US')
    const canonicalUrl = language === 'en'
      ? 'https://lihuawei-topsun.github.io/robotics-field-integration/?lang=en'
      : 'https://lihuawei-topsun.github.io/robotics-field-integration/?lang=zh'
    document.querySelector('#canonical-link')?.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
  }, [language, text])

  return (
    <div id="top">
      <Header language={language} setLanguage={setLanguage} text={text} />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__copy">
            <h1 id="hero-title">{text.hero.title}</h1>
            <p>{text.hero.body}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contact">{text.hero.primary} <ArrowIcon /></a>
              <a className="button button--link" href="#capabilities">{text.hero.secondary} <ArrowIcon /></a>
            </div>
            <div className="hero-route" aria-hidden="true"><span /><i /><b /></div>
          </div>
          <figure className="hero__media">
            <img src="assets/robot-lab-tactical-portrait.png" alt={text.hero.alt} fetchPriority="high" />
            <figcaption>{text.hero.caption}</figcaption>
          </figure>
          <aside className="hero-telemetry" aria-label="Platform status">
            {text.hero.meta.map(([term, detail], index) => (
              <div key={term} className={index === 2 ? 'hero-telemetry__item hero-telemetry__item--available' : 'hero-telemetry__item'}>
                <span>{term}</span><strong>{detail}</strong>{index === 2 && <i aria-hidden="true" />}
              </div>
            ))}
          </aside>
        </section>

        <section className="capabilities section" id="capabilities" aria-labelledby="capability-title">
          <RouteLine number="01" />
          <div className="section-heading section-heading--inline">
            <h2 id="capability-title">{text.capabilities.heading}</h2>
            <p>{text.capabilities.note}</p>
          </div>
          <div className="capability-list">
            {text.capabilities.items.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowIcon /></div>)}
          </div>
        </section>

        <section className="scenarios section" id="scenarios" aria-labelledby="scenario-title">
          <RouteLine number="02" />
          <div className="section-heading section-heading--wide">
            <h2 id="scenario-title">{text.scenarios.heading}</h2>
            <p>{text.scenarios.intro}</p>
          </div>
          <div className="scenario-list">
            {text.scenarios.items.map(([title, detail], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>
            ))}
          </div>
          <figure className="field-media">
            <img src="assets/industrial-patrol-tactical.png" alt={text.scenarios.alt} loading="lazy" />
            <svg className="field-route" viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
              <polyline points="80,284 210,242 418,250 580,218 782,224 958,270 1140,274" />
              <rect x="204" y="234" width="16" height="16" />
              <rect x="572" y="210" width="16" height="16" />
              <rect x="950" y="262" width="16" height="16" />
            </svg>
            <span className="field-route__label field-route__label--start">{text.scenarios.routeLabel}</span>
            <span className="field-route__label field-route__label--end">{text.scenarios.checkpointLabel}</span>
            <figcaption>{text.scenarios.caption}</figcaption>
          </figure>
        </section>

        <section className="pilot section" id="pilot" aria-labelledby="pilot-title">
          <div className="section-heading section-heading--wide">
            <span className="section-index">02 / PILOT</span>
            <h2 id="pilot-title">{text.pilot.heading}</h2>
          </div>
          <ol className="pilot-steps">
            {text.pilot.steps.map((label, index) => <li key={label}><span>0{index + 1}</span><i className={`pilot-step__graphic pilot-step__graphic--${index + 1}`} aria-hidden="true" /><strong>{label}</strong></li>)}
          </ol>
          <a className="text-link" href="#contact">{text.pilot.cta} <ArrowIcon /></a>
        </section>

        <section className="evidence section" aria-labelledby="evidence-title">
          <RouteLine number="03" />
          <div className="section-heading section-heading--wide"><h2 id="evidence-title">{text.evidence.heading}</h2></div>
          <dl className="evidence-list">
            {text.evidence.items.map(([term, detail], index) => <div key={term}><span className="evidence-list__index">[ 0{index + 1} ]</span><dt>{term}</dt><dd>{detail}</dd><ArrowIcon /></div>)}
          </dl>
        </section>

        <section className="contact" id="contact" aria-label={text.contact.aria}>
          <InquiryForm text={text.contact} />
          <div className="contact-route" aria-hidden="true"><span /></div>
          <footer><span>Independent robotics integration / China</span><span>© {new Date().getFullYear()} Li Huawei</span></footer>
        </section>
      </main>
    </div>
  )
}
