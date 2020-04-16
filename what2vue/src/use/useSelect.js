import { onMounted } from '@vue/composition-api'
export default function useSelect({ mode = 'single' }) {
  return { selected, select, isSelected }
}
