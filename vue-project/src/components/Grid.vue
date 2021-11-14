<template>
    <div class="grid">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Grid',
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3rem;
}
</style>
