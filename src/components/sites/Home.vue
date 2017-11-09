<template>
  <standard-layout>

    <template slot="content">

      <div class="header">
        <h1>VaporBerlin</h1>
      </div>

      <div class="boxes">
        <box-link title="JOIN THE MEETUP" external="true" route="https://www.meetup.com/VaporBerlin/" target="_blank">
          <template>
            <img src="../../assets/images/meetup_logo.min.png" alt="">
          </template>
        </box-link>

        <box-link title="VOTE A TOPIC" route="/topics">
          <template>
            <button class="btn">
              <span class="glyphicon glyphicon-chevron-up pull-left" aria-hidden="true"></span>
                <span class="quote pull-left">
                  "How to create a route"
                </span>
            </button>
          </template>
        </box-link>
      </div>

      <div class="upcoming-meetup-wrapper">
        <page-header>
          UPCOMING MEETUP
        </page-header>
        <div class="upcoming-meetup">
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <div class="title">
                <h2 class="header">title</h2>
                <h3> <a :href="meetup.link" target="_blank"> {{ meetup.title }} </a></h3>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3">
              <div class="date">
                <h2 class="header">date</h2>
                <h3>{{ meetup.date }}</h3>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3">
              <div class="time">
                <h2 class="header">time</h2>
                <h3>{{ meetup.timeStart }} - {{ meetup.timeEnd }}</h3>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-xs-12 col-sm-8">
              <h2 class="header">Topics</h2>
              <h3 v-for="topic in meetup.topics"> {{ topic.description }}</h3>
            </div>
            <div class="col-xs-12 col-sm-4">
              <h2 class="header"> speaker </h2>
              <h3 v-for="speaker in meetup.speakers"> {{ speaker}}</h3>
            </div>
          </div>
        </div>
      </div>

    </template>

  </standard-layout>
</template>

<script>
  import StandardLayout from '../layout/Standard'
  import BoxLink from '../elements/BoxLink'
  import {fetchUpcomingMeetup} from '../../api/api'
  import PageHeader from '../elements/PageHeader.vue'

  export default {

    components: { StandardLayout, BoxLink, PageHeader },

    computed: {
      meetup() {
        return this.$store.getters.getUpcomingMeetup;
      }
    },

    mounted() {
      fetchUpcomingMeetup();
    }
  }
</script>

<style lang="less">
 @import "../../assets/styles/css/min/Hero.less";
</style>
