<template>

  <standard-layout>
    <template slot="content">

      <page-header> TOPICS </page-header>
      <div class="create-topic">
        <div class="row">
          <div class="col-xs-12">
            <div class="input-group">
            <input type="text" class="form-control create-field" placeholder="How to set up a project.." v-model="newTopic">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" @click="create">Add</button>
            </span>
            </div>
          </div>
        </div>
      </div>
      <div v-for="topic in list" class="panel panel-default">
        <div class="panel-body">
          {{ topic.description }}
        </div>
      </div>
    </template>
  </standard-layout>

</template>

<script>
  import StandardLayout from '../layout/Standard.vue'
  import PageHeader from '../elements/PageHeader.vue'
  import {fetchTopicList, createTopic} from '../../api/api'

  export default {

    components: { StandardLayout, PageHeader },

    data() {
      return {
        isCreateMode: false,
        newTopic: ''
      }
    },

    computed: {
      list() {
        return this.$store.getters.getTopicList;
      }
    },

    methods: {
      create() {
        if (this.newTopic !== '') {
          createTopic(this.newTopic);
        }
      }
    },

    mounted() {
      fetchTopicList();
    }
  }
</script>

<style lang="less">
  @import "../../assets/styles/css/min/Topics.less";
</style>