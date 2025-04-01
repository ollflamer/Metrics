<template>
    <div class="font-dm-sans pt-12">
        <div class="bg-transparent text-[#1D4355] py-12">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap md:flex-nowrap gap-8 items-start">
                    <!-- Левая колонка с текстом -->
                    <div class="w-full md:w-1/2">
                        <h1 class="text-4xl lg:text-6xl font-bold mb-2 pb-8 text-primary-dark text-start">
                            Metrics Analytics - ваш надежный партнер в IT
                        </h1>
                        <p class="text-lg mb-4 text-[#1D435580] text-start font-400">
                            Мы помогаем бизнесу становиться эффективнее с помощью современных технологий. Наша команда создает решения для автоматизации процессов, анализа данных и интеграции систем, чтобы вы могли сосредоточиться на развитии.
                        </p>
                        <div class="flex flex-col gap-2 text-start mb-4 border-2 border-[#53786D] p-4 pt-5 mt-14 rounded-lg">
                            <h1 class="text-2xl font-bold mb-2 text-[#1D4355]">Почему мы?</h1>
                            <div class="flex flex-col gap-2 text-start mb-2 pr-2 text-[#1D435580] ml-6">
                                <li class="">Опыт: Более 5 лет на рынке.</li>
                                <li class="">Технологии: Используем AI, Big Data и облачные решения.</li>
                                <li class="">Подход: Индивидуальные решения для каждого клиента.</li>
                                <li class="">Поддержка: Всегда на связи, чтобы помочь.</li>
                            </div>
                            <h1 class="text-2xl font-bold mb-2 text-[#1D4355]">Наша команда:</h1>
                            <div class="text-start mb-2 pr-2 text-[#1D435580]">
                                <p class="">50+ специалистов: разработчики, аналитики, инженеры и консультанты. Мы работаем вместе, чтобы ваш бизнес рос.</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Правая колонка с изображением -->
                    <div class="w-full md:w-1/2 flex justify-center items-center pt-16">
                        <img src="/aboutPep.png" alt="Команда Metrics Analytics" class="w-full h-auto max-w-xl" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    name: 'AboutPage'
}
</script>
