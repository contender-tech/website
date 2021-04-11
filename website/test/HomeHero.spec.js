import { mount } from '@vue/test-utils'
import HomeHero from '~/components/HomeHero.vue'

describe('HomeHero', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomeHero)
    expect(wrapper.vm).toBeTruthy()
  })
})
