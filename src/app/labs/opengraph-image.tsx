import { ImageResponse } from 'next/server'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Laboratório | Gustavo Nardino'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Font
// const interSemiBold = fetch(
//   new URL('./Inter-SemiBold.ttf', import.meta.url)
// ).then((res) => res.arrayBuffer())
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 45,
          fontFamily: 'monospace',
          background: 'wheat',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Laboratório | Gustavo Nardino
      </div>
    )
  )
}