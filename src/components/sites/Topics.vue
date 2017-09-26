<template>

  <standard-layout>
    <template slot="content">

      <page-header> TOPICS </page-header>
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

  export default {

    components: { StandardLayout, PageHeader },

    computed: {
      list() {
        return this.$store.getters.getTopicList;
      }
    },

    mounted() {
      fetchTopicList();
    }
  }
</script>