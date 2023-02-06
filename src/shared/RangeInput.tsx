import { Component, Show } from "solid-js";

const RangeInput: Component<{
  label: string;
  helperText?: string;
  min: number;
  max: number;
  step: number;
  placeholder?: any;
}> = (props) => {

  return (
    <div class="relative pt-1">
      <ul class="w-full">
        <label for="customRange2" class="form-label block-block">
          {props.label}
        </label>
        <input class="inline-block float-right rounded-lg focusable-field bg-transparent" placeholder={props.placeholder} type="number" min={props.min} max={props.max} step={props.step}/>
      </ul>
      <Show when={!!props.helperText}>
        <p class="mt-[-0.125rem] pb-2 text-sm text-white/50">
          {props.helperText}
        </p>
      </Show>
      <input
        type="range"
        class="
        form-range
        h-6
        w-full
        appearance-none
        bg-transparent
        focusable-field
        !outline-purple-400/50
        rounded-xl
        p-0
        focus:shadow-none focus:outline-none focus:ring-0
      "
        min={props.min}
        max={props.max}
        step={props.step}
        placeholder={props.placeholder}
        id="customRange2"
      />
    </div>
  );
};

export default RangeInput;
