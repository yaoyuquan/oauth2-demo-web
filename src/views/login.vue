<template>
    <el-row>
        <el-col span="6"></el-col>
        <el-col span="6"></el-col>
        <el-col span="6"></el-col>
        <el-col span="6">
            <el-button @click="redirectToGithub" type="primary"> login with github </el-button>
        </el-col>
    </el-row>
    
</template>
<script>

export default {
    methods : {
        redirectToGithub() {
            let redirectUri = encodeURIComponent('http://localhost:5173/callback');
            let state = Date.parse(new Date());
            let url = `http://github.com/login/oauth/authorize?client_id=dccb60502181fae2f1d4&redirect_uri=${redirectUri}&scope=user&state=${state}`

            window.location.href = url
            
        }

    }

}
</script>
