import { CompanyListProps } from '../../lib/interfaces'
import HashtagItem from './HashtagItem'

function HashtagList({ companyList, handleSelectedCompany }: CompanyListProps) {
  return (
    <ul className='hashtags'>
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          handleSelectedCompany={handleSelectedCompany}
        />
      ))}
    </ul>
  )
}

export default HashtagList
