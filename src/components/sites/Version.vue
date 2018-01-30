<template>
  <standard-layout>
    <template slot="content">
      <page-header>
        VERSIONS
      </page-header>
      <div class="versions">
        <div v-for="version in versions" :class="createVersionClass(version)">
          <h4 class="text-center">{{ version.number }}</h4>
          <white-box-small>
            <ul>
              <li v-for="change in version.changes">
                {{ change }}
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
  import {versions} from '../../utils/versions';

  export default {
    components: { PageHeader, StandardLayout, WhiteBoxSmall },

    data() {
      return {
        versions: versions
      }
    },

    methods: {
      createVersionClass(version) {
        return version.number.split('.').join('-');
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/Version.less";
</style>
