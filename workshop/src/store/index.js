import Vue from 'vue'
import Vuex from 'vuex'
import contents from '@/lessons/contents'

Vue.use(Vuex)

function importAll(r) {
  return r
    .keys()
    .map((key) => {
      const [path, ext] = key.slice(2).split('.')
      const [type, index] = path.split('/')

      return {
        path: key.slice(1),
        type,
        ext,
        index: parseInt(index),
        module: r(key),
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
}

export default new Vuex.Store({
  state: {
    lessons: [],
    lesson: null,
  },
  getters: {
    lessons: (state) => state.lessons,
    lesson: (state) => state.lesson,
    title: (state) => state.title,
  },
  mutations: {
    workshopCreate(state, { title, lessons }) {
      state.title = title
      state.lessons = lessons
    },
    pickLesson(state, id) {
      state.lesson = state.lessons.find((lesson) => {
        return lesson.id === +id
      })
    },
    removeLesson(state) {
      state.lesson = null
    },
  },
  actions: {
    workshopCreate(context) {
      const lessons = importAll(
        require.context(
          // The relative path of the components folder
          '@/lessons',
          // Whether or not to look in subfolders
          true,
          // The regular expression used to match base component filenames
          /\.(vue|html|md)$/
        )
      )

      context.commit('workshopCreate', {
        title: contents.title,
        lessons,
      })
    },
  },
})

importAll(require.context('../components/', true, /\.js$/))
