import { useGlobalContext } from '../../lib/hook'
import { HashtagItemProps } from '../../lib/interfaces'

function HashtagItem({ company }: HashtagItemProps) {
  const globalContext = useGlobalContext()
  const { handleSelectedCompany } = globalContext!
  return (
    <li>
      <button onClick={() => handleSelectedCompany(company)}>#{company}</button>
    </li>
  )
}

export default HashtagItem
