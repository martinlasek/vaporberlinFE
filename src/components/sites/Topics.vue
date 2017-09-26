<template>

  <standard-layout>
    <template slot="content">

      <page-header> TOPICS </page-header>
      <div class="create-topic">
        <div class="row">
          <div class="col-xs-12">
            <submit-button text="create new topic" toEmit="clicked" @clicked="create"/>
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
  import {fetchTopicList} from '../../api/api'
  import SubmitButton from '../elements/SubmitButton.vue'

  export default {

    components: { StandardLayout, PageHeader, SubmitButton },

    computed: {
      list() {
        return this.$store.getters.getTopicList;
      }
    },

    methods: {
      create() {
        console.log("create");
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