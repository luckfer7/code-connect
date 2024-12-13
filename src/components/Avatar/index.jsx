import Image from "next/image"
import Styles from './avatar.module.css'

export const Avatar = ({ name, imageSrc  }) => {
    return (
        <ul className={Styles.ul}>
            <li className={Styles.li}>
                <Image src={imageSrc} width={32} height={32} alt={`Avatar do(a) ${name}`}/>
            </li>
            <li className={Styles.liNome}>
                @{name}
            </li>
        </ul>
    )
}