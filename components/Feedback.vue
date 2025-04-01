<template>
  <section class="bg-gray-50 py-16 bg-[url('/bg-feedback.png')] bg-cover">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row gap-8 lg:gap-12">
      <!-- Левая часть формы -->
      <div class="w-full md:w-1/2">
        <h2 class="text-5xl font-medium text-gray-800 mb-4">Оставить обратную связь</h2>
        <p class="text-gray-600 mb-8">Остались вопросы или есть предложения? Напишите нам – мы всегда на связи!</p>
        
        <form class="space-y-6" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Имя <span class="text-red-500">*</span></label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name"
              placeholder="Ваше имя..." 
              :class="[
                'w-full px-4 py-3 rounded-lg border-2 border-green-900 outline-none transition duration-300',
                errors.name ? 
                  'border-red-500 bg-red-50 animate-pulse shadow-sm shadow-red-300' : 
                  'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              ]"
              @input="validateField('name')"
              @blur="validateField('name')"
            >
            <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
          </div>
          
          <div class="form-group">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email <span class="text-red-500">*</span></label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              placeholder="username@email.com" 
              :class="[
                'w-full px-4 py-3 rounded-lg border-2 border-green-900 outline-none transition duration-300',
                errors.email ? 
                  'border-red-500 bg-red-50 animate-pulse shadow-sm shadow-red-300' : 
                  'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              ]"
              @input="validateField('email')"
              @blur="validateField('email')"
            >
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
          </div>
          
          <div class="form-group">
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Телефон <span class="text-red-500">*</span></label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone"
              placeholder="+998 90 123-45-67" 
              :class="[
                'w-full px-4 py-3 rounded-lg border-2 border-green-900 outline-none transition duration-300',
                errors.phone ? 
                  'border-red-500 bg-red-50 animate-pulse shadow-sm shadow-red-300' : 
                  'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              ]"
              @input="onPhoneInput"
              @blur="validateField('phone')"
            >
            <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
            <p class="mt-1 text-xs text-gray-500">Формат: +998 90 123-45-67</p>
          </div>
          
          <div class="form-group">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
            <textarea 
              id="message" 
              v-model="formData.message"
              placeholder="Пожалуйста, введите ваше сообщение здесь... (необязательно)" 
              rows="4"
              :class="[
                'w-full px-4 py-3 rounded-lg border-2 border-green-900 outline-none transition duration-300 resize-none',
                errors.message ? 
                  'border-red-500 bg-red-50 animate-pulse shadow-sm shadow-red-300' : 
                  'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              ]"
              @input="validateField('message')"
              @blur="validateField('message')"
            ></textarea>
            <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
          </div>
          
          <button 
            type="submit" 
            :disabled="isSubmitting"
            :class="[
              'w-full sm:w-auto text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1',
              isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-600 hover:bg-slate-700'
            ]"
          >
            <span v-if="isSubmitting" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Отправка...
            </span>
            <span v-else>Отправить сообщение</span>
          </button>
        </form>
      </div>
      
      <!-- Правая часть с информацией -->
      <div class="w-full md:w-1/2 mt-8 md:mt-40">
        <div class="bg-transparent border-2 border-green-900 p-8 rounded-xl shadow-lg">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Консультация по проекту</h3>
          <p class="text-gray-600 mb-8">Чтобы узнать больше о наших услугах, заполните заявку или позвоните нам! Мы расскажем вам, как мы можем помочь вашему бизнесу</p>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="ml-4">
                <span class="block text-sm font-medium text-gray-500">Телефон:</span>
                <span class="block text-base font-medium text-gray-800">+998 (90) 123-45-67</span>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-4">
                <span class="block text-sm font-medium text-gray-500">Email:</span>
                <span class="block text-base font-medium text-gray-800">devx.brand@gmail.com</span>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <span class="block text-sm font-medium text-gray-500">Адрес:</span>
                <span class="block text-base font-medium text-gray-800">Узбекистан, г. Ташкент, ул. Богишамол, 232.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Toast-уведомление -->
    <Toast :visible="toast.visible" :message="toast.message" :type="toast.type" />
  </section>
