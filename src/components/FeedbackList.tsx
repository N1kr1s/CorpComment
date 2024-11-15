import { useEffect, useState } from 'react'
import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'
import { FeedbackItems } from '../lib/interfaces'
import { Response } from '../lib/interfaces'

const URL =
  'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'

function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItems[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleAddToList = (text: string): void => {
    const company = text
      .split(' ')
      .find((word) => word.includes('#'))
      ?.slice(1)

    const newItem: FeedbackItems = {
      text,
      upvoteCount: 0,
      daysAgo: 0,
      badgeLetter: company?.slice(0, 1).toUpperCase(),
      company,
      id: new Date().getTime(),
    }

    setFeedbackItems([...feedbackItems, newItem])
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error()
        }
        const data: Response = await response.json()
        setFeedbackItems(data.feedbacks)
        setIsLoading(false)
      } catch {
        setIsLoading(false)
        setError('Something went wrong')
      }
    }

    fetchData()
  }, [])

  return (
    <ol className='feedback-list'>
      {isLoading && <Spinner />}

      {error && <ErrorMessage message={error} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  )
}

export default FeedbackList
