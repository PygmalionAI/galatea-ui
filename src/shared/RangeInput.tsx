import { Component, Show, createSignal, createEffect } from "solid-js";
import type { JSX } from "solid-js";
import { update } from "lodash";

const RangeInput: Component<{
  label: string;
  value: number;
  helperText?: string;
  min: number;
  max: number;
  step: number;
}> = (props) => {

  const [value, setValue] = createSignal(props.value);
  
  function updateRangeSliders() {
    Array.from(document.getElementsByTagName('input')).forEach(input => {
      input.style.backgroundSize = (Number(input.value) - Number(input.min)) * 100 / (Number(input.max) - Number(input.min)) + '% 100%';
    });
  }

  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    setValue(Number(event.currentTarget.value));
    updateRangeSliders();
  };  
  
  createEffect(updateRangeSliders);

  return (
    <div class="relative pt-1">
      <ul class="w-full">
        <label class="form-label block-block">
          {props.label}
        </label>
        <input class="inline-block float-right rounded-lg border border-white/5 hover:border-white/20 focusable-field bg-transparent" value={value()} type="number" min={props.min} max={props.max} step={props.step} onInput={onInput} />
      </ul>
      <Show when={props.helperText}>
        <p class="mt-[-0.125rem] pb-2 text-sm text-white/50">
          {props.helperText}
        </p>
      </Show>
      <input
        type="range"
        class="
        form-range
        appearance-none
        accent-purple-400/50
        cursor-ew-resize
        h-1
        w-full
        rounded-xl
        focus:shadow-none focus:outline-none focus:ring-0
      "
        min={props.min}
        max={props.max}
        step={props.step}
        onInput={onInput}
        value={value()}
      />
    </div>
  );
};

export default RangeInput;
