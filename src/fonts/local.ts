import localFont from 'next/font/local'

const Geist = localFont({
    src: [
        {
            path: './typeface/variable/Geist-Variable.woff2',
            style: 'normal'
        }
    ],
    variable: '--font-geist',
    display: 'swap'
})

const Geist_Mono = localFont({
    src: [
        {
            path: './typeface/variable/GeistMono-Variable.woff2',
            style: 'normal'
        }
    ],
    variable: '--font-geist-mono',
    display: 'swap'
})

const Host_Grotesk = localFont({
    src: [
        {
            path: './typeface/variable/HostGrotesk-Variable.woff2',
            style: 'normal'
        }
    ],
    variable: '--font-host-grotesk',
    display: 'swap'
})

const Space_Grotesk = localFont({
    src: [
        {
            path: './typeface/variable/SpaceGrotesk-Variable.woff2',
            style: 'normal'
        }
    ],
    variable: '--font-space-grotesk',
    display: 'swap'
})

const Poppins = localFont({
    src: [
        {
            path: './typeface/variable/Poppins-Variable.ttf',
            style: 'normal'
        }
    ],
    variable: '--font-poppins',
    display: 'swap'
})

const JetBrains_Mono = localFont({
    src: [
        {
            path: './typeface/variable/JetBrainsMono-Variable.ttf',
            style: 'normal'
        }
    ],
    variable: '--font-jetbrains-mono',
    display: 'swap'
})

export { Geist, Geist_Mono, Host_Grotesk, Space_Grotesk, Poppins, JetBrains_Mono }