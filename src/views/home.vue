<template>
    <div>
        <p>用户名 {{nickname}}</p>
        <p>头像 <img :src="avatarUrl" /></p>
        <p>所在地 {{location}}</p>
    </div>
</template>
<script>
import http from 'axios'
export default {

    data() {
        return {
            nickname: '',
            avatarUrl: '',
            location: ''
        }
    },

    mounted() {


        let token = sessionStorage.getItem('token')
        var _this = this

        if(token != null) {
            http.request({
                url: 'https://api.github.com/user',
                method: 'GET',
                headers: {
                    'Authorization': 'token ' + token
                }
            }).then(function(response) {
                _this.nickname = response.data.name
                _this.avatarUrl = response.data.avatar_url
                _this.location = response.data.location
            })
        }
        




    }

}
</script>
