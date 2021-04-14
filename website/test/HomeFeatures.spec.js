import { mount } from '@vue/test-utils'
import HomeFeatures from '~/components/HomeFeatures.vue'

describe('HomeFeatures', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomeFeatures)
    expect(wrapper.vm).toBeTruthy()
  })
})
