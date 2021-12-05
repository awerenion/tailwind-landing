<template>
  <div>
    <div class="w-82 mx-auto">
      <Header />
      <div class="flex justify-between items-center relative">
        <div class="flex flex-col max-w-580">
          <span class="text-xl font-bold h-216 mt-14 mb-2">Optimize your performance management</span>
          <span class="subtitle mb-14">Highly is a one stop solution for managing the financial affairs, effectively.</span>
          <basic-button class="bg-blue-some w-183 mb-28">
            <span class="mr-2 font-bold">Get Started</span>
            <img
              src="../assets/Arrow.png"
              alt="Arrow"
            >
          </basic-button>
        </div>
        <div>
          <img
            class="pb-36"
            src="../assets/graph.png"
            alt="assetGraph"
          >
        </div>
      </div>
      <div class="flex justify-between items-center">
        <img
          src="../assets/Companies/chase.png"
          alt="chase"
        >
        <img
          src="../assets/Companies/asana.png"
          alt="chase"
        >
        <img
          src="../assets/Companies/google.png"
          alt="chase"
        >
        <img
          class="z-10"
          src="../assets/Companies/buzz.png"
          alt="chase"
        >
        <img
          src="../assets/Companies/wlmart.png"
          alt="chase"
        >
      </div>
    </div>

    <section class="mt-48 bg-blue-darker">
      <div class="w-82 mx-auto pt-20 pb-20">
        <div class=" text-center max-w-780 mx-auto mb-8">
          <span class="font-bold text-4xl tracking-wider">We specialize in asset tracing <br> around the world</span>
          <p class="font-light opacity-70 text-2xl mt-2">
            Highly is a one stop solution for managing <br> the financial affairs, effectively.
          </p>
        </div>
        <div class="flex justify-between">
          <div class="block ml-0 flex flex-col items-start pl-8 pt-8">
            <img
              src="@/assets/cube.png"
              alt="cube"
            >
            <span class="title text-lg mt-4">Total Traceability</span>
            <span class="subtitle text-sm max-w-xs">Total traceability by drill down ensuring reliability & justification of indicators</span>
          </div>
          <div class="block flex flex-col items-start pl-8 pt-8">
            <img
              src="@/assets/chem.png"
              alt="chemistry"
            >
            <span class="title text-lg mt-4">Well Structured</span>
            <span class="subtitle text-sm max-w-xs">Structured analyses with selection, filter, and multiple granularity level criteria</span>
          </div>
          <div class="block flex flex-col items-start pl-8 pt-8">
            <img
              src="@/assets/brain.png"
              alt="brain"
            >
            <span class="title text-lg mt-4">High Integrity</span>
            <span class="subtitle text-sm max-w-xs">Adapted and business-oriented user repository</span>
          </div>
        </div>
      </div>
    </section>

    <section class="w-100 relative">
      <img
        class="absolute top-0 left-0 -z-10"
        src="@/assets/Group1.png"
        alt="lines"
      >
      <img
        class="absolute bottom-44 right-0 -z-10"
        src="@/assets/Group2.png"
        alt="lines"
      >
      <div class="w-82 mx-auto py-28">
        <div class="flex justify-between">
          <div>
            <img
              src="@/assets/img.png"
              alt="someImage"
            >
          </div>
          <div class="flex flex-col max-w-xl">
            <span class="title">We specialize in asset tracing around the world</span>
            <span class="subtitle">Highly is a one stop solution for managing the financial affairs, effectively.</span>
          </div>
        </div>
        <div class="flex justify-between mt-52">
          <div class="flex flex-col max-w-xl">
            <span class="title">Measure precisely Corporate performance</span>
            <span class="subtitle">Highly is a one stop solution for managing the financial affairs, effectively.</span>
          </div>
          <div>
            <img
              src="@/assets/img.png"
              alt="someImage"
            >
          </div>
        </div>
      </div>
    </section>

    <div class="bg-blue-darker">
      <div class="flex justify-between items-center h-72 w-82 mx-auto">
        <div class="flex flex-col">
          <span class="text-3xl max-w-lg font-bold">Are you interested in our solutions?</span>
          <span class="subtitle max-w-2xl">Tell us more about your project, our expert will contact you as soon as possible.</span>
        </div>
        <basic-button class="bg-blue-some w-140">
          <span class="mr-2 font-bold">Get Started</span>
        </basic-button>
      </div>
    </div>

    <contacts />

    <Footer />
  </div>
</template>

<script>
import BasicButton from '../components/BasicButton.vue'
import Header from '../components/Header.vue'
import Contacts from '../components/Contacts.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'MainPage',
  components: {
    Header,
    Contacts,
    BasicButton,
    Footer
  }
}
</script>
