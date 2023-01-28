import CharacterCard from "../../shared/CharacterCard"
import CreateNewCard from "./components/CreateNewCard"


const HomePage = () => {
    return <>
        <h1 class="text-3xl">Your Characters</h1>
        <p class="text-white/50">Characters that you made or imported.</p>
        <div class="my-4 border-b border-white/5" />
        <div class="flex flex-wrap gap-4 justify-center w-full">
            <CharacterCard displayName="MyVeryCuteWaifu" avatarUrl="https://via.placeholder.com/150" />
            <CharacterCard displayName="VeryCuteWaifu" avatarUrl="https://via.placeholder.com/150" />
            <CharacterCard displayName="VeryCuteWaifu" avatarUrl="https://via.placeholder.com/150" />
            <CharacterCard displayName="VeryCuteWaifu" avatarUrl="https://via.placeholder.com/150" />
            <CreateNewCard />
        </div>
        <h1 class="text-3xl mt-10">Community Characters</h1>
        <p class="text-white/50">Characters that you made by the community.</p>
        <div class="my-4 border-b border-white/5" />
        <div class="flex flex-wrap gap-4 justify-center">
            <CharacterCard displayName="MyVeryCuteWaifu" avatarUrl="https://via.placeholder.com/150" />
            <CharacterCard displayName="VeryCuteWaifu" avatarUrl="https://via.placeholder.com/150" />
            <CharacterCard displayName="VeryCuteWaifu" avatarUrl="https://via.placeholder.com/150" />
            <CharacterCard displayName="VeryCuteWaifu" avatarUrl="https://via.placeholder.com/150" />

        </div>
    </>
}
export default HomePage