import { HashtagItemProps } from '../../lib/interfaces'

function HashtagItem({ company }: HashtagItemProps) {
  return (
    <li>
      <button>{company}</button>
    </li>
  )
}

export default HashtagItem
