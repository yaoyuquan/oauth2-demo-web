<template>
    <div>call back</div>
</template>
<script>
import http from 'axios'
export default {

    mounted() {


        let param = this.$route.query

        let url = `/api/login/${param.code}`


        var _this = this
        http.request({
            method: 'POST',
            url : url,
            withCredentials: true
        }).then(function(response) {
            if(response.data.access_token != null && response.data.access_token != undefined) {
                sessionStorage.setItem('token', response.data.access_token)

                _this.$router.push({path: '/'})
            }

        })
    }

}
</script>
