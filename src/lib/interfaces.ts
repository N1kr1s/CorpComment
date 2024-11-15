export interface FeedbackItems {
  id: number
  company: string | undefined
  badgeLetter: string | undefined
  upvoteCount: number
  daysAgo: number
  text: string
}

export interface Response {
  feedbacks: FeedbackItems[]
  public: boolean
  sorted: boolean
}

export interface FeedbackItemProps {
  feedbackItem: FeedbackItems
}
