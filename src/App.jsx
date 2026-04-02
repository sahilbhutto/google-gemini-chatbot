import ContentSection from "./components/ContentSection"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="flex">
     <Sidebar/>
     <ContentSection/>
    </div>
  )
}

export default App
