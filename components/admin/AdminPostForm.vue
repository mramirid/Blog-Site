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

    <base-control-input
      v-model="editedPost.previewText"
      control-type="textarea"
    >
      Preview Text
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

import { RawPost } from '@/models/Post'

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<RawPost>,
      required: false,
    },
  },
  emits: ['submit'],
  setup(props, context) {
    const editedPost = reactive<RawPost>({
      author: props.post?.author || '',
      title: props.post?.title || '',
      thumbnailLink: props.post?.thumbnailLink || '',
      content: props.post?.content || '',
      previewText: props.post?.previewText || '',
      updatedDate: new Date().toString(),
    })

    function onSave() {
      context.emit('submit', editedPost)
    }

    const {
      app: { router },
    } = useContext()

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
