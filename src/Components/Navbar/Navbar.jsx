import { useState } from 'react'
import { HiMiniBars3, HiMiniXMark } from 'react-icons/hi2'
import resume from '../../assets/resume.pdf'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Herik Cunha — início">
        <span className="wordmark__disc" aria-hidden="true" />
        <span>HERIK <span className="wordmark__light">CUNHA</span></span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <HiMiniXMark /> : <HiMiniBars3 />}
      </button>
      <nav className={`site-nav ${open ? 'site-nav--open' : ''}`} aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
        <a className="nav-resume" href={resume} target="_blank" rel="noreferrer">
          Currículo <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}
