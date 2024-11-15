import { AddToListProps } from '../../lib/interfaces'
import FeedbackForm from '../feedback/FeedbackForm'
import Logo from '../Logo'
import PageHeading from '../PageHeading'
import Pattern from '../Pattern'

function Header({ handleAddToList }: AddToListProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddToList={handleAddToList} />
    </header>
  )
}

export default Header
