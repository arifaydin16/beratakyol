import GameCard from '../components/GameCard'
import ProfileLayout from '../layouts/ProfileLayout'



const Favorites = () => {
    return (
        <ProfileLayout>
            <div className="col-span-3 rounded-4xl">

                <div className="bg-[var(--pink-gray)] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 p-4 gap-4 rounded-lg mt-4">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />


                </div>
            </div>
        </ProfileLayout>
    )
}

export default Favorites