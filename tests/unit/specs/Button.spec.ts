import 'mocha'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import manzhaiUI from '@/index'
import * as directives from '@/directives'

Object.keys(directives).forEach(key => {
  Vue.directive(key.toLowerCase(), (directives as Record<string, any>)[key])
})

describe('Button.vue', () => {
  it('默认插槽使用', () => {
    const wrapper = shallowMount(manzhaiUI.Button, {
      slots: { default: '123' }
    })
    expect(wrapper.text()).to.include('123')
  })

  it('类型', () => {
    const wrapper = shallowMount(manzhaiUI.Button, {
      attrs: { type: 'primary' }
    })
    expect(wrapper.element.classList.contains('mz-button--primary')).to.be.true
  })

  it('禁用', () => {
    // @ts-ignore
    const wrapper = shallowMount(manzhaiUI.Button, {
      attrs: { disabled: true }
    })
    expect(wrapper.element.classList.contains('mz-button--disabled')).to.be.true
  })

  it('提交按钮', () => {
    const wrapper = shallowMount(manzhaiUI.Button, {
      attrs: { nativeType: 'submit' }
    })
    expect(wrapper.element.getAttribute('type')).to.be.equal('submit')
  })
})
