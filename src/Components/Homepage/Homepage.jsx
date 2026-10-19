import { useEffect } from 'react'
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import portrait from '../../assets/servicos/me1.jpg'
import studioDalva from '../../assets/servicos/web_dalva.png'
import viraLata from '../../assets/servicos/web_viralata.png'
import favsApi from '../../assets/servicos/swaggerFlaskApi.png'
import sambaApp from '../../assets/servicos/samba-app.png'
import resume from '../../assets/resume.pdf'

const career = [
  {
    period: 'ABR 2025 — ATUAL',
    role: 'Analista de Desenvolvimento Jr.',
    company: 'Digimap · imagens de satélite e mapeamentos',
    detail: 'Na Digimap, desenvolvo soluções para apoiar operações técnicas e comerciais. Um dos destaques é um bot de licitações que integra dados de apis públicas e privadas, combina pré-filtros determinísticos de escopo com classificação por IA — atende, atende parcialmente ou não atende — e registra justificativas. O fluxo deduplica oportunidades, grava novos resultados no PostgreSQL e envia relatórios CSV por e-mail. A pipeline Jenkins tem agendamento semanal e executa testes automatizados antes do bot. Também contribuo para uma plataforma de gestão de haras e soluções web de geoprocessamento.',
    tags: ['Python', 'IA aplicada', 'Consumo de APIs', 'PostgreSQL', 'Jenkins', 'Geoprocessamento'],
  },
  {
    period: 'AGO 2022 — DEZ 2023',
    role: 'Desenvolvedor Web · estágio',
    company: 'CEDAE · Companhia Estadual de Águas e Esgotos',
    detail: 'Manutenção de intranet em PHP 7 e documentação de código legado. Criação de automações para recebimento e envio de e-mails e web scraping com Python; apoio à manutenção de backend Java 7.',
    tags: ['PHP 7', 'Python', 'Web scraping', 'Java 7'],
  },
  {
    period: 'AGO 2018 — JUL 2019',
    role: 'Marketing digital',
    company: 'Honda Oriental 2004',
    detail: 'Experiência inicial com comunicação digital, divulgação de veículos e organização de estoque em planilhas — uma base prática de atenção ao usuário, conteúdo e processos.',
    tags: ['Comunicação', 'Conteúdo digital', 'Excel'],
  },
]

const projects = [
  {
    number: '01', title: 'Studio Dalva Campos', category: 'FREELANCE · FRONT-END',
    description: 'Site para um estúdio de estética e bem-estar. Interface responsiva construída com React e Tailwind CSS.',
    image: studioDalva, live: 'https://studiodalva.vercel.app/', repo: 'https://github.com/rherik/studiodalva',
    stack: ['React', 'Tailwind CSS', 'Vercel'],
  },
  {
    number: '02', title: 'Adoção de vira-latas', category: 'PROJETO FULL-STACK',
    description: 'Aplicação de adoção com Flask, PostgreSQL e armazenamento em AWS S3. Projeto que pretendo evoluir com front-end separado consumindo uma API.',
    image: viraLata, live: '', repo: 'https://github.com/rherik/adocao_flask',
    stack: ['Flask', 'PostgreSQL', 'AWS S3'],
  },
  {
    number: '03', title: 'API de álbuns musicais', category: 'BACK-END · API REST',
    description: 'API para cadastro de álbuns, pensada para alimentar uma aplicação de favoritos. Inclui persistência relacional e armazenamento de arquivos.',
    image: favsApi, live: '', repo: 'https://github.com/rherik/favs-api',
    stack: ['Flask', 'PostgreSQL', 'Docker', 'AWS S3'],
  },
  {
    number: '04', title: 'Samba App', category: 'PROJETO FRONT-END · GITHUB PAGES',
    description: 'Jogo de trivia interativo sobre escolas de samba, desenvolvido com React e Vite. Projeto publicado no GitHub Pages.',
    image: sambaApp, imageTone: 'project-image--samba', live: 'https://rherik.github.io/samba-app/', repo: 'https://github.com/rherik/samba-app',
    stack: ['React', 'Vite', 'React Router', 'GitHub Pages'],
  },
]

const skillGroups = [
  { title: 'Back-end & APIs', items: ['Python', 'Flask', 'Spring Boot', 'Java', 'PHP', 'REST API', 'SQLAlchemy'] },
  { title: 'Front-end', items: ['React', 'JavaScript', 'jQuery', 'Leaflet', 'Mobile first'] },
  { title: 'Dados & infraestrutura', items: ['PostgreSQL', 'Docker', 'AWS EC2', 'AWS S3', 'Git', 'Jenkins', 'CI/CD'] },
]

