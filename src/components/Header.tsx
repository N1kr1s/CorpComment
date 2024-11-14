import FeedbackForm from './FeedbackForm'
import Logo from './Logo'
import PageHeading from './PageHeading'
import Pattern from './Pattern'

function Header() {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </header>
  )
}

export default Header
