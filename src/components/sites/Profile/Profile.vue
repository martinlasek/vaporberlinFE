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
                <span :class="activeClass('email')" @click="activate('email')">
                  Email
                </span>
                <span :class="activeClass('deleteUser')" @click="activate('deleteUser')">
                  Delete
                </span>
              </div>
              <div class="right">
                <general v-if="isActive('general')" />
                <email v-if="isActive('email')" />
                <delete-user v-if="isActive('deleteUser')" />
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
  import Email from './Email.vue'
  import DeleteUser from './DeleteUser.vue'

  export default {
    components: { StandardLayout, PageHeader, General, Email, DeleteUser },

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
