<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <span class="h1">Ratings</span>
        </div>
    </div>
</template>

<script>
import auth from '../auth'
export default {
    name: "ratings",
    route: {
        canActivate(){
            return auth.user.authenticated
        }
    }
}
</script>