import vue from 'vue'

import PostList from '@/components/posts/PostList.vue'
import BaseControlInput from '@/components/ui/BaseControlInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

vue.component('post-list', PostList)
vue.component('base-control-input', BaseControlInput)
vue.component('base-button', BaseButton)
