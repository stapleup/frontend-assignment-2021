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
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 4rem;
    column-gap: 3rem;
}
@media (min-width: 750px) {
    .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 2rem;
    }
}
@media (min-width: 1080px) {
    .grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 2rem;
    }
}
</style>
