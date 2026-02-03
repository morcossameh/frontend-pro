import CenterContent from "./components/CenterContent/CenterContent"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import LeftSidebar from "./components/LeftSidebar/LeftSidebar"
import RightSidebar from "./components/RightSidebar/RightSidebar"

function App() {

  return (
    <>
      <Header />

      <main className="main-content">
        <LeftSidebar />
        <CenterContent />
        <RightSidebar />
      </main>

      <Footer />
    </>
  )
}

export default App
