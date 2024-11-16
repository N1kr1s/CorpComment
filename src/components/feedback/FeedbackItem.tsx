import { useState } from 'react'
import { TriangleUpIcon } from '@radix-ui/react-icons'
import { FeedbackItemProps } from '../../lib/interfaces'

function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  const [open, setOpen] = useState(false)
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount)
  const { badgeLetter, company, text, daysAgo } = feedbackItem

  const handleUpvoteCount = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation()
    setUpvoteCount((prev) => prev + 1)
    e.currentTarget.disabled = true
  }

  return (
    <li
      className={`feedback ${open ? 'feedback--expand' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <button onClick={handleUpvoteCount}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo === 0 ? 'NEW' : `${daysAgo}d`}</p>
    </li>
  )
}

export default FeedbackItem
