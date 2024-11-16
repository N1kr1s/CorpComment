import { HashtagItemProps } from '../../lib/interfaces'

function HashtagItem({ company, handleSelectedCompany }: HashtagItemProps) {
  return (
    <li>
      <button onClick={() => handleSelectedCompany(company)}>#{company}</button>
    </li>
  )
}

export default HashtagItem
