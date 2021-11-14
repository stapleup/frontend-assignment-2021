<template>
    <div class="author-info">
        <Avatar :src="avatar" :size="48" class="avatar" />
        <div class="meta">
            <div class="author">{{ name }}</div>
            <div class="handle">{{ handle }}</div>
        </div>
    </div>
</template>

<script>
import Avatar from '../Avatar'
export default {
    name: 'AuthorInfo',
    components: { Avatar },
    props: {
        name: {
            type: String,
            required: true,
        },
        handle: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped lang="scss">
.author-info {
    background-image: linear-gradient(rgba(0, 0, 0, 0), #000);
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 60px 20px 20px;
    display: flex;
    align-items: center;
    color: white;

    .avatar {
        margin-right: 12px;
    }

    .meta {
        flex-grow: 1;
        justify-content: stretch;

        .author {
            font-weight: 600;
            font-size: 1.2rem;
            margin-bottom: 5px;
        }

        .handle {
            opacity: 0.7;
        }
    }
}
</style>
