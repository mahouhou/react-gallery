import "./styles.css"

import zestyImages from "./components/Images"
import Gallery from "./components/Gallery"
import Header from "./components/Header"

export default function App() {
  return (
    <main>
      <Header h1="Zesty" h2="A photography project by Ella Fieldling" />
      <Gallery images={zestyImages} />
    </main>
  )
}
