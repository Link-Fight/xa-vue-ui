<template>
    <div class="loading">
        <span v-for="n in 5" :key="n" :style="{background:themeColor}"></span>
    </div>
</template>
<script>
export default {
    props: {
        themeColor: {
            type: String,
            default: '#108ee9'
        }
    }
}
</script>

<style scoped>
.loading {
    width: 150px;
    height: 10px;
    margin: 0 auto;
    text-align: center;
}

.loading span {
    display: inline-block;
    width: 10px;
    height: 100%;
    margin-right: 5px;
    border-radius: 50%;
    background: #108ee9;
    -webkit-animation: load 1.04s ease infinite;
}

.loading span:last-child {
    margin-right: 0px;
}

@-webkit-keyframes load {
    0% {
        opacity: 1;
        -webkit-transform: scale(1.3);
    }
    100% {
        opacity: 0.2;
        -webkit-transform: scale(.3);
    }
}

.loading span:nth-child(1) {
    -webkit-animation-delay: 0.13s;
}

.loading span:nth-child(2) {
    -webkit-animation-delay: 0.26s;
}

.loading span:nth-child(3) {
    -webkit-animation-delay: 0.39s;
}

.loading span:nth-child(4) {
    -webkit-animation-delay: 0.52s;
}

.loading span:nth-child(5) {
    -webkit-animation-delay: 0.65s;
}
</style>