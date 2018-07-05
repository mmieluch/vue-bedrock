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
        'button',
        this.formControlLabelStateClass,
      ],
    }, this.selectLabel)

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

// import FormMixin from '../../mixins/form'
// import FormControlStateMixin from '../../mixins/form-control-state'
// import IdMixin from '../../mixins/id'
// import { from as arrayFrom } from '../../utils/array'
//
// export default {
//   mixins: [
//     FormControlStateMixin,
//     FormMixin,
//     IdMixin,
//   ],
//   render (h) {

//   props: {
//     accept: {
//       type: String,
//       default: '',
//     },
//     // Instruct input to capture from camera.
//     capture: {
//       type: Boolean,
//       default: false,
//     },
//     directory: {
//       type: Boolean,
//       default: false,
//     },
//     multiple: {
//       type: Boolean,
//       default: false,
//     },
//     noDrop: {
//       type: Boolean,
//       default: false,
//     },
//     noTraverse: {
//       type: Boolean,
//       default: false,
//     },
//     placeholder: {
//       type: String,
//     },
//     plain: {
//       type: Boolean,
//       default: false,
//     },
//     tag: {
//       type: String,
//       default: 'div',
//     },
//   },
//   data () {
//     return {
//       dragging: false,
//       hasFocus: false,
//       selectedFile: null,
//     }
//   },
//   computed: {
//     custom () {
//       return !this.plain
//     },
//     selectLabel () {
//       // No file chosen.
//       if (!this.selectedFile || this.selectedFile.length === 0) {
//         return this.placeholder
//       }
//
//       // Multiple files.
//       if (this.multiple) {
//         if (this.selectedFile.length === 1) {
//           return this.selectedFile[0].name
//         }
//         return this.selectedFile.map(file => file.name).join(', ')
//       }
//
//       // Single file.
//       return this.selectedFile.name
//     },
//   },
//   methods: {
//     _renderLabel () {
//       const label = this.$createElement('label', {
//         attrs: {
//           for: this.safeId(),
//         },
//       })
//     },
//     dragleave (e) {
//       e.preventDefault()
//       e.stopPropagation()
//       this.dragging = false
//     },
//     dragover (e) {
//       e.preventDefault()
//       e.stopPropagation()
//
//       if (this.noDrop || !this.custom) {
//         return
//       }
//
//       this.dragging = true
//       e.dataTransfer.dropEffect = 'copy'
//     },
//     drop (e) {
//       e.preventDefault()
//       e.stopPropagation()
//
//       if (this.noDrop) {
//         return
//       }
//       this.dragging = false
//       if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//         this.onFileChange(e)
//       }
//     },
//     focusHandler (e) {
//       this.hasFocus = !this.plain && e.type !== 'focusout'
//     },
//     onFileChange (e) {
//       // Always emit original event.
//       this.$emit('change', e)
//       // Check if special `items` prop is available on event (drop mode).
//       // Can be disabled by setting no-traverse.
//       const items = e.dataTransfer && e.dataTransfer.items
//
//       if (items && !this.noTraverse) {
//         const queue = []
//
//         for (let i = 0; i < items.length; i++) {
//           const item = items[i].webkitGetAsEntry()
//
//           if (item) {
//             queue.push(this.traverseFileTree('item'))
//           }
//         }
//
//         const vm = this
//         Promise.all(queue).then(files => {
//           vm.setFiles(arrayFrom(files))
//         })
//         return
//       }
//       // Normal handling.
//       this.setFiles(e.target.files || e.dataTransfer.files)
//     },
//     reset () {
//       try {
//         // Insurance against IE.
//         this.$refs.input.value = ''
//       } catch (e) {}
//
//       // IE < 11 doesn't support setting input.value to '' or null,
//       // so we use this little extra hack to reset the value, just in case.
//       // This also appears to work on modern browsers as well.
//       this.$refs.input.type = ''
//       this.$refs.input.type = 'file'
//       this.selectedFile = this.multiple ? [] : null
//     },
//     setFiles (files) {
//       if (!files) {
//         this.selectedFile = null
//         return
//       }
//       if (!this.multiple) {
//         this.selectedFile = files[0]
//         return
//       }
//       // Convert files to array.
//       const filesArray = []
//       for (let i = 0; i < files.length; i++) {
//         if (files[i].type.match(this.accept)) {
//           filesArray.push(files[i])
//         }
//       }
//       this.selectedFile = filesArray
//     },
//     traverseFileTree (item, path) {
//       // Based on http://stackoverflow.com/questions/3590058
//       return new Promise(resolve => {
//         path = path || ''
//
//         if (item.isFile) {
//           // Get file.
//           item.file(file => {
//             file.$path = path // Inject $path to file object.
//             resolve(file)
//           })
//         } else if (item.isDirectory) {
//           // Get directory contents.
//           item.createReader().readEntries(entries => {
//             const queue = []
//
//             for (let i = 0; i < entries.length; i++) {
//               queue.push(this.traverseFileTree(entries[i], path + item.name + '/'))
//             }
//             Promise.all(queue).then(files => {
//               resolve(arrayFrom(files))
//             })
//           })
//         }
//       })
//     },
//   },
//   watch: {
//     selectedFile (current, prev) {
//       if (current === prev) {
//         return
//       }
//
//       if (!current && this.multiple) {
//         this.$emit('input', [])
//       } else {
//         this.$emit('input', current)
//       }
//     },
//   },
// }
