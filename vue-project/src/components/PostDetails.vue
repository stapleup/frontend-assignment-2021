<template>
    <div class="post-details">
        <div class="preview">
            <carousel :images="post.images" />
            <author-info
                :name="post.influencerName"
                :handle="post.handle"
                :avatar="post.influencerImage"
            />
        </div>
        <div class="posted-on text-grey">
            Posted on <span>{{ date }}</span>
        </div>
    </div>
</template>

<script>
import Carousel from './details/Carousel'
import AuthorInfo from './details/AuthorInfo'
import moment from 'moment'

export default {
    name: 'PostDetails',
    components: { AuthorInfo, Carousel },
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    computed: {
        date() {
            const { postingDate } = this.post
            return moment(postingDate).format('MMM DD, YYY')
        },
    },
}
</script>

<style scoped lang="scss">
.post-details {
    width: 100%;

    .preview {
        position: relative;
    }

    .posted-on {
        text-align: center;
        font-size: 0.8rem;
        padding: 12px 0px;
        span {
            margin-left: 2px;
            color: white;
            font-weight: 500;
        }
    }
}
</style>
