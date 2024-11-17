import React, { createContext, useMemo, useState } from 'react'
import { FeedbackItems, IFeedbackItems } from '../../lib/interfaces'
import { useFetch } from '../../lib/useFetch'
const URL =
  'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext<IFeedbackItems | null>(null)

function GlobalContextProvider({ children }: React.PropsWithChildren) {
  const { feedbackItems, setFeedbackItems, isLoading, error } = useFetch(URL)
  const [selectedCompany, setSelectedCompany] = useState('')

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter((item) => item.company === selectedCompany)
        : feedbackItems,
    [selectedCompany, feedbackItems]
  )

  const companyList = useMemo(
    () => [
      ...new Set(
        feedbackItems.map((feedbackItem) => `${feedbackItem.company}`)
      ),
    ],
    [feedbackItems]
  )

  const handleSelectedCompany = (company: string) => setSelectedCompany(company)

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

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        error,
        feedbackItems,
        handleAddToList,
        companyList,
        filteredFeedbackItems,
        handleSelectedCompany,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
