<template>
    <div class="post-details">
        <div class="preview">
            <carousel :images="images" />
            <author-info
                :name="post.influencerName"
                :handle="post.handle"
                :avatar="post.influencerImage"
            />
        </div>
        <div class="posted-on text-grey">
            Posted on <span>{{ date }}</span>
        </div>
        <div class="stats">
            <stat label="Impressions" :count="stats.impressions" />
            <stat label="Reach" :count="stats.reach" />
            <stat
                label="Engagement"
                :count="stats.engagement"
                :is-percent="true"
            />
        </div>
    </div>
</template>

<script>
import Carousel from './details/Carousel'
import AuthorInfo from './details/AuthorInfo'
import moment from 'moment'
import Stat from './details/Stat'

export default {
    name: 'PostDetails',
    components: { Stat, AuthorInfo, Carousel },
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    computed: {
        date() {
            const { postingDate } = this.post
            return moment(postingDate).format('MMMM Do YYYY')
        },
        stats() {
            return this.post.stats
        },
        images() {
            const { images } = this.post
            return images.length > 0
                ? images
                : ['https://via.placeholder.com/500/2b2c30?text=Image+missing']
        },
    },
}
</script>

<style scoped lang="scss">
.post-details {
    width: 100%;

    .preview {
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .posted-on {
        text-align: center;
        font-size: 0.8rem;
        padding: 20px 0px;
        font-weight: 500;

        span {
            margin-left: 2px;
            color: white;
        }
    }

    $space: 0.25rem;
    .stats {
        margin-left: -$space;
        margin-right: -$space;
        display: flex;

        & > * {
            margin-left: $space;
            margin-right: $space;
        }
    }
}
</style>
