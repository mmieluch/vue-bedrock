import bvFormFile from 'bootstrap-vue/src/components/form-file/form-file'
import bvIdMixin from 'bootstrap-vue/src/mixins/id'
import bvFormMixin from 'bootstrap-vue/src/mixins/form'
import bvFormCustomMixin from 'bootstrap-vue/src/mixins/form-custom'
import FormControlStateMixin from '../../mixins/form-control-state'
import merge from 'lodash.merge'

const FormFile = merge({}, bvFormFile, {
  render (h) {
    const input = h('input', {
      attrs: {
        'aria-describedby': this.plain ? null : this.safeId('_VB_file_control_'),
        'aria-required': this.required ? 'true' : null,
        accept: this.accept || null,
        capture: this.capture || null,
        disabled: this.disabled,
        id: this.safeId(),
        multiple: this.multiple,
        name: this.name,
        required: this.required,
        type: 'file',
        webkitdirectory: this.directory,
      },
      class: [
        {
          focus: this.custom && this.hasFocus,
          'show-for-sr': !this.plain,
        },
        this.formControlStateClass,
      ],
      on: {
        change: this.onFileChange,
        focusin: this.focusHandler,
        focusout: this.focusHandler,
      },
      ref: 'input',
    })

    if (this.plain) {
      return input
    }

    const label = h('label', {
      attrs: {
        for: this.safeId(),
        id: this.safeId('_VB_file_control_'),
      },
      class: [
        ...this.labelClass,
        this.formControlLabelStateClass,
      ],
    }, this.$slots.label || this.selectLabel)

    return h(this.tag, {
      class: [
        'custom-file',
        'vb-form-file',
        this.formControlWrapperStateClass,
        {
          dragging: this.dragging,
        }
      ],
      on: {
        dragleave: this.dragleave,
        dragover: this.dragover,
        drop: this.drop,
      },
    }, [label, input])
  },
  props: {
    labelClass: {
      type: [Array, String],
      default: ['button', 'custom-file-label', 'vb-form-file-label'],
    },
    placeholder: {
      type: String,
      default: 'Choose file',
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
})

FormFile.mixins = [
  bvFormCustomMixin,
  bvFormMixin,
  bvIdMixin,
  FormControlStateMixin,
]

export default FormFile
