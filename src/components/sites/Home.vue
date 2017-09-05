<template>
  <std-layout>

    <template slot="hero">

      <box-link title="JOIN THE MEETUP" route="https://www.meetup.com/VaporBerlin/" target="_blank">
        <template>
          <img src="../../assets/images/meetup_logo.min.png" alt="">
        </template>
      </box-link>

      <box-link title="VOTE A TOPIC" route="https://www.meetup.com/VaporBerlin/" target="_blank">
        <template>
          <button class="btn">
            <span class="glyphicon glyphicon-chevron-up pull-left" aria-hidden="true"></span>
                <span class="quote pull-left">
                  "How to setup vapor"
                </span>
          </button>
        </template>
      </box-link>
      
    </template>

  </std-layout>
</template>

<script>
  import stdLayout from './../layout/Standard'
  import boxLink from './../elements/BoxLink'

  export default {

    components: { stdLayout, boxLink }
  }
</script>

<style lang="less">
 @import "../../assets/styles/css/min/Hero.less";
</style>