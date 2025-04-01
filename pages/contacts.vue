<template>
  <div class="font-dm-sans">
    <Feedback />

    <div class="bg-transparent text-white py-12 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl lg:text-5xl font-medium mb-2 text-primary-dark">
          Наше местоположение в 
          <span class="block sm:inline">Узбекистане<span class="text-primary-blue">/США</span></span>
        </h1>
      </div>
    </div>

    <div class="map-container relative">
      <div class="green-line absolute top-0 left-0 right-0 w-full h-1 bg-[#53786D] z-10"></div>
      
      <div class="map-rounded-corners relative w-full h-[400px] overflow-hidden" ref="mapContainer">
      </div>
    </div>
  </div>
</template>

<script>
import Feedback from '~/components/Feedback.vue';

export default {
  name: 'ContactsPage',
  components: {
    Feedback
  },
  head() {
    return {
      title: 'Контакты - Наше местоположение',
      meta: [
        { hid: 'description', name: 'description', content: 'Контактная информация и местоположение компании DevX в Узбекистане и США' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap' }
      ],
      script: [
        { src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU', defer: true }
      ]
    }
  },
  data() {
    return {
      map: null,
      coordinates: [41.2995, 69.2401],
      yandexMapLoaded: false
    }
  },
  mounted() {
    if (typeof ymaps !== 'undefined') {
      this.yandexMapLoaded = true;
      ymaps.ready(() => this.initMap());
    } else {
      window.addEventListener('load', () => {
        if (typeof ymaps !== 'undefined') {
          this.yandexMapLoaded = true;
          ymaps.ready(() => this.initMap());
        } else {
          this.loadYandexMapScript();
        }
      });
    }
  },
  methods: {
    loadYandexMapScript() {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.async = true;
      
      script.onload = () => {
        this.yandexMapLoaded = true;
        if (typeof ymaps !== 'undefined') {
          ymaps.ready(() => this.initMap());
        }
      };
      
      script.onerror = (e) => {
        console.error('Ошибка загрузки API Яндекс.Карт:', e);
      };
      
      document.head.appendChild(script);
    },
    
    initMap() {
      try {
        if (!this.yandexMapLoaded || typeof ymaps === 'undefined') {
          console.error('API Яндекс.Карт не загружен');
          return;
        }
        
        if (!this.$refs.mapContainer) {
          console.error('Контейнер для карты не найден');
          return;
        }
        
        this.map = new ymaps.Map(this.$refs.mapContainer, {
          center: this.coordinates,
          zoom: 15,
          controls: ['zoomControl']
        });
        
        const placemark = new ymaps.Placemark(this.coordinates, {
          hintContent: 'Наш офис',
          balloonContent: 'DevX, г. Ташкент, ул. Богишамол, 232'
        });
        
        this.map.geoObjects.add(placemark);
        
        this.applyMapStyles();
        
      } catch (error) {
        console.error('Ошибка при инициализации карты:', error);
      }
    },
    
    applyMapStyles() {
      setTimeout(() => {
        if (this.$refs.mapContainer) {
          const mapElements = this.$refs.mapContainer.querySelectorAll('*');
          
          mapElements.forEach(el => {
            if (el.className.includes('ymaps-2-1-79-map')) {
              el.style.borderTopLeftRadius = '16px';
              el.style.borderTopRightRadius = '16px';
            }
          });
          
          const mainContainer = this.$refs.mapContainer.querySelector('[class*="ymaps-2"][class*="-map"]');
          if (mainContainer) {
            mainContainer.style.borderTopLeftRadius = '16px';
            mainContainer.style.borderTopRightRadius = '16px';
            mainContainer.style.overflow = 'hidden';
          }
        }
      }, 500);
    }
  }
}
</script>

<style scoped>
/* Стили для блока карты */
.map-container {
  position: relative;
  overflow: hidden;
}

.green-line {
  height: 4px;
  background-color: #53786D;
}

.map-rounded-corners {
  border-top-left-radius: 16px !important;
  border-top-right-radius: 16px !important;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

/* Стили для обеспечения скругленных углов карты */
.map-rounded-corners::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  pointer-events: none;
  z-index: 500;
  border: 2px solid transparent;
  border-bottom: none;
}

/* Применяем стили к внутренним контейнерам Яндекс Карт */
:deep([class*="ymaps-2"][class*="-map"]) {
  border-top-left-radius: 16px !important;
  border-top-right-radius: 16px !important;
  overflow: hidden !important;
}

:deep([class*="ymaps-2"][class*="-container"]) {
  border-top-left-radius: 16px !important;
  border-top-right-radius: 16px !important;
  overflow: hidden !important;
}

:deep([class*="ymaps-2"][class*="-ground-pane"]) {
  filter: grayscale(0.3);
}
</style>