<template>
    <nav>
        <ul class="nav nav-tabs">
            <li><router-link to="/overview">Overview</router-link></li>
            <li><router-link  to="/ratings">Ratings</outer-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "page-nav"
}
</script>
<style>
    .router-link-active{
        cursor: default;
        color: #000;
    }
</style>