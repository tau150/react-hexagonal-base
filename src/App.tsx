import './App.css'
import { UseCaseProvider } from "./contexts/dependenciesContext"
import { PostList } from './components/PostsList'

function App() {

  return (
    <UseCaseProvider>
      <h1>Hexagonal React - Base project</h1>
      <PostList />
    </UseCaseProvider>
  )
}

export default App
