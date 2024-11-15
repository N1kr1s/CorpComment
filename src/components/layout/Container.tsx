import { AddToListProps, PassedProps } from '../../lib/interfaces'
import FeedbackList from '../feedback/FeedbackList'
import Header from './Header'

function Container({
  feedbackItems,
  isLoading,
  error,
  handleAddToList,
}: PassedProps & AddToListProps) {
  return (
    <main className='container'>
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        error={error}
      />
    </main>
  )
}

export default Container
