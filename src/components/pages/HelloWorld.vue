<template>
<div class="hello">
    <div class="">
        <Content :title="'Dashboard'" :overlap="true">
            <template v-slot:content>
                <div class="shadow-sm bg-white p-3">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <line-chart v-if="datacollection" :width="300" :height="300" :options="{'responsive':true,maintainAspectRatio:false}" :chart-data="datacollection"></line-chart>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                            <line-chart v-if="datacollection" :width="300" :height="300" :options="{'responsive':true,maintainAspectRatio:false}" :chart-data="datacollection"></line-chart>
                        </div>
                    </div>

                    <div class="line"></div>

                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div class="line"></div>

                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <div class="line"></div>

                    <h3>Lorem Ipsum Dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </template>
        </Content>
       

    </div>

</div>
</template>

<script>
import Content from '@/components/widget/Content';
import LineChart from '@/components/chart/LineChart';
export default {
    components: {
        LineChart,
        Content
    },
    name: 'HelloWorld',
    data() {
        return {
            datacollection: null,
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
                datasets: [{
                    label: 'Data One',

                    data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }, {
                    label: 'Data One',

                    data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                }]
            }
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    },
}
</script>

<style scoped>
.header-title {
    z-index: 100;
    position: relative;
    padding-bottom: 50px;

    background-color: #0061f2;
    background-image: linear-gradient(135deg, #0061f2 0%, rgba(105, 0, 199, 0.8) 100%);
}

.in-content {
    z-index: 102;
    position: relative;
    top: -70px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
