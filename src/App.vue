<template>
    <div id="app">
    
        <div id="content ">
            <nav class="navbar navbar-light mb-0 navbar-expand-lg shadow bg-white">
                <a class="navbar-brand font-weight-bolderx" href="#">Vue-dashboard</a>
                <form class="form-inline mr-auto ">
                    <button type="button" @click="openSidenav" class="btn btn-light btn-sm mr-3">
                           <i v-if="activeMenu" class="fas fa-arrow-left"></i>
                           <i v-if="!activeMenu" class="fas fa-arrow-right"></i>
                        </button>
                    <input class="form-control d-none d-xl-block form-control-sm f-form-control-solid mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    
                </form>
    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mt-1 mr-4">
                            <button class="btn btn-sm btn-outline-primary "><i class="fas fa-book"></i> Documentation </button>
                        </li>
                        <li class="nav-item dropdown mt-1 no-caret mr-3 sb-dropdown-notifications ">
                            <button class="btn btn-sm btn-white text-secondary" id="navbarDropdownAlerts" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fas fa-bell fa-lg"></i> <span class="badge badge-danger">9</span></button>
                            <div class="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up " aria-labelledby="navbarDropdownAlerts">
                                <h3 class="dropdown-header sb-dropdown-notifications-header">
                                    <i class="fas fa-bell fa-lg"></i> การแจ้งเตือน
                                </h3>
                                <a class="dropdown-item sb-dropdown-notifications-item" v-for="(n,k) in 20" :key="k" href="javascript:void(0);">
    
                                    <div class="sb-dropdown-notifications-item-content content">
                                        <h6 class="sb-dropdown-notifications-item-content-details text-dark ">December 29, 2019</h6>
                                        <div class="sb-dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                                    </div>
                                </a>
                                <!-- <a class="dropdown-item sb-dropdown-notifications-item" href="javascript:void(0);">
                                 
                                    <div class="sb-dropdown-notifications-item-content content">
                                        <h6 class="sb-dropdown-notifications-item-content-details text-dark ">December 29, 2019</h6>
                                        <div class="sb-dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                                    </div>
                                  </a> -->
    
                            </div>
                        </li>
                        <li class="nav-item dropdown no-caret  f-dropdown-user">
                            <a class="btn sb-btn-icon" id="navbarDropdownUserImage" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img class="img-fluid" src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-1/p320x320/69734133_2398734363547083_784853463153508352_n.jpg?_nc_cat=107&_nc_eui2=AeF3WHXK5Ky-VMSi_QR62ICtFqHEP_E2So9wfAvP_m3nhmM4uAEGwQsa6-6Cbn-NOtdifjp4LTiAWLXRfirAK8-yYBUeMAgys-ooLcSUk6PPOw&_nc_ohc=kg88Q6goJ6MAX8bPUf4&_nc_ht=scontent.fbkk10-1.fna&_nc_tp=1002&oh=4d15d0a92e57163ee2bc5653d6164e02&oe=5EA1391C" style="visibility: visible;"></a>
                            <div class="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                                <h6 class="dropdown-header d-flex align-items-center">
                                    <img class="f-dropdown-user-img" src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-1/p320x320/69734133_2398734363547083_784853463153508352_n.jpg?_nc_cat=107&_nc_eui2=AeF3WHXK5Ky-VMSi_QR62ICtFqHEP_E2So9wfAvP_m3nhmM4uAEGwQsa6-6Cbn-NOtdifjp4LTiAWLXRfirAK8-yYBUeMAgys-ooLcSUk6PPOw&_nc_ohc=kg88Q6goJ6MAX8bPUf4&_nc_ht=scontent.fbkk10-1.fna&_nc_tp=1002&oh=4d15d0a92e57163ee2bc5653d6164e02&oe=5EA1391C"
                                        style="visibility: visible;">
                                    <div>
                                        <div class="text-dark">Tanapong Saramon</div>
                                        <div>fandzaz@gmail.com</div>
                                    </div>
                                </h6>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item small" href="javascript:void(0);">
                                        <i class="fas fa-cog"></i>
                                        Account
                                    </a>
                                <a class="dropdown-item small" href="javascript:void(0);">
                                        <i class="fas fa-sign-out-alt"></i>
                                        Logout</a>
                            </div>
                        </li>
    
                    </ul>
                </div>
    
            </nav>
    
            <div class="wrapper">
                <!-- Sidebar  -->
                <nav id="sidebar" class="shadow d-none d-xl-block d-lg-none d-md-none ">
    
                    <ul class="list-unstyled components mt-3">
                        <p style="font-size:12px" class="m-0  font-weight-bold text-secondary">ส่วนการจัดการ</p>
                        <li class="active">
                            <a href="#homeSubmenu" class="font-weight-light" aria-expanded="false"><i class="fas fa-chart-bar fa-lg mr-2"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="font-weight-light"><i class="fas fa-user-circle fa-lg mr-2"></i> About</a>
                        </li>
                        <p style="font-size:12px" class="m-0 font-weight-bold text-secondary">ส่วนการบริหาร</p>
                        <!-- <li>
                                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                                <ul class="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                        <a href="#">Page 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 3</a>
                                    </li>
                                </ul>
                            </li> -->
    
                    </ul>
    
                </nav>
    
                <div class="body-content ">
    
                    <router-view />
    
                </div>
    
            </div>
        </div>
    
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'App',
    data() {
        return {
            activeMenu:false
        }
    },
    mounted() {
         if (!$('#sidebar').hasClass('active')) {
            this.activeMenu = true;
         }else{
             this.activeMenu = false;
         }
    },
    methods: {
        openSidenav() {
            if (!$('#sidebar').hasClass('active')) {
                $('.body-content').addClass('content-active');
                 this.activeMenu = false;
            } else {
                $('.body-content').removeClass('content-active');
                this.activeMenu = true;
            }
            $('#sidebar').toggleClass('active');
        }
    },
}
</script>

<style>
#app {
    font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
