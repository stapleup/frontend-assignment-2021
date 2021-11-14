<template>
    <div :class="['stat', !count && 'dimmed']">
        <div class="count">{{ formattedNumber }}</div>
        <label class="text-grey">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'Stat',
    props: {
        label: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            default: 0,
        },
        isPercent: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        formattedNumber() {
            if (!this.count) return '-'
            return `${(this.count || 0).toLocaleString()}${
                this.isPercent ? '%' : ''
            }`
        },
    },
}
</script>

<style scoped lang="scss">
.stat {
    background-color: #2b2c30;
    border-radius: 5px;
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
    padding: 12px 0px;

    .count {
        font-size: 1.2rem;
        margin-bottom: 2px;
        font-weight: 500;
    }

    label {
        text-transform: uppercase;
        font-size: 0.8rem;
    }

    &.dimmed {
        opacity: 0.5;
    }
}
</style>
