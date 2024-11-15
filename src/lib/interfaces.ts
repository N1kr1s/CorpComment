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

export interface PassedProps {
  feedbackItems: FeedbackItems[]
  error: string
  isLoading: boolean
}

export interface AddToListProps {
  handleAddToList: (text: string) => void
}

export interface CompanyListProps {
  companyList: string[]
}

export interface HashtagItemProps {
  company: string
}
