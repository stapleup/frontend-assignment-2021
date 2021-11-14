<template>
    <div class="image">
        <div
            :style="{ backgroundImage: `url(${src})` }"
            class="background"
        ></div>
        <img :src="src" class="image" />
    </div>
</template>

<script>
export default {
    name: 'Image',
    props: {
        src: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped lang="scss">
.image {
    position: relative;
    overflow: hidden;
    text-align: center;

    img {
        max-width: 100%;
        max-height: 100%;
        z-index: 2;
        position: relative;
    }
    .background {
        position: absolute;
        inset: 0;
        background-position: center center;
        background-size: 150%;
        filter: blur(15px);
        z-index: 1;
    }
}
</style>
