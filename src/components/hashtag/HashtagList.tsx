import { CompanyListProps } from '../../lib/interfaces'
import HashtagItem from './HashtagItem'

function HashtagList({ companyList }: CompanyListProps) {
  return (
    <ul className='hashtags'>
      {companyList.map((company) => (
        <HashtagItem key={company} company={company} />
      ))}
    </ul>
  )
}

export default HashtagList
