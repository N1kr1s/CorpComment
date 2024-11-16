export interface FeedbackItems {
  id: number
  company: string | undefined
  badgeLetter: string | undefined
  upvoteCount: number
  daysAgo: number
  text: string
}

export interface ResponseData {
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
  company: string
}

export interface IFeedbackItems {
  isLoading: boolean
  error: string
  feedbackItems: FeedbackItems[]
  handleAddToList: (text: string) => Promise<void>
  companyList: string[]
  handleSelectedCompany: (company: string) => void
  filteredFeedbackItems: FeedbackItems[]
}
