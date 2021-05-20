<template>
  <select
    v-model="selected"
    class="form-select mt-10 block w-full border p-3 rounded"
    @change="onChange"
  >
    <option value="0" disabled>Select Country</option>
    <option v-for="country in countries" :key="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'CountrySelect',
  props: {
    countries: Array,
  },
  data() {
    return {
      selected: 0,
    }
  },
  methods: {
    onChange() {
      const country = this.countries.find(
        (ele) => ele.Country === this.selected
      )
      this.$emit('get-country', country)
    },
  },
}
</script>
