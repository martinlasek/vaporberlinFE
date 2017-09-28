<template>
  <standard-layout>
    <template slot="content">
      <page-header>
        VERSIONS
      </page-header>
      <div class="versions">
        <div class="v-1-0-1">
          <h4 class="text-center">1.0.1</h4>
          <white-box-small>
            <ul>
              <li>
                • Added versions page
              </li>
              <li>
                • Fixed that empty topics could be created
              </li>
            </ul>
          </white-box-small>
        </div>
      </div>
    </template>
  </standard-layout>
</template>

<script>
  import StandardLayout from '../layout/Standard.vue'
  import PageHeader from '../elements/PageHeader.vue'
  import WhiteBoxSmall from '../elements/WhiteBoxSmall.vue'

  export default {
    components: { PageHeader, StandardLayout, WhiteBoxSmall }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/Version.less";
</style>