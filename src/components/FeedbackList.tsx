import { TriangleUpIcon } from '@radix-ui/react-icons'

function FeedbackList() {
  return (
    <ol className='feedback-list'>
      <li className='feedback'>
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Nike</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            consequuntur distinctio doloremque at reprehenderit eligendi.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  )
}

export default FeedbackList
