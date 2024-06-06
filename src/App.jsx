import { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllow) str += '0123456789';

    if(charAllow) str += '!@#$%^&*()_+';

    for(let i = 0; i < length; i++){
      let char = (Math.floor(Math.random() * str.length + 1))
      pass += str.charAt(char)
    }
    setPassword(pass);
  },[length, numAllow, charAllow, setPassword])

  useEffect(() => {passwordGenerator()}, [length, numAllow, charAllow, setPassword])

  const copyToClipBoard = useCallback(() => {
    navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?. setSelectionRange(0, 20)
  },[password])

  return (
    <div>
      <div>
        <input type="text" 
        value={password} 
        readOnly 
        ref={passwordRef}
        placeholder='password'/>

        <button onClick={copyToClipBoard}>Copy</button>
      </div>

      <div>
        <input type="range"
        min={8}
        max={30}
        value={length} 
        onChange={(e) => {setLength(e.target.value)}}/>

        <label>Length : {length}</label>
      </div>

      <div className="check">
        <input type="checkbox" id='num' 
        defaultChecked = {numAllow}
        onChange={() => {setNumAllow((prev) => !prev)}}/>
        <label htmlFor="num">Number</label>

        <input type="checkbox" id='char'
        defaultChecked = {charAllow}
        onChange={() => {setCharAllow((prev) => !prev)}}/>
        <label htmlFor="char">Character</label>
      </div>
    </div>
  )
}

export default App