export default function Homepage() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return undefined

    let frame = 0
    const updateParallax = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll-depth', `${Math.min(window.scrollY, 900)}px`)
        frame = 0
      })
    }
    window.addEventListener('scroll', updateParallax, { passive: true })
    updateParallax()
    return () => {
      window.removeEventListener('scroll', updateParallax)
      if (frame) window.cancelAnimationFrame(frame)
      document.documentElement.style.removeProperty('--scroll-depth')
    }
  }, [])

  return (
    <main>
      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> DESENVOLVEDOR FULL-STACK · RIO DE JANEIRO, BR</p>
          <h1>Construo tecnologia para <em>resolver</em> problemas reais.</h1>
          <p className="hero-summary">Sou Herik Cunha, desenvolvedor de software. Uno back-end, front-end e infraestrutura para transformar necessidades em produtos digitais úteis.</p>
          <div className="hero-actions">
            <a className="button button--bright" href="mailto:herikrosa@hotmail.com?subject=Oportunidade%20para%20Herik%20Cunha">Vamos conversar <FiArrowUpRight /></a>
            <a className="text-link" href={resume} target="_blank" rel="noreferrer">Ver currículo <FiArrowUpRight /></a>
          </div>
          <div className="hero-proof">
            <div><strong>Full-stack</strong><span>produto ao deploy</span></div>
            <div><strong>Python · React</strong><span>ferramentas do dia a dia</span></div>
            <div><strong>Aprendizado contínuo</strong><span>projetos e open source</span></div>
          </div>
        </div>
        <div className="hero-art" aria-label="Retrato de Herik Cunha em uma palestra de tecnologia">
          <div className="cd-disc" aria-hidden="true"><span className="cd-disc__hub" /><span className="cd-disc__shine" /></div>
          <div className="portrait-frame">
            <img src={portrait} alt="Herik apresentando uma palestra sobre tecnologia" />
            <span className="portrait-label">CURIOSIDADE EM MOVIMENTO · RJ</span>
          </div>
          <span className="art-note">LADO A — ENGENHARIA<br />LADO B — PESSOAS</span>
          <span className="art-index">01 / 04</span>
        </div>
        <a className="scroll-cue" href="#trajetoria"><span>ROLE PARA EXPLORAR</span><FiArrowDownRight /></a>
      </section>

      <section className="intro-band">
        <p>Uma carreira construída entre <span>curiosidade técnica</span>, colaboração e entrega de soluções que fazem sentido para quem usa.</p>
      </section>

      <section className="content-section section-shell" id="trajetoria">
        <div className="section-heading">
          <p className="eyebrow">02 — EXPERIÊNCIA</p>
          <h2>Uma trajetória de <em>construção.</em></h2>
          <p>Da operação e comunicação ao desenvolvimento de sistemas — cada etapa ampliou meu jeito de entender problemas.</p>
        </div>
        <div className="career-list">
          {career.map((item, index) => (
            <article className="career-item" key={item.company}>
              <div className="career-period"><span>0{index + 1}</span>{item.period}</div>
              <div className="career-body">
                <h3>{item.role}</h3><p className="career-company">{item.company}</p><p className="career-detail">{item.detail}</p>
                <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span className="career-mark" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="habilidades">
        <div className="section-shell skills-layout">
          <div className="section-heading">
            <p className="eyebrow">03 — FERRAMENTAS</p>
            <h2>Do dado à <em>interface.</em></h2>
            <p>Gosto de enxergar o produto por inteiro: arquitetura, experiência, dados e operação.</p>
            <div className="skills-disc" aria-hidden="true"><span /></div>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
            <div className="education-line"><span>FORMAÇÃO & CERTIFICAÇÕES</span><p>Análise e Desenvolvimento de Sistemas · Estácio (2023)</p><p>AWS Certified Cloud Practitioner (2025) · REST APIs with Flask and Python · Data Analysis for Insights</p></div>
          </div>
        </div>
      </section>

      <section className="content-section projects-section section-shell" id="projetos">
        <div className="section-heading section-heading--row">
          <div><p className="eyebrow">04 — SELEÇÃO DE PROJETOS</p><h2>Ideias em <em>produção.</em></h2></div>
          <a className="text-link" href="https://github.com/rherik" target="_blank" rel="noreferrer">Explorar GitHub <FiArrowUpRight /></a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a className={`project-image ${project.imageTone || ''}`} href={project.live || project.repo} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}>
                <img src={project.image} alt={`Imagem do projeto ${project.title}`} loading="lazy" />
                <span className="project-number">{project.number}</span><span className="project-open"><FiArrowUpRight /></span>
              </a>
              <div className="project-info"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Ver projeto <FiArrowUpRight /></a>}<a href={project.repo} target="_blank" rel="noreferrer">Código <FiArrowUpRight /></a></div>
              </div>
            </article>
          ))}
        </div>
        <div className="project-video">
          <div className="project-video__copy">
            <p className="eyebrow">DEMONSTRAÇÃO TÉCNICA · LINUX</p>
            <h3>Arquivo executável Linux</h3>
            <p>Uma demonstração prática compartilhada em vídeo — iniciativa para explorar uma solução e comunicar o conhecimento técnico com clareza.</p>
            <a className="project-video__link" href="https://youtu.be/QjjAMzlskA4?is=jwTE5sqK753GXIli" target="_blank" rel="noreferrer">Assistir no YouTube <FiArrowUpRight /></a>
          </div>
          <div className="project-video__frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/QjjAMzlskA4?rel=0"
              title="Arquivo executável Linux — vídeo de Herik Cunha"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="about-section section-shell" id="sobre">
        <div className="about-counter">05 <span>— SOBRE MIM</span></div>
        <div className="about-copy"><h2>Tecnologia é feita por pessoas. <em>É por elas que eu começo.</em></h2>
          <p>Sou graduado em Análise e Desenvolvimento de Sistemas e aprendo construindo: no trabalho, em projetos freelancer e contribuindo com repositórios open source. Tenho perfil colaborativo, comunicação assertiva e gosto de investigar até encontrar uma solução simples e sustentável.</p>
          <p>Hoje busco uma nova oportunidade em desenvolvimento de software, onde eu possa contribuir com minha experiência full-stack e seguir crescendo junto com o time.</p>
          <a className="button button--bright" href="mailto:herikrosa@hotmail.com?subject=Vamos%20conversar%20sobre%20uma%20oportunidade">Tenho interesse em conversar <FiArrowUpRight /></a>
          <div className="about-socials"><a href="https://www.linkedin.com/in/herik-cunha/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href="https://github.com/rherik" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="mailto:herikrosa@hotmail.com"><FiMail /> E-mail</a></div>
        </div>
        <div className="about-orbit" aria-hidden="true"><div className="cd-disc"><span className="cd-disc__hub" /><span className="cd-disc__shine" /></div></div>
      </section>
    </main>
  )
}
