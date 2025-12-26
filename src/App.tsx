import { useBio } from "./context/bio/useBio"



function App() {

  const name = useBio()


  return (
    <>

      <h1>{name}</h1>



    </>
  )
}

export default App
