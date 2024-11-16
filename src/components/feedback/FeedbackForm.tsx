import { useState } from 'react'
import { MAX_CHARACTERS } from '../../lib/constants'
import { useGlobalContext } from '../../lib/hook'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [showValidIndicator, setShowValidIndicator] = useState(false)
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false)
  const globalContext = useGlobalContext()
  const { handleAddToList } = globalContext!

  const charCount = MAX_CHARACTERS - text.length

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    if (newText.length > MAX_CHARACTERS) {
      return
    }
    setText(newText)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (text.includes('#') && text.length >= 5) {
      setShowValidIndicator(true)
      setTimeout(() => {
        setShowValidIndicator(false)
      }, 2000)
    } else {
      setShowInvalidIndicator(true)
      setTimeout(() => {
        setShowInvalidIndicator(false)
      }, 2000)
      return
    }

    handleAddToList(text)
    setText('')
  }

  return (
    <form
      className={`form ${showValidIndicator ? 'form--valid' : ''} ${
        showInvalidIndicator ? 'form--invalid' : ''
      }`}
      onSubmit={handleSubmit}
    >
      <textarea
        value={text}
        onChange={handleChange}
        id='feedback-textarea'
        placeholder=''
        spellCheck='false'
      />
      <label htmlFor='feedback-textarea'>
        Enter your feedback here,remember to #hashtag the company
      </label>
      <div>
        <p className='u-italic'>{charCount}</p>

        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}

export default FeedbackForm
