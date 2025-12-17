import { ImageResponse } from "next/og"

export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <svg width={size.width} height={size.height} xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="black" />
            </svg>
        ),
        {
            width: size.width,
            height: size.height,
        },
    )
}