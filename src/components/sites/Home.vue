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

      <div class="upcoming-meetup">
        <h2>UPCOMING MEETUP</h2>
      </div>

    </template>

  </standard-layout>
</template>

<script>
  import StandardLayout from '../layout/Standard'
  import boxLink from '../elements/BoxLink'
  import {fetchUpcomingMeetup} from '../../api/api'

  export default {

    components: { StandardLayout, boxLink },

    mounted() {
      fetchUpcomingMeetup();
    }
  }
</script>

<style lang="less">
 @import "../../assets/styles/css/min/Hero.less";
</style>
