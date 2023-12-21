import { ImageResponse } from '@vercel/og'
import { handleMethodNotAllowedResponse } from 'next/dist/server/future/route-modules/helpers/response-handlers'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

// Doc: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#using-a-local-image
// Font: https://vercel.com/docs/functions/edge-functions/og-image-generation/og-image-examples#using-a-custom-font
export default async function handler(request: NextRequest) {
  const helvetica = await fetch(
    new URL('../../../public/fonts/Helvetica.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
          color: '#000',
          position: 'relative',
          fontFamily: 'Helvetica',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              fontSize: '53px',
            }}
          >
            Institute of Free Technologies
            <div
              style={{
                verticalAlign: 'super',
                fontSize: '30px',
                position: 'relative',
                top: '-10px',
                left: '-6px',
                transform: 'rotate(180deg)',
              }}
            >
              ©
            </div>
          </div>
          <div style={{ fontSize: '53px', opacity: '0.3' }}>
            Fostering innovation, defending digital liberties
          </div>
        </div>
        <div style={{ fontSize: '53px', marginTop: 'auto' }}>IFT</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Helvetica',
          data: helvetica,
          style: 'normal',
        },
      ],
    },
  )
}
handleMethodNotAllowedResponse()
