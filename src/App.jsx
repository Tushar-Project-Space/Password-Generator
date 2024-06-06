import { useCallback, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(flase)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllow) str += '0123456789';

    if(charAllow) str += '!@#$%^&*()_+';

    for(let i = 0; i < length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword();
  },[length, numAllow, charAllow, setPassword])

  return (
    <div>
      
    </div>
  )
}

export default App

