<template>
    <div class="contacts-page">
        <h1 class="text-3xl font-bold text-center my-8">Контакты</h1>
        <Feedback />
    </div>
</template>

<script>
export default {
    name: 'ContactsPage',
    head() {
        return {
            title: 'Контакты - Metrics'
        };
    }
};
</script>