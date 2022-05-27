<template>
    <div id="main-wrapper">
        <HeaderComponent />
        <SidebarComponent />

        <div class="page-wrapper">
            <div class="container-fluid">
            <BreadcrumbsComponent />
            <div class="row">
                <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <router-view></router-view>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <!-- footer -->
            <!-- ============================================================== -->
            <footer class="footer">
            © 2022 Admin Pro
            </footer>
            <!-- ============================================================== -->
            <!-- End footer -->
            <!-- ============================================================== -->
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../Shared/HeaderComponent.vue'
import SidebarComponent from '../Shared/SidebarComponent.vue'
import BreadcrumbsComponent from '../Shared/BreadcrumbsComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  }
}
</script>