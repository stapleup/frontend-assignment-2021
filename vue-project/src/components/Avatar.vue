<template>
    <div
        class="avatar"
        :style="{
            backgroundImage: `url(${src})`,
            width: `${size}px`,
            height: `${size}px`,
        }"
    ></div>
</template>

<script>
export default {
    name: 'Avatar',
    props: {
        src: {
            type: String,
        },
        size: {
            type: Number,
            default: 32,
        },
    },
}
</script>

<style scoped>
.avatar {
    background-size: cover;
    background-position: center;
    border-radius: 999px;
    border: 2px solid white;
    flex-shrink: 0;
}
</style>
