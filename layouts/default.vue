<template>
    <header class="header">
        <div class="header-container">
            <div class="header-logo">
                <a href="#"><img src="/Logo.svg" alt=""></a>
            </div>
            <nav class="nav">
                <li><a href="#">Клиенты</a></li>
                <li><a href="./pages/about_us.html">О компании</a></li>
                <li><a href="#">Заказы</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Новости</a></li>
            </nav>
            <div class="header-button">
                <a href="tel:+998941452332">+998941452332</a>
            </div>
        </div>
    </header> <slot />
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h3>Контактная информация</h3>
                <ul class="footer-list">
                    <li>• Адрес: г. Москва, ул. Примерная, д. 123</li>
                    <li>• Телефон: +7 (999) 123-45-67</li>
                    <li>• Email: <a href="mailto:info@webdev-site.ru">info@webdev-site.ru</a></li>
                    <li>• Режим работы: Пн–Пт: 9:00 – 18:00</li>
                </ul>
                
                <h3 class="legal-title">Юридическая информация</h3>
                <p class="legal-text">• &copy; 2023 DevXMETRICS ANALYTICS. Все права защищены · <a href="#">Политика конфиденциальности</a> · <a href="#">Пользовательское соглашение</a></p>
            </div>
            
            <div class="footer-section">
                <h3>Мы в соцсетях</h3>
                <ul class="footer-list">
                    <li>• <a href="#">VK</a></li>
                    <li>• <a href="#">Telegram</a></li>
                    <li>• <a href="#">Instagram</a></li>
                    <li>• <a href="#">YouTube</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Быстрые ссылки</h3>
                <ul class="footer-list">
                    <li>• <a href="#">Главная</a></li>
                    <li>• <a href="#">Услуги</a></li>
                    <li>• <a href="#">Портфолио</a></li>
                    <li>• <a href="#">О нас</a></li>
                    <li>• <a href="#">Блог</a></li>
                    <li>• <a href="#">Контакты</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>


<style scoped>
.header {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
}
.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 120vh;
  padding: 0 20px;
}
.header-logo {
  width: 122px;
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
  cursor: pointer;
}
.header-logo img:hover {
  transform: scale(1.1);
  transition: all 0.3s ease;
}
.header-logo img:active {
  transition: all 0.1s ease;
  cursor: pointer;
  transform: scale(0.9);
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 35px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #18181B;
  transition: all 0.3s ease;
}
.nav a {
  color: #000;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.005em;
  transition: all 0.3s ease;
  text-decoration: none;
}
.nav a:hover {
  color: #000;
  font-size: 30px;
  line-height: 24px;
  letter-spacing: 0.005em;
  transition: all 0.3s ease;
}
.nav li {
  list-style: none;
}
.nav a:active {
  transition: all 0.1s ease;
  font-size: 22px;
  line-height: 24px;
  padding: 1px 1px;
  cursor: pointer;
}
.header-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #1D4355;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid #1D4355;
  padding: 10px 20px;
  border-radius: 5px;
}
.header-button a {
  text-decoration: none;
  color: #1D4355;
  transition: all 0.3s ease;
}
.header-button a:hover {
  color: #1D4355;
  font-weight: 600;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.005em;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 10px 20px;
}

.footer {
  width: 100%;
  padding: 60px 20px;
  border-top: 6px solid #53786D;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
}

.footer-section {
  flex: 1;
}

.footer-section h3 {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #1D4355;
  margin-bottom: 20px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #4B5563;
  margin-bottom: 15px;
  line-height: 1.5;
  list-style-type: none;
}

.footer-list a {
  color: #4B5563;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-list a:hover {
  color: #53786D;
  text-decoration: underline;
}

.legal-title {
  margin-top: 40px;
}

.legal-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #6B7280;
  line-height: 1.5;
}

.legal-text a {
  color: #6B7280;
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-text a:hover {
  color: #53786D;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
  
  .footer-section {
    margin-bottom: 30px;
  }
} 
</style>
