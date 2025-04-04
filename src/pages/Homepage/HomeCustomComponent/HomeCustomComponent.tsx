import useAlbum from '../../../hooks/Starter/useAlbum'

type HomeCustomComponentPropsType = {
    message: string,
    price: number
}



const HomeCustomComponent = ({message, price}: HomeCustomComponentPropsType) => {

    const {getUserInfos} = useAlbum()

    console.log(message)
    console.log(price)
    console.log(getUserInfos)


    return (
        <div>This custom component</div>
    )
}

export default HomeCustomComponent