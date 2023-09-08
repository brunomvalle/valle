import { Image, Link } from "@chakra-ui/react"

const LinkTelegram = ({link}) => {
    return (
        <Link href={link} target="_blank"><Image m={2} boxShadow="2xl" boxSize={20} fit="cover" src="/telegram.png"/></Link>
    )
}

export default LinkTelegram;