"use client";
import React from "react";

const Page = () => {
  return (
    <>
      {/* Головний фон */}
      <div className="background-pattern"></div>

      {/* Плаваючі елементи */}
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      {/* Навігація */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">FULL STACK TECH</div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Основний контейнер */}
      <div className="main-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">WordPress Development</h1>
          <p className="hero-subtitle">
            Створюю сучасні, швидкі та масштабовані веб-рішення на WordPress з
            використанням найкращих практик розробки
          </p>
          <a href="#services" className="cta-button">
            Дізнатися більше
          </a>
        </section>

        {/* Content Grid */}
        <div className="content-grid">
          <div className="content-card">
            <div className="card-icon">🚀</div>
            <h3 className="card-title">Швидка Розробка</h3>
            <p className="card-description">
              WordPress дозволяє швидко створювати функціональні веб-сайти
              завдяки величезній екосистемі тем та плагінів.
            </p>
            <ul className="card-features">
              <li>Готові теми та шаблони</li>
              <li>Модульна архітектура</li>
              <li>Швидке прототипування</li>
              <li>Готові компоненти</li>
            </ul>
          </div>

          <div className="content-card">
            <div className="card-icon">🎨</div>
            <h3 className="card-title">Кастомізація</h3>
            <p className="card-description">
              Повна свобода в дизайні та функціональності через кастомні теми,
              плагіни та Advanced Custom Fields.
            </p>
            <ul className="card-features">
              <li>Кастомні теми та дочірні теми</li>
              <li>Власні плагіни</li>
              <li>Advanced Custom Fields</li>
              <li>Гнучкі шаблони сторінок</li>
            </ul>
          </div>

          <div className="content-card">
            <div className="card-icon">📈</div>
            <h3 className="card-title">SEO Оптимізація</h3>
            <p className="card-description">
              WordPress має відмінну підтримку SEO з коробки та потужні плагіни
              для просування сайту.
            </p>
            <ul className="card-features">
              <li>Yoast SEO / RankMath</li>
              <li>Структурована розмітка</li>
              <li>Оптимізація швидкості</li>
              <li>Мобільна адаптивність</li>
            </ul>
          </div>

          <div className="content-card">
            <div className="card-icon">🔒</div>
            <h3 className="card-title">Безпека та Підтримка</h3>
            <p className="card-description">
              Регулярні оновлення, система безпеки та підтримка великої
              спільноти розробників.
            </p>
            <ul className="card-features">
              <li>Регулярні оновлення безпеки</li>
              <li>Плагіни безпеки (Wordfence)</li>
              <li>Резервне копіювання</li>
              <li>24/7 моніторинг</li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <section className="tech-stack">
          <h2 className="tech-title">Технології WordPress</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-name">PHP</div>
              <div className="tech-version">8.1+</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">MySQL</div>
              <div className="tech-version">8.0</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">WordPress</div>
              <div className="tech-version">6.4+</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">Gutenberg</div>
              <div className="tech-version">Block Editor</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">WooCommerce</div>
              <div className="tech-version">8.0+</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">REST API</div>
              <div className="tech-version">v2</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">ACF Pro</div>
              <div className="tech-version">6.0+</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">Elementor</div>
              <div className="tech-version">3.15+</div>
            </div>
          </div>
        </section>
      </div>

      {/* CSS через styled-jsx */}
      <style jsx>{`
        :global(*) {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :global(body) {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, sans-serif;
          min-height: 100vh;
          color: white;
          overflow-x: hidden;
          background: linear-gradient(
            135deg,
            #0f0c29 0%,
            #24243e 50%,
            #302b63 100%
          );
        }
        .background-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 20% 80%,
              rgba(120, 119, 198, 0.3) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(255, 119, 198, 0.3) 0%,
              transparent 50%
            );
          z-index: -1;
        }
        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }
        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            rgba(102, 126, 234, 0.1),
            rgba(118, 75, 162, 0.1)
          );
          animation: float 20s infinite ease-in-out;
        }
        .floating-circle:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        .floating-circle:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation-delay: -5s;
        }
        .floating-circle:nth-child(3) {
          width: 80px;
          height: 80px;
          top: 80%;
          left: 20%;
          animation-delay: -10s;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 20px 50px;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
        }
        .logo {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #667eea;
        }
        .main-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 50px 50px;
        }
        .hero-section {
          text-align: center;
          margin-bottom: 80px;
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 1.3rem;
          color: #a0a0a0;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          color: white;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
        }
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }
        .content-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .content-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border-color: rgba(102, 126, 234, 0.3);
        }
        .card-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          font-size: 28px;
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #fff;
        }
        .card-description {
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .card-features {
          list-style: none;
        }
        .card-features li {
          color: #c0c0c0;
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }
        .card-features li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }
        .tech-stack {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
        }
        .tech-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 30px;
          color: #fff;
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
        }
        .tech-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .tech-item:hover {
          transform: translateY(-3px);
          background: rgba(102, 126, 234, 0.1);
        }
        .tech-name {
          font-weight: 600;
          color: #fff;
          margin-bottom: 5px;
        }
        .tech-version {
          color: #a0a0a0;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .main-container {
            padding: 120px 20px 50px;
          }
          .content-grid {
            grid-template-columns: 1fr;
          }
          .navbar {
            padding: 20px 20px;
          }
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
