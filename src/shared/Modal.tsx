import { createElement as h, createSignal, Component, Show } from 'solid-js'
//Component Properties
const Modal: Component <{
    messageHeader: string;
    message: string;
    confirmText: string;
    declineText: string;
  }> = (props) => {
  const [show, setShow] = createSignal(false)

  const handleOpen = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }
//Make sure you set an onConfirm function on the page or it will simply close the modal!
  const handleConfirm = () => {
    props.onConfirm()
    setShow(false)
  }
  return (
    <div>
      <button class="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded" onClick={handleOpen}>
        Show Modal
      </button>
      <Show when={show()}>
        <div class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div class="bg-black rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div>
              <div class="mb-4 text-lg black font-bold">{props.messageHeader}</div>
              <div class="mb-4 text-lg black">{props.message}</div>
              <div class="flex items-center justify-end">
                <button class="text-red-500 hover:text-red-700" onClick={handleClose}>
                    {props.declineText}
                </button>
                <button class="ml-3 bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded" onClick={handleConfirm}>
                    {props.confirmText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </div>
  )
}

export default Modal
