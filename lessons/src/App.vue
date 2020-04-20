<template>
  <div>
    <WorkshopNavigation>
      <template #title>{{ workshop.title }}</template>
    </WorkshopNavigation>

    <main>
      <router-view :workshop="workshop" />
    </main>
  </div>
</template>

<script>
import WorkshopNavigation from '@/components/WorkshopNavigation'

import contents from './lessons/contents'
// import { upperFirst, camelCase } from 'lodash-es'

const requireContext = require.context(
  // The relative path of the components folder
  './lessons',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /\.(vue|html|md)$/
)

const list = requireContext
  .keys()
  .map((key) => {
    const module = requireContext(key)

    const [path, ext] = key.slice(2).split('.')
    const [type, index] = path.split('/')

    return {
      path: `/public` + key.slice(1),
      type,
      ext,
      index: parseInt(index),
      module: module.__esModule && module.default ? module.default : module,
    }
  })
  .reduce((list, file) => {
    list[file.index - 1] = {
      id: file.index,
      title: contents[file.index],
      ...list[file.index - 1],
      [file.type]: file,
    }
    return list
  }, [])

export default {
  components: {
    WorkshopNavigation,
  },
  data() {
    return {
      workshop: {
        title: contents.title,
        lessons: list,
      },
    }
  },
}
</script>
