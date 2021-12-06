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
              v-lazy="svg1"
              alt="cube"
            >
            <span class="title text-lg mt-4">Total Traceability</span>
            <span class="subtitle text-sm max-w-xs">Total traceability by drill down ensuring reliability & justification of indicators</span>
          </div>
          <div class="block flex flex-col items-start pl-8 pt-8">
            <img
              v-lazy="svg2"
              alt="chemistry"
            >
            <span class="title text-lg mt-4">Well Structured</span>
            <span class="subtitle text-sm max-w-xs">Structured analyses with selection, filter, and multiple granularity level criteria</span>
          </div>
          <div class="block flex flex-col items-start pl-8 pt-8">
            <img
              v-lazy="svg3"
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
        v-lazy="'/img/Group1.6e8cf84a.png'"
        class="absolute top-0 left-0 -z-10"
        alt="lines"
      >
      <img
        v-lazy="'/img/Group2.f4225452.png'"
        class="absolute bottom-44 right-0 -z-10"
        alt="lines"
      >
      <div class="w-82 mx-auto py-28">
        <div class="flex justify-between">
          <div>
            <img
              v-lazy="'/img/img.c75fd37c.png'"
              alt="someImage"
            >
          </div>
          <div class="flex flex-col max-w-xl justify-center">
            <span class="title">We specialize in asset tracing around the world</span>
            <span class="subtitle">Highly is a one stop solution for managing the financial affairs, effectively.</span>
          </div>
        </div>
        <div class="flex justify-between mt-52">
          <div class="flex flex-col max-w-xl justify-center">
            <span class="title">Measure precisely Corporate performance</span>
            <span class="subtitle">Highly is a one stop solution for managing the financial affairs, effectively.</span>
          </div>
          <div>
            <img
              v-lazy="'/img/img.c75fd37c.png'"
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
  },
  data () {
    return {
      svg1: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ8SURBVHgB7Vj/VcIwED58/m83sBuIE9QNZAPdQDYAJ4ANeEyATlA3QCeADcoG50W+QFr7I6khBV+/9+6lSS7pfcldLw1Rjx49evxLMPNYZC3yRJcEMfgBhmciC5EN5JHOGWJgLJLyHjPUn0WGIMIoYzoniEGRyBQrrggkaNeEIqO+BpGpbu8UWGHtIqMWY7qJD/h5ilWflK0mVlzhtmKOCfrXwdwK7jLHi1d1L4Zu0jBfHCw+yvy8QT+q2p0S3cRwqzH5BNxlA+NfHMblgthyjP/44COCBBxI/IB8AHOlrn7aFMQV+qn5PvIBTJgUXtD4HbcJYkPPjK8h3NYvAaNu5ac2QYy5Mi7kkZMSMNon6NuUuRUILLg8R9TmkSAE0Ff7HS+pR4Z+ZR4JRsDQGRpuNUVbLojZIY8EJ2Do5uJDGc8t8khnBKCvVn6Gcfr0OWG3hGZN4Ir8YyfyKXIvMkT5JXKS47NXAioWaG/0tNA1Q39MoWEZxJH2f6OtGMQRArjxSBI0BuDfqTaSKgjoNpQLrk+C1gSuqSX4eOxdinyoh8FgsKsbI/1bPL6ac0j7nFrCmQDvU/4W1QxGbR2mOBCRuXQZS5FI+5IcYU0AAbpVLxK5+cuqacgcb5hb7cSdlO/k+2sFP35kx58MdjxOY4xOet6DeIEdcBnnTADj1LFk7pNA7njgMK7NDqjrSH28ts7+LpNrIo274UKAC8drOhXY4RrEhgB0VtCbcajbOi5cE9bolBLgiuvI4KiLjyoCUh9x11eLBYP0vy+zcU3Iv89COT8P5i62KImPBzwfPosgENM5g49JL4PRGXamGz9vC8SHMtz6OrJHjx49Lg/fZ8j2m4ZPeNMAAAAASUVORK5CYII=',
      svg2: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM6SURBVHgB7ViLbdswED13gWoDc4OoE0idIN7A3sDeQOoEaidQNzA6gd0Jkk4gb2B3ggsPeowIRiEpS06QQA84WKKPvA8fjxSJZsyYMePTgZl3Whpu8aBlTR8F2tmNlrOWQktqva/oIwAZL5w2CeZAN8AXmgDaucSiSaLl0VH5p0VBd6VF0UQYFYA4IjTRjyIbND9azwb3Wo543mq5Q19F7wntwF7L1mlTWMAilVAHz8rRE1rV9NYAXYTnO4+OwuKtJUDp49GVivVAV2IRUkDmNlqW1NLgL7WUOS4Wi4unnzgts/MrQi/H2DvYuaDficYAmTyDBoVFjSSyr2AZqdtYdvawm9IYYMAq1OZxKjaA2qWRWT80BnAgc9o2MQNjrdSRs3XoKQa5GA/1DZXRE7V8tyEBXcjvUK5/1ui/xrsPlx47Cv2vByqEcHGNjPzErAg9yp7SmKNCmXVT4/cMjueOfgqq5Bi3xPPW2KWxAGVspzKLHmxoAj3GIkycMRK0s3HKSkZtBX9AW+NSakwAyvcfjCrbOY++CdJkPrvG7iAYgwGdPUfuqoZWAZ0UdoMFIMbgMvB/EhOkpZ+HnMOYwfIbYywNZZYjy53TJ2ZW6xgahcrohcKI0enD14l0/MACDU23IKe48aL4PckijuU3KtGQRbwP6AympW+wZcBQZWU1tow+l99r7A4C47wOwwdDFe42sspxruT+jaw0QXL/Rmg2sjNPdZPB3Y2CbO0Zd7vpc+YdfWlvuP8oIU65B0OFMc1GWMGOsbujMYAza6etjuBwhqALE3xA/8VGiH4NjQGykvUMfIvjtJuoSY7TRy3uhdSG4o65CXRjannoJuM6cFtdzpjigl+5YXil75AvsoS7z9XCWjcq1Nc7A/qjWjLzjdqMK2ozIu9pBDVkhy61/PcpcfdR/13LD9vO6I96j1GpKFufU1grNcqm8uiZMj3+5DkUcNC9B7VvGCqLGsrR24Wq2c0BZ0VWpjIhKLck7o2zCCzH+hp3bTIVEMQ9nhvzbP2/MjUdm9RkdJnkdloWm5Y/eD3RyxuGO7SL7m/fTd27A9k2NxlCk5KnumF4K3B3k8HccxyZMWPGjM+DJ0GSE32RAkOIAAAAAElFTkSuQmCC',
      svg3: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPOSURBVHgB7VmBddpADFX6OgCdoO4G7gQ4E4ROAJkAMoHJBCQTQCdIOoHTCWAD6ASwgSrhf+U439lnkzTte/7v6Zmn0+mkO0knG6IePXr0+O/BzAOhudCeS6yFxh65kVABGZVd6lx6b4gRW9BUaAjDFDNLZg5eLnQjNLHm/X0nZNEMRjzAiMQZn2GX9XQSGD91ZBLrJFRXRm8NLLqFQeaZB2TVuDFCZx+QWTi6KptRhw/UHoXQTujT1dXVF3luhA4BWcMf1MjshF6gy+grYsOqlQN6zPh5Kwsag16ERtQdEyqdINGpz1sqHb6Jmdz2BD4LHbCQwaNQilBIIvWYyvUgP3XOveFjYzbgvw4Q9wWfoHE6t8ZTK4aHFn+LHDhWHIufWXpSi28S32DZZlPqjNeFtLYPYawaVHhkh3bs1jgwsA23eAWXZfYzdG350jKLXemkJORAi/kD6MhDMjE5oMm0spI2dvGEzuM4absJWPNZKA3JdCmjR2BnF4ExNdQ3tgw5gSIw9gypE0HHYxx4ERpxtW+5Epq4BiG5NVxSOq/9B/DWbkjgtCYOb4ANUv6GLnBAL5eEqrvwDKMKp1LojTsX+kpVB5R3T46h8niisjx/d9ZIAmvHgcsGbMuBUsbnbcXUM16bxFw2f4zqk9Sssa9L5DoHtoG4dOWGblmMdEBL8jBCf86BKvaxYW5CuObrIEf/kzpA5m0iRVX/3DfQlAM7oaxBxtysKbUETiCLEE0osJFNDqyEZg3xuaayQ20MBQ90TtGUZ/LIYUt7iIIVEu3JUzJ14bXTPswR94mbAyiNUzvhzSa4tz1kn5DAy5B9MWVUy+KOnCPksrXWBb85tzRTGa8FnZc//b3G2B8+Ottr8rfQB9/arYASl3v4k7qbGLvH1gl4T9Gas+DT+4bNz9nTOBo0VSGF9yqXnVuFJuiJyKL6YjJyhu5CPZXw76gDYkJIS92IuzViO4u1c16EGoE1J1Te+l7EOPCI5xrlMkGiFp6kTmMchY7Mwy8Qcqa8mtD5QZcACy75hL1TSV7rjSy39DDXtBhdHakkFJ96lQX7y2zFAWveAnMTZ6zSsYbQ9n3gF5Uv8LahupDG912blx7NBySu5tjZvUBl0djF6GnrgGmhl9au6XNF3aE6M/2BjTleWp7W2otWDmCH9dLRuN0iLDIKfwKxP2gNamRS6NpD1zW9NbhsocdIbl8cz5CIx3dhyMwcGdNuLKCrSz91Gfj05cAk7IitL9FUdWiJKjQ18+i9ASfMSZjyN/LITVBhGLI5/wv/D/To0aNHjx7vhd/FINgnCC5A3gAAAABJRU5ErkJggg=='
    }
  }
}
</script>
