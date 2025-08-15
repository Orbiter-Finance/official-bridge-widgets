import { Bridge } from 'official-bridge-widgets'
import 'official-bridge-widgets/lib/index.css'
import './index.css'

function App() {
  return (
    <div className='mt-10 mx-auto w-fit'>
      <Bridge config={{ projectId: 'a9b8c7d6-e5f4-3210-9876-5432dcba0231', theme: 'light' }} />
    </div>
  )
}

export default App
