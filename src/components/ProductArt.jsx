// Simple SVG silhouettes standing in for real product photography.
// Replace the <img> usage with real photos when available — just point
// ProductCard/PDP at an image URL instead of this component.

export default function ProductArt({ art, color = '#111', size = '80%' }) {
  const shapes = {
    tshirt: (
      <path d="M20 10 L40 4 L50 12 L44 20 L38 16 L38 70 L12 70 L12 16 L6 20 L0 12 L10 4 Z" />
    ),
    polo: (
      <path d="M18 8 L40 4 L48 12 L42 20 L38 16 L38 70 L12 70 L12 16 L8 20 L2 12 L10 4 L18 8 L22 14 L28 14 L32 8 Z" />
    ),
    raglan: (
      <path d="M20 8 L40 4 L52 14 L44 22 L38 16 L38 70 L12 70 L12 16 L6 22 L-2 14 L10 4 Z" />
    ),
    raglan2: (
      <path d="M20 8 L40 4 L52 14 L44 22 L38 16 L38 70 L12 70 L12 16 L6 22 L-2 14 L10 4 Z" />
    ),
    shirt: (
      <path d="M18 6 L40 2 L50 12 L44 20 L38 15 L38 72 L12 72 L12 15 L6 20 L0 12 L10 2 Z" />
    ),
    jeans: (
      <path d="M14 2 H36 L38 70 L27 70 L25 30 L23 70 L12 70 Z" />
    ),
    shorts: (
      <path d="M14 2 H36 L37 40 L27 40 L25 24 L23 40 L13 40 Z" />
    ),
  }

  return (
    <svg viewBox="-4 0 58 76" width={size} height={size} fill={color}>
      {shapes[art] || shapes.tshirt}
    </svg>
  )
}