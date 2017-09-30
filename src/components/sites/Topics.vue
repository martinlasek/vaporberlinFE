<template>

  <standard-layout>
    <template slot="content">

      <page-header> TOPICS </page-header>

      <hint v-if="!isAuthenticated">
        login to create or vote a topic
      </hint>

      <div v-if="isAuthenticated" class="create-topic">
        <div class="row">
          <div class="col-xs-12">
            <div class="input-group">
            <input
              type="text"
              class="form-control create-field"
              placeholder="How to set up a project.."
              v-model="newTopic"
              @keyup.enter="create"
            >
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" @click="create">Add</button>
            </span>
            </div>
          </div>
        </div>
      </div>

      <div v-for="topic in descList" class="topic-list">
        <div class="votes" @click="vote(topic.id)">
          <span aria-hidden="true" class="glyphicon glyphicon-chevron-up pull-left"></span>
          <span class="amount">{{ topic.votes }}</span>
          <span v-if="isAuthenticated && hasVoted(topic)" class="voted"> voted </span>
        </div>
        <div class="panel panel-default">
          <div class="panel-body">
            {{ topic.description }}
          </div>
        </div>
      </div>
    </template>
  </standard-layout>

</template>

<script>
  import StandardLayout from '../layout/Standard.vue'
  import PageHeader from '../elements/PageHeader.vue'
  import Hint from '../elements/Hint.vue';
  import {fetchTopicList, createTopic, voteTopic, isAuthenticated} from '../../api/api'

  export default {

    components: { StandardLayout, PageHeader, Hint },

    data() {
      return {
        isCreateMode: false,
        newTopic: ''
      }
    },

    computed: {
      list() {
        return this.$store.getters.getTopicList;
      },

      descList() {
        return this.list.sort((a, b) => b.votes - a.votes);
      },

      isAuthenticated() {
        return isAuthenticated();
      },

      user() {
        return this.$store.getters.getUser;
      }
    },

    methods: {
      create() {
        if (this.isCreatable()) {
          createTopic(this.newTopic);
          this.newTopic = '';
        }
      },

      vote(id) {
        voteTopic(id);
      },

      isCreatable() {
        let newTopic = this.newTopic;

        if (newTopic.replace(/\s/g, '').length === 0) {
          return false
        }

        return this.newTopic !== '';
      },

      hasVoted(topic) {
        const res = topic.voter.find(userId => userId === this.user.id);
        return res !== undefined;
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