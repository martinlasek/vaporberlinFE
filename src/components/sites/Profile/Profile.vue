<template>
  <standard-layout>
    <template slot="content">
      <div class="profile">
        <page-header> PROFILE </page-header>

        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <div class="box">
              <div class="left">
                <span :class="{'active': activeTab === 'general'}" @click="activate('general')">
                  General
                </span>
                <span :class="{'active': activeTab === 'security'}" @click="activate('security')">
                  Security
                </span>
              </div>
              <div class="right">
                <general v-if="activeTab === 'general'" />
                <security v-if="activeTab === 'security'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </standard-layout>
</template>

<script>
  import StandardLayout from '../../layout/Standard.vue'
  import PageHeader from '../../elements/PageHeader.vue'
  import General from './General.vue'
  import Security from './Security.vue'

  export default {
    components: { StandardLayout, PageHeader, General, Security },

    data() {
      return {
        activeTab: 'general'
      }
    },

    methods: {

      activate(tab) {
        this.activeTab = tab;
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/css/min/Profile.less";
</style>
