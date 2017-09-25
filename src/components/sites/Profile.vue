<template>
  <standard-layout>
    <template slot="content">
      <page-header>
        PROFILE
      </page-header>
      <div class="row">
        <div class="col-xs-4">
          <div id="account" class="panel panel-default">
            <div class="panel-body">
              <h2>Account</h2>
              <hr>
              <div class="form-group">
                <div class="title"><b>Email</b></div>
                <div v-if="!editMode" class="value">{{ user.email }}</div>
                <input v-if="editMode" type="text" class="form-control" :value="user.email">
              </div>
              <div class="form-group">
                <div class="title"><b>Firstname</b></div>
                <div v-if="!editMode" class="value">{{ user.firstname }}</div>
                <input v-if="editMode" type="text" class="form-control" :value="user.firstname">
              </div>
              <div class="form-group">
                <div class="title"><b>Lastname</b></div>
                <div v-if="!editMode" class="value">{{ user.lastname }}</div>
                <input v-if="editMode" type="text" class="form-control" :value="user.lastname">
              </div>
              <div class="form-group">
                <div class="title"><b>Website</b></div>
                <div v-if="!editMode" class="value"><a :href="user.website">{{ user.website }}</a></div>
                <input v-if="editMode" type="text" class="form-control" :value="user.website">
              </div>
              <standard-button v-if="!editMode" toEmit="edit" @edit="edit" text="edit" />
              <standard-button v-if="editMode" toEmit="save" @save="save" text="save" />
            </div>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="panel panel-default">
            <div class="panel-body">
              <h2>Voted Topics</h2>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </template>
  </standard-layout>
</template>

<script>
  import StandardLayout from '../layout/Standard.vue';
  import PageHeader from '../elements/PageHeader.vue'
  import StandardButton from '../elements/SubmitButton.vue';
  import {fetchUser} from '../../api/api';

  export default {
    components: { StandardLayout, PageHeader, StandardButton },

    data() {
      return {
        editMode: false
      }
    },

    computed: {
      user() {
        return this.$store.getters.getUser;
      }
    },

    methods: {
      edit() {
        this.editMode = !this.editMode;
      },

      save() {
        this.editMode = !this.editMode;
      }
    },

    mounted() {
      fetchUser();
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/Profile.less";
</style>