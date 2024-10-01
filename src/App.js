import React from 'react'
import { Helmet } from 'react-helmet' 
import './App.css'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:title" content="Dikira Kira Saja" />
        <meta property="og:image"
          content="https://f.balxzzy.xyz/component/IMG-20240928-WA0193.jpg"/>
        <meta property="og:description"
          content="WhatsApp bot community, WhatsApp bot dev, Community WhatsApp bot, WhatsApp bot drv, wabot"/>
        <meta name="twitter:image:src"
          content="https://f.balxzzy.xyz/component/IMG-20240928-WA0193.jpg"/>
        <title>Community</title>
      </Helmet>
      
      <div className="container">
        <img alt="profile picture" className="profile-pic"
          src="https://f.balxzzy.xyz/component/IMG-20240928-WA0193.jpg"/>
        <div className="title">
          Xshiina - Community <i className="fas fa-check-circle"></i>
        </div>
        
        <div className="subtitle">Beginner Team, Suka Bikin Honar</div>
        <div className="social-icons">
          <a href="https://instagram.com/@iqstore78">
            <i className="fab fa-instagram"></i>
          </a>
          
          <a href="https://wa.me/6281276400345?text=hi+balzz">
            <i className="far fa-comment-lines"></i>
          </a>
        </div>

        <Section title="Social Dev Link">
          <LinkItem href="https://me.balxzzy.xyz" icon="fa-brands fa-edge" text="My Portfolio"/>
          <LinkItem href="https://api.balxzzy.xyz" icon="fa-regular fa-fire" text="Projects Rest API's"/>
          <LinkItem href="https://github.com/balxz" icon="fa-brands fa-github" text="Github"/>
          <LinkItem href="https://tiktok.com/@iqstore78" icon="fa-brands fa-tiktok" text="Tiktok"/>
        </Section>

        <Section title="Community - Codings">
          <LinkItem href="https://chat.whatsapp.com/FW78A12iQIdK3snmkSKzQ3" icon="fab fa-whatsapp" text="Shiina Wabot Groups"/>
          <LinkItem href="https://whatsapp.com/channel/0029VaSY7Lp8F2pCmQLKNn0g" icon="fab fa-whatsapp" text="Shiina Channels Community"/>
          <LinkItem href="https://hello.com" icon="fab fa-whatsapp" text="Gmn Team"/>
          <LinkItem href="https://chat.whatsapp.com/JbzMsezhCwUKdC6dnjwcIz" icon="fab fa-whatsapp" text="All Bot Community"/>
          <LinkItem href="https://chat.whatsapp.com/ExSzRGszuh2FIiMctAQJMZ" icon="fab fa-whatsapp" text="BinaryCrafters"/>
        </Section>
      </div>
    </div>
  )
}

const Section = ({ title, children }) => (
  <div className="section">
    <div className="section-title" style={{ fontFamily: 'Patrick Hand' }}>
      {title}
    </div>
    {children}
  </div>
)

const LinkItem = ({ href, icon, text }) => (
  <a href={href} className="link-item">
    <i className={icon}></i>
    <span>{text}</span>
  </a>
)

export default App
