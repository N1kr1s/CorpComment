import FeedbackItem from './FeedbackItem'
import Spinner from '../Spinner'
import ErrorMessage from '../ErrorMessage'
import { useGlobalContext } from '../../lib/hook'

function FeedbackList() {
  const globalContext = useGlobalContext()
  const { isLoading, error, filteredFeedbackItems } = globalContext!

  return (
    <ol className='feedback-list'>
      {isLoading && <Spinner />}

      {error && <ErrorMessage message={error} />}

      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  )
}

export default FeedbackList
