<template>
  <article>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell">
          <vb-menu class="foobar">
            <vb-menu-item :to="to">One</vb-menu-item>
            <vb-menu-text>Text</vb-menu-text>
          </vb-menu>
        </div>
      </div>

      <div class="grid-x">
        <div class="cell">
          <form>
            <vb-form-input v-bind="input" v-model="inputModel" />
          </form>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import vbFormInput from '../../src/components/general/forms/form-input/form-input'
  import vbMenu from '../../src/components/navigation/menu/menu'
  import vbLink from '../../src/components/controls/link/link'
  import vbMenuItem from '../../src/components/navigation/menu/menu-item'
  import vbMenuItemDropdown from '../../src/components/navigation/menu/menu-item-dropdown'
  import vbMenuText from '../../src/components/navigation/menu/menu-text'

  export default {
    name: 'Foo',
    layout: 'default',
    components: {
      vbFormInput,
      vbLink,
      vbMenu,
      vbMenuItem,
      vbMenuItemDropdown,
      vbMenuText,
    },
    data () {
      return {
        input: {
          autocomplete: null,
          disabled: false,
          name: 'test',
          placeholder: 'foobar',
          readonly: false,
          required: true,
          state: true,
          type: 'text',
        },
        inputModel: 'foo',
        to: {
          name: 'foo',
          query: {
            foo: 'bar',
          },
        },
      }
    },
  }
</script>

<style scoped>
  article {
    margin: 3rem;
  }
</style>
