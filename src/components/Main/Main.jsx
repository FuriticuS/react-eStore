import {Button} from "../Button/Button.jsx";

export function Main(){
  return(
    <>
      <Button title={'Test'} onClick={() => alert('123')}/>
      <Button title={'Test disable'} style={{margin: "0 10px"}} disabled />
      <Button title={'Test'} icon={'./favicon.svg'}/>
    </>
  )
}