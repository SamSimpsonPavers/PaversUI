import { SuperButton } from '../lib/SuperButton/SuperButton';

import { Modal } from '../lib/Modal/Modal';
function App() {

  return (
    <>
      <div>

        <SuperButton text="Hello" color="red"></SuperButton>
        <Modal
          title="Add"
          textcontent="Body"
          button1color="green"
          button1text="Yes"
          button2color="red"
          button2text="No"
        />
      </div>
    </>
  )
}

export default App
