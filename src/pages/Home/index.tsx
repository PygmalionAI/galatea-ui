import { createSignal, For, onMount } from "solid-js"
import CharacterCard from "../../shared/CharacterCard"
import CreateNewCard from "./components/CreateNewCard"

const HomePage = () => {
    const [myCharacters, setMyCharacters] = createSignal([] as Character[]);
    const [communityCharacters, setCommunityCharacters] = createSignal([] as Character[]);

    return <>
        <h1 class="text-3xl">Your Characters</h1>
        <p class="text-white/50">Characters that you made or imported.</p>
        <div class="my-4 border-b border-white/5" />
        <div class="flex flex-wrap gap-4 justify-center w-full">
            <For each={myCharacters()}>{(e:Character) => {
                return <CharacterCard displayName={e.name} avatarUrl={e.avatarUrl} />
            }}</For>
            <CreateNewCard />
        </div>
        <h1 class="text-3xl mt-10">Community Characters</h1>
        <p class="text-white/50">Characters that you made by the community.</p>
        <div class="my-4 border-b border-white/5" />
        <div class="flex flex-wrap gap-4 justify-center">
        <For each={communityCharacters()}>{(e:Character) => {
                return <CharacterCard displayName={e.name} avatarUrl={e.avatarUrl} />
            }}</For>
        </div>
    </>
}
export default HomePage