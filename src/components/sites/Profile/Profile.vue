<template>
  <standard-layout>
    <template slot="content">
      <div class="profile">
        <page-header> PROFILE </page-header>

        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2">
            <div class="box">
              <div class="left">
                <span :class="activeClass('general')" @click="activate('general')">
                  General
                </span>
              </div>
              <div class="right">
                <general v-if="isActive('general')" />
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

  export default {
    components: { StandardLayout, PageHeader, General },

    data() {
      return {
        activeTab: 'general'
      }
    },

    methods: {

      activate(tab) {
        this.activeTab = tab;
      },

      activeClass(tab) {
        if (this.activeTab === tab) return 'active';
        return  '';
      },

      isActive(tab) {
        return this.activeTab === tab;
      }
    }
  }
</script>

<style lang="less">
  @import "../../../assets/styles/css/min/Profile.less";
</style>
