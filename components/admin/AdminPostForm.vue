<template>
  <form @submit.prevent="onSave">
    <base-control-input v-model="editedPost.author">
      Author Name
    </base-control-input>

    <base-control-input v-model="editedPost.title"> Title </base-control-input>

    <base-control-input v-model="editedPost.thumbnailLink">
      Thumbnail Link
    </base-control-input>

    <base-control-input v-model="editedPost.content" control-type="textarea">
      Content
    </base-control-input>

    <base-button type="submit">Save</base-button>

    <base-button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >
      Cancel
    </base-button>
  </form>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  useContext,
} from '@nuxtjs/composition-api'

import { InputPost } from '@/models/Post'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseControlInput from '@/components/ui/BaseControlInput.vue'

export default defineComponent({
  components: {
    BaseButton,
    BaseControlInput,
  },
  props: {
    post: {
      type: Object as PropType<InputPost>,
      required: false,
    },
  },
  setup(props) {
    const editedPost = reactive({
      author: props.post?.author || '',
      title: props.post?.title || '',
      thumbnailLink: props.post?.thumbnailLink || '',
      content: props.post?.content || '',
    })

    const {
      app: { router },
    } = useContext()

    function onSave() {
      console.log(editedPost)
    }

    function onCancel() {
      router?.replace('/admin')
    }

    return {
      editedPost,
      onSave,
      onCancel,
    }
  },
})
</script>
