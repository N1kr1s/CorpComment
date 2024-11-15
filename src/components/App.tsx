import { useEffect, useState } from 'react'
import Container from './layout/Container'
import Footer from './layout/Footer'
import HashtagList from './hashtag/HashtagList'
import { FeedbackItems, Response } from '../lib/interfaces'

function App() {
  const URL =
    'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'

  const [feedbackItems, setFeedbackItems] = useState<FeedbackItems[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const companyList = [
    ...new Set(feedbackItems.map((feedbackItem) => `#${feedbackItem.company}`)),
  ]

  const handleAddToList = async (text: string): Promise<void> => {
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

    fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
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
    <div className='app'>
      <Footer />

      <Container
        isLoading={isLoading}
        error={error}
        feedbackItems={feedbackItems}
        handleAddToList={handleAddToList}
      />

      <HashtagList companyList={companyList} />
    </div>
  )
}

export default App
