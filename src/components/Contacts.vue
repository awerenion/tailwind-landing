<template>
  <div class="relative">
    <img
      src="../assets/Group3.png"
      alt="lines"
      class="absolute top-0 left-0"
    >
    <div class="w-62 mx-auto py-16 flex flex-col text-center">
      <div class="flex flex-col mb-12">
        <span class="title mr-0">Contact us to learn more</span>
        <span class="subtitle">Highly is a one stop solution for managing <br>the financial affairs, effectively.</span>
      </div>
      <div class="flex items-center flex-col">
        <div class="flex justify-between">
          <div class="mr-4">
            <input
              v-model.trim="$v.contData.firstName.$model"
              class="input"
              placeholder="First Name"
            >
            <div
              v-if="!$v.contData.firstName.required && $v.contData.firstName.$dirty"
              class="error"
            >
              required
            </div>
          </div>
          <div>
            <input
              v-model.trim="$v.contData.lastName.$model"
              class="input"
              placeholder="Last Name"
            >
            <div
              v-if="!$v.contData.lastName.required && $v.contData.lastName.$dirty"
              class="error"
            >
              required
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <div class="mr-4">
            <input
              v-model.trim="$v.contData.emailAddress.$model"
              class="input"
              placeholder="Email Address"
            >
            <div
              v-if="!$v.contData.emailAddress.required && $v.contData.emailAddress.$dirty"
              class="error"
            >
              required
            </div>
            <div
              v-if="!$v.contData.emailAddress.email && $v.contData.emailAddress.$dirty"
              class="error"
            >
              email
            </div>
          </div>
          <div>
            <input
              v-model.trim="$v.contData.telephone.$model"
              placeholder="Phone number"
              class="input"
            >
            <div
              v-if="!$v.contData.telephone.required && $v.contData.telephone.$dirty"
              class="error"
            >
              required
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 w-8/12 mx-auto">
        <input
          v-model.trim="$v.contData.description.$model"
          placeholder="Description"
          class="input w-full h-24"
        >
        <div
          v-if="!$v.contData.description.required && $v.contData.description.$dirty"
          class="error"
        >
          required
        </div>
        <div @click="submitData">
          <basic-button
            class="bg-blue-some w-183 mt-8"
          >
            <span class="mr-2 font-bold">Submit</span>
            <img
              src="../assets/Arrow.png"
              alt="Arrow"
            >
          </basic-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import BasicButton from './BasicButton.vue'

export default {
  name: 'Contacts',
  components: {
    BasicButton
  },
  data () {
    return {
      contData: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        telephone: '',
        description: ''
      }
    }
  },
  validations: {
    contData: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      emailAddress: {
        required,
        email
      },
      telephone: {
        required
      },
      description: {
        required
      }
    }
  },
  methods: {
    submitData () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log(this.contData)
      }
    }
  }
}
</script>
