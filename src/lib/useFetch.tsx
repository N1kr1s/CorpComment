import { useEffect, useState } from 'react'
import { ResponseData, FeedbackItems } from './interfaces'

export function useFetch(URL: string) {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItems[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error()
        }
        const data: ResponseData = await response.json()
        setFeedbackItems(data.feedbacks)
        setIsLoading(false)
      } catch {
        setIsLoading(false)
        setError('Something went wrong')
      }
    }

    fetchData()
  }, [URL])
  return { feedbackItems, setFeedbackItems, isLoading, error }
}
