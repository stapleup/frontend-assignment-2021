<template>
    <div class="carousel">
        <div class="content">
            <div ref="inner" class="inner" :style="innerStyles">
                <network-image
                    v-for="image in images"
                    :key="image"
                    :src="image"
                    class="image"
                />
            </div>
        </div>
        <div v-if="images.length > 1" class="controls">
            <button :disabled="step === 0" @click="prev">p</button>
            <button :disabled="step === images.length - 1" @click="next">
                n
            </button>
        </div>
    </div>
</template>

<script>
import Image from '../Image'
export default {
    name: 'Carousel',
    components: { NetworkImage: Image },
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            innerStyles: {},
            stepWidth: '',
            step: 0,
        }
    },
    mounted() {
        this.setStepWidth()
    },
    methods: {
        setStepWidth() {
            const innerWidth = this.$refs.inner.scrollWidth
            const totalCards = this.images.length
            this.stepWidth = innerWidth / totalCards
        },
        next() {
            this.step += 1
            this.adjustTransform()
        },
        prev() {
            this.step -= 1
            this.adjustTransform()
        },
        adjustTransform() {
            this.innerStyles = {
                transform: `translateX(-${this.step * this.stepWidth}px)`,
            }
        },
    },
}
</script>

<style scoped lang="scss">
.carousel {
    position: relative;
    width: 100%;
    height: 475px;

    .content {
        width: 100%;
        overflow: hidden;
    }
    .inner {
        transition: transform 0.2s;
        white-space: nowrap;
    }
    .image {
        width: 100%;
        height: 475px;
        display: inline-block;
    }
    .controls {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 2;
        padding: 0px 12px;

        button {
            width: 30px;
            height: 30px;
            opacity: 1;
            border: none;
            cursor: pointer;
            border-radius: 999px;
            transition: opacity 0.1s;
            background-color: rgba(255, 255, 255, 0.8);

            &:disabled {
                opacity: 0;
                pointer-events: none;
            }
        }
    }
}
</style>
