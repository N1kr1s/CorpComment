import { useGlobalContext } from '../../lib/hook'
import HashtagItem from './HashtagItem'

function HashtagList() {
  const globalContext = useGlobalContext()
  const { companyList } = globalContext!
  return (
    <ul className='hashtags'>
      {companyList.map((company) => (
        <HashtagItem key={company} company={company} />
      ))}
    </ul>
  )
}

export default HashtagList
