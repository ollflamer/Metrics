<template>
    <span>
        <div class="feedback-right">
                <div class="consultation-box">
                    <h3>Консультация по проекту</h3>
                    <p>Чтобы узнать больше о наших услугах, заполните заявку или позвоните нам! Мы расскажем вам, как мы можем помочь вашему бизнесу</p>
                    
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-label">Телефон:</span>
                            <span class="contact-value">+998 (90) 123-45-67</span>
                        </div>
                        
                        <div class="contact-item">
                            <span class="contact-label">Email:</span>
                            <span class="contact-value">Info@gmail.ru</span>
                        </div>
                        
                        <div class="contact-item">
                            <span class="contact-label">Адрес:</span>
                            <span class="contact-value">Узбекистан, г. Ташкент, ул. Богишамол, 232.</span>
                        </div>
                    </div>
                </div>
            </div>
        <slot />
    </span>
</template>

<style scoped>


.feedback {
  width: 100%;
  background-image: url('../public/bg-feedback.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 20px;
  position: relative;
  padding-bottom: 150px;
}

.feedback-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.feedback-left {
  flex: 1;
  max-width: 758px;
}

.feedback-left h2 {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 64px;
  line-height: 44px;
  color: #1D4355;  
  margin-bottom: 15px;
}

.feedback-left p {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: #1D435580;
  margin-bottom: 30px;
}

.feedback-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1D4355;
}

.form-group input, 
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #53786D;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #4B5563;
  background-color: #FFFFFF;
  transition: border-color 0.3s ease;
}

.form-group input:focus, 
.form-group textarea:focus {
  outline: none;
  border-color: #1D4355;
}

.form-group input::placeholder, 
.form-group textarea::placeholder {
  color: #9CA3AF;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-button {
  background-color: #1D4355;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 16px 25px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  margin-top: 10px;
  transform: scale(0.95);
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: #152f3d;
  transition: all 0.3s ease;
  transform: scale(1.05);
}

.submit-button:active {
  transform: scale(0.95);
}

.feedback-right {
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
}

.consultation-box {
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 2px solid #53786D;
}

.consultation-box h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 32px;
  color: #1D4355;
  margin-bottom: 15px;
}

.consultation-box p {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #1D435580;
  margin-bottom: 30px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contact-label {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #1D4355;
}

.contact-value {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #1D435580;
}

@media (max-width: 768px) {
  .feedback-container {
    flex-direction: column;
  }
  
  .feedback-left, 
  .feedback-right {
    max-width: 100%;
  }
}


</style>