import { mount } from '@vue/test-utils'
import HomeAbout from '~/components/HomeAbout.vue'

describe('HomeAbout', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomeAbout)
    expect(wrapper.vm).toBeTruthy()
  })
})
