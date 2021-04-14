import { mount } from '@vue/test-utils'
import HomePlatform from '~/components/HomePlatform.vue'

describe('HomePlatform', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomePlatform)
    expect(wrapper.vm).toBeTruthy()
  })
})