</template>

<script>
import Toast from './Toast.vue';

export default {
  name: 'Feedback',
  components: {
    Toast
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      isSubmitting: false,
      toast: {
        visible: false,
        message: '',
        type: 'success'
      },
      regexPatterns: {
        name: /^[а-яА-Яa-zA-Z\s]{2,30}$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        phone: /^(\+?\d{1,3}[\s-]?)?\(?\d{2,4}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/,
        message: /^.{0,500}$/
      }
    };
  },
  methods: {
    onPhoneInput(event) {
      const input = event.target.value.replace(/\D/g, '');
      
      if (input.length === 0) {
        this.formData.phone = '';
        return;
      }
      
      let formatted = '+';
      
      if (input.length > 0) {
        formatted += input.substring(0, Math.min(3, input.length));
      }
      
      if (input.length > 3) {
        formatted += ' ' + input.substring(3, Math.min(5, input.length));
      }
      
      if (input.length > 5) {
        formatted += ' ' + input.substring(5, Math.min(8, input.length));
      }
      
      if (input.length > 8) {
        formatted += '-' + input.substring(8, Math.min(10, input.length));
      }
      
      if (input.length > 10) {
        formatted += '-' + input.substring(10, Math.min(12, input.length));
      }
      
      this.formData.phone = formatted;
      this.validateField('phone');
    },
    
    validateField(field) {
      const value = this.formData[field];
      
      if (field === 'message' && !value) {
        this.errors[field] = '';
        return true;
      }
      
      if (['name', 'email', 'phone'].includes(field) && !value) {
        this.errors[field] = 'Это поле обязательно для заполнения';
        return false;
      }
      
      if (!this.regexPatterns[field].test(value)) {
        switch (field) {
          case 'name':
            this.errors[field] = 'Имя должно содержать только буквы и пробелы (от 2 до 30 символов)';
            break;
          case 'email':
            this.errors[field] = 'Пожалуйста, введите корректный email-адрес';
            break;
          case 'phone':
            this.errors[field] = 'Пожалуйста, введите корректный номер телефона';
            break;
          case 'message':
            this.errors[field] = 'Сообщение не должно превышать 500 символов';
            break;
        }
        return false;
      }
      
      this.errors[field] = '';
      return true;
    },
    
    validateForm() {
      const fields = ['name', 'email', 'phone', 'message'];
      let isValid = true;
      
      fields.forEach(field => {
        const fieldIsValid = this.validateField(field);
        isValid = isValid && fieldIsValid;
      });
      
      return isValid;
    },
    
    showToast(message, type = 'success') {
      this.toast = {
        visible: true,
        message,
        type
      };
      
      setTimeout(() => {
        this.toast.visible = false;
      }, 5000);
    },
    
    async submitForm() {
      if (!this.validateForm()) {
        this.showToast('Пожалуйста, исправьте ошибки в форме', 'error');
        Object.keys(this.errors).forEach(field => {
          if (this.errors[field]) {
            const input = document.getElementById(field);
            input.classList.add('animate-pulse');
            setTimeout(() => {
              input.classList.remove('animate-pulse');
            }, 1000);
          }
        });
        return;
      }
      
      this.isSubmitting = true;
      
      try {
        const response = await fetch('/api/feedback/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
          this.showToast('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.', 'success');
          
          this.formData = {
            name: '',
            email: '',
            phone: '',
            message: ''
          };
          
          await fetch('/api/feedback/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.formData)
          }).catch(err => console.log('Ошибка при логировании данных:', err));
        } else {
          this.showToast(result.message || 'Произошла ошибка при отправке сообщения.', 'error');
          console.error('Ошибка сервера:', result.error);
        }
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        this.showToast('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.', 'error');
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped>
@keyframes border-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(239, 68, 68, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.animate-pulse {
  animation: border-pulse 1.5s infinite;
}
</style>
