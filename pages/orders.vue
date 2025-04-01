<template>
    <container class="body">
        <section class="main">
        <div class="main-container">
            <div class="main-title">        
                <h1>Начните свой проект с нами уже сегодня!</h1>
            </div>
            <div class="main-description">
                <p>Здесь вы можете увидеть примеры наших успешных кейсов. <br> Каждый проект — это уникальное решение, которое помогло <br> нашим клиентам достичь их целей.</p>
            </div>
        </div>
    </section>
        <div class="our_work">
            <div class="work1">
                <h1>Автоматизация бизнеса для ритейлера</h1>
                <ul>
                    <li><b>Задача:</b> Оптимизация процессов обработки заказов.</li>
                    <li><b>Решение:</b> Внедрение CRM-системы и автоматизация workflow.</li>
                    <li><b>Результат:</b> Сокращение времени обработки заказов на 30%.</li>
                </ul>
                <img src="../public/Busines.png" alt="">
            </div>
            <div class="work2">
                <h1>Аналитика данных для финансовой компании</h1>
                <ul>
                    <li><b>Задача:</b> Масштабирование инфраструктуры.</li>
                    <li><b>Решение:</b>  Разработка BI-решения с дашбордами и прогнозированием.</li>
                    <li><b>Результат:</b> Увеличение точности прогнозов на 25%.</li>
                </ul>
                <img src="../public/Analitics.png" alt="">
            </div>
            <div class="work3">
                <h1>Облачное решение для стартапа</h1>
                <ul>
                    <li><b>Задача:</b> Оптимизация процессов обработки заказов.</li>
                    <li><b>Решение:</b> Миграция в облако и настройка автоматического масштабирования.</li>
                    <li><b>Результат:</b> Снижение затрат на инфраструктуру на 20%.</li>
                </ul>
                <img src="../public/Cloud.png" alt="">
            </div>
        </div>

    </container>
</template>

<style scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 310px;
}
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 120vh;
  padding: 0 34px;
  text-align: center;
}
.main-title {
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: 0.005em;
  color: #1D4355;
}
.main-description {
  font-weight: 400;
  font-size: 21px;
  line-height: 34px;
  letter-spacing: 0.005em;
  color: #1D435580;
  text-align: center;
}

</style>