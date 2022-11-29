<script setup lang="ts">
import { computed, PropType } from 'vue'
import { Button as AButton } from 'ant-design-vue'
import { BtnType, FormBtnsProps } from './types'

const props = defineProps({
  sending: Boolean,
  form: {
    type: Object as PropType<FormBtnsProps['form']>
  },
  btnProps: {
    type: [Object, Function] as PropType<FormBtnsProps['btnProps']>
  },
  texts: {
    type: Object as PropType<FormBtnsProps['texts']>
  },
  size: {
    type: String as PropType<FormBtnsProps['size']>
  }
})

const emit = defineEmits<{
  (e: 'validate-error', error: any): void
}>()

const allBtnKeys: BtnType[] = ['cancel', 'submit', 'reset']

const handleWords = computed(() => {
  return {
    sureBtn: '提交',
    cancelBtn: '取消',
    resetBtn: '重置',
    sending: '提交中...',
    confirmWord: '确认提交?',
    ...props.texts
  }
})

const handleBtnProps = (key: BtnType) => {
  const { btnProps, size } = props
  return { size, ...(btnProps instanceof Function ? btnProps(key) : btnProps) }
}

</script>
<script lang="ts">
export default { name: 'FormBtns' }
</script>

<template>
  <div class="ue-form-btns">
    <a-button v-bind="handleBtnProps('submit')">sumbit</a-button>
    <a-button v-bind="handleBtnProps('cancel')">cancel</a-button>
  </div>
</template>

