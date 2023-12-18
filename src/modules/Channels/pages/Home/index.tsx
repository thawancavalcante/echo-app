import { useState } from 'react'
import Categories from './components/Categories'
import CategoryDetail, { ICategory } from './components/CategoryDetail'
import UserInfo from "./components/UserInfo"
import Style from './style.module.css'

const categories: Map<string, ICategory> = new Map<string, ICategory>([
    ['popular', {
        title: 'Popular communities',
        channels: [
            {
                id: '111111111',
                name: 'MidJourney',
                description: 'The official server for Midjourney, a text-to-image AI where your imagination is the only limit.',
                totalUsers: 17519771,
                onlineUsers: 1381730,
            },
            {
                id: '222222222222',
                name: 'Genshin Impact Official',
                description: 'Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!',
                totalUsers: 359167,
                onlineUsers: 1101313,
            },
            {
                id: '333333333333333',
                name: 'Valorant',
                description: 'The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!',
                totalUsers: 227853,
                onlineUsers: 1015784,
            },
            {
                id: '44444444444',
                name: 'Deep Rock Galactic',
                description: 'Official Discord Server for Deep Rock Galactic - a game about dwarven team spirit, mining and shooting aliens.',
                totalUsers: 211234,
                onlineUsers: 492345,
            },
            {
                id: '555555555555',
                name: 'Roblox',
                description: 'The largest community-run Roblox server. Join for news, chat, LFG, events & more! For both Users and Creators. 🌈 🌻',
                totalUsers: 192344,
                onlineUsers: 1118345,
            },
        ],
    }],
    ['2', {
        title: 'Category 1',
        channels: [
            {
                id: '1111111111111',
                name: 'MidJourney',
                description: 'The official server for Midjourney, a text-to-image AI where your imagination is the only limit.',
                totalUsers: 17519771,
                onlineUsers: 1381730,
            },
            {
                id: '222222222222',
                name: 'Genshin Impact Official',
                description: 'Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!',
                totalUsers: 359167,
                onlineUsers: 1101313,
            },

        ],
    }],
    ['3', {
        title: 'Category 2',
        channels: [
            {
                id: '1111111111111',
                name: 'Genshin Impact Official',
                description: 'Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!',
                totalUsers: 359167,
                onlineUsers: 1101313,
            },
        ],
    }],
    ['4', {
        title: 'Category 3',
        channels: [],
    }],
    ['5', {
        title: 'Category 4',
        channels: [],
    }],
    ['6', {
        title: 'Category 5',
        channels: [],
    }],
])

const HomePage = () => {
    const [category, setCategory] = useState<string>('popular')
    // const navigate = useNavigate()
    // function handleLogout(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     e.preventDefault()

    //     auth.logout().then(() => {
    //         navigate(LoginPage.route)
    //     })
    // }
    /* <button type="button" onClick={handleLogout}>Logout</button> */


    return (
        <>
            <div className={Style.sidebar}>
                <Categories onChange={(id: string) => {
                    console.log(id)
                    setCategory(id)
                }} />
                <UserInfo />
            </div>

            <CategoryDetail category={categories.get(category)!} />

        </>
    )
}

HomePage.route = '/'

export default HomePage