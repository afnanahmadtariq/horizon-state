import { ImageResponse } from 'next/og'

// Route segment config
export const dynamic = 'force-static'
export const runtime = 'nodejs'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#ff8c42',
                        borderRadius: '50%',
                    }}
                />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
