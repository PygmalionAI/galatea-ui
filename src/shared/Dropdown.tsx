import { createSignal, Show, Component, JSX } from 'solid-js';
interface Props {
    options: string[];
    optionClickHandlers: (() => void)[];
    buttonContent: JSX.Element;
  }
const [open, setOpen] = createSignal(false);

const handleClick = () => {
    setOpen(!open())
  }
const Dropdown: Component<Props> = (props) => (
  <div class="relative">
      <button onClick={handleClick}>{props.buttonContent}</button>
      <Show when={open()}>
        <ul class="bg-black border border-gray-400 rounded-lg py-2 absolute mt-2 z-10">
          {props.options.map((option, index) => (
            <li
              class="text-sm py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleClick();
                props.optionClickHandlers[index]();
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </Show>
    </div>
);
export default Dropdown;
