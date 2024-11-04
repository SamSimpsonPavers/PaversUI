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
        />
      </div>
    </>
  )
}

export default App
