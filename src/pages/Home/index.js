import { BottomShelf } from '../../components/BottomShelf'
import { MainBanner } from '../../components/MainBanner'
import { MainShelf } from '../../components/MainShelf'
import Banner from "../../assets/mainBanner.png"
import Banner2 from "../../assets/mainBanner.png"

export const Home = () => {

    return (
        <>
            <MainBanner Banner={Banner} />
            <MainShelf />
            <MainBanner Banner={Banner2} />
            <BottomShelf />
        </>
    )
}
