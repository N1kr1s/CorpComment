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
  handleSelectedCompany: (company: string) => void
  companyList: string[]
}

export interface HashtagItemProps {
  handleSelectedCompany: (company: string) => void
  company: string
}
