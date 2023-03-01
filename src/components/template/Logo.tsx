import Image from "next/image"

export default function Logo() {
    return (
        <div className={`
            flex flex-col items-center justify-center
            h-12 w-12 rounded-full
        `}>
            <Image src={'/logo_spider.png'} width={100} height={100} alt={'Miras'}/>
        </div>
    )
}