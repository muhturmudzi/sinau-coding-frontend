<template>
    <div class="container-fluid">
        <div class="row mt-4">
            <div class="col-3 align-item-center">
                <div class="container-left">
                    <div class="image">
                        <a href="">
                            <img src="/images/man.png" class="img-circle" alt="pas foto" />
                        </a>
                    </div>
                    <h5>Hi, I'm Muhammad Turmudzi</h5>
                    <div class="d-flex">
                        <a href="">
                            <img src="/images/google-plus.png" class="social-media" alt="G+">
                        </a>
                        <a href="">
                            <img src="/images/instagram.png" class="social-media" alt="instagram">
                        </a>
                        <a href="">
                            <img src="/images/twitter.png" class="social-media" alt="twitter">
                        </a>
                        <a href="">
                            <img src="/images/facebook.png" class="social-media" alt="facebook">
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-6 align-item-center">
                <div class="container-main">
                    <h1>Hello, i'm a boy</h1>
                </div>
            </div>
            <div class="col-3">
                <div class="container-right">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        datas:{
            image:[{
                
            }]
        }
    };
</script>

<style scoped>
    .container-left, .container-main {
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175) !important;
        padding: 10px;
    }

    .col-3 {
        text-align: center;
    }

    .image {
        margin-top: 20px;
    }

    h5 {
        margin-top: 30px;
    }

    .img-circle {
        width: 150px;
        /* height: 150px; */
        /* border: 20px solid; */
        border-radius: 50%;
    }

    .d-flex {
        /* justify-content: space-evenly; */
        justify-content: center;
    }

    .d-flex .social-media {
        width: 30px;
        height: 30px;
        margin: 10px;
    }
</style>