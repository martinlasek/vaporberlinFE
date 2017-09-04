<template>
  <std-layout>

    <template slot="hero">
      
      <div class="row">

        <div class="col-xs-12 col-sm-6">
          <box-link title="JOIN THE MEETUP" route="https://www.meetup.com/VaporBerlin/" target="_blank">
            <template>
              <img src="../../assets/images/meetup_logo.min.png" alt="">
            </template>
          </box-link>
        </div>

        <div class="col-xs-12 col-sm-6">
          <box-link title="VOTE A TOPIC" route="https://www.meetup.com/VaporBerlin/" target="_blank">
            <template>
              <button class="btn">
                <span class="glyphicon glyphicon-chevron-up pull-left" aria-hidden="true"></span>
                <span class="quote pull-left">
                  "Hey! Listen!"
                </span>
              </button>
            </template>
          </box-link>
        </div>

      </div>
      
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