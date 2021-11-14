<template>
    <div id="app">
        <Grid>
            <PostDetails
                v-for="(post, index) in posts"
                :key="index"
                :post="post"
            />
        </Grid>
    </div>
</template>

<script>
import Grid from './components/Grid'
import PostDetails from './components/PostDetails'
export default {
    name: 'App',
    components: { PostDetails, Grid },
    data: () => ({
        posts: [],
    }),
    created() {
        this.api.getPosts().then((data) => (this.posts = data))
    },
}
</script>

<style lang="scss">
body {
    background-color: #232326;
    margin: 0px;
    padding: 0px;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-smoothing: antialiased;
    font-smoothing: grayscale;
    color: #fff;
    margin: 40px auto;
    max-width: 1440px;
}

.text-grey {
    color: #979ca4;
}
</style>
