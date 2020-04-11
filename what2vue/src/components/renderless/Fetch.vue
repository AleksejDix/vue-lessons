<template>
  <div>
    {{ state }}
    {{ error }}
    <slot v-if="state === 'error'" name="error" v-bind="{ error, load }"
      ><pre>{{ error }}</pre></slot
    >
    <slot v-if="state === 'success'" name="success" v-bind="{ data, load }"
      ><pre>{{ data }}</pre></slot
    >
    <slot v-if="state === 'loading'" name="loading">loading...</slot>
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'

export default {
  setup({ apicall }) {
    const data = ref(undefined)
    const error = ref(undefined)
    const state = ref('idle')

    const states = {
      idle: 'idle',
      loading: 'loading',
      success: 'success',
      error: 'error'
    }

    const setData = data => {
      error.data = data
    }

    const setError = error => {
      error.value = error
    }

    // const destroyError = () => {
    //   error.value = undefined
    // }

    const load = async () => {
      // state.value = states.loading
      // destroyError()
      try {
        const data = await apicall()
        console.log(data)
        state.value = states.success
        setData(data)
        return data
      } catch (error) {
        state.value = states.error
        setError(error)
        return error
      }
    }

    onMounted(() => {
      console.log(apicall())
      load()
    })

    return { data, load, error, state }
  },
  props: {
    apicall: {
      type: Function,
      required: true
    }
  }
}
</script>
