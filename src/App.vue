<template>
    <h1>{{ massage }}</h1>
    <HelloWorld />
</template>

<script>
    import HelloWorld from '~/components/HelloWorld';
    export default {
        components: {
            HelloWorld
        },
        data() {
            return {
                massage : 'Hello Vue!!!'
            }
        }
    }
</script>