import Image from 'next/image'

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row md:gap-0">
            <Image
                className="hidden w-auto md:block"
                src="/images/79.png"
                alt="logo"
                width={120}
                height={120}
                priority
            />
            <Image
                className="w-auto md:hidden"
                src="/images/TS_gold_white_square.png"
                alt="logo"
                width={50}
                height={50}
                priority
            />
            <h1 className="text-center text-xl font-semibold uppercase md:text-3xl">
                crud laporan pembukuan dana acara 17-an 2024
            </h1>
            <Image
                className="hidden w-auto md:block"
                src="/images/TS_gold_white.png"
                alt="logo"
                width={120}
                height={120}
                priority
            />
        </div>
    )
}

export default Header
