import Container from './layout/Container'
import Footer from './layout/Footer'
import HashtagList from './hashtag/HashtagList'

function App() {
  return (
    <div className='app'>
      <Footer />

      <Container />

      <HashtagList />
    </div>
  )
}

export default App
