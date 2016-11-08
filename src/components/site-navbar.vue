<template>
    <header class="navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <span class="navbar-brand">
                    <span class="glyphicon glyphicon-tree-conifer"></span>
                </span>
            </div>
            <lookup></lookup>
        </div>
    </header>
</template>
<script>
import Lookup from "./lookup.vue"

export default {
  name: 'site-navbar',
  components: { Lookup }
}
</script>
<style>
    .navbar-brand{
        background: #000;
        border-radius: 999px;
        line-height: 40px;
        width: 40px;
        height: 40px;
        font-size: 24px;
        padding: 0;
        text-align: center;
        margin-top: 10px;
    }
</style>