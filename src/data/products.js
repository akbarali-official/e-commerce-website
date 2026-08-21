// Central product data — every page/component pulls from here.
// color values are used to render placeholder garment art (swap with real images later).

export const products = [
  { 
    id: 1,
    name: 'T-shirt with Tape Details', 
    price: 120, 
    oldPrice: null, 
    rating: 4.5, 
    color: '#e5e5e5', 
    art: 'tshirt', 
    pattern: 'gradient', 
    image: "/image(2).png.png",
    images: ["/productDetail-img1.png", "/productDetail-img2.png","/productDetail-img4.png"]
  },
  { 
    id: 2, 
    name: 'Skinny Fit Jeans', 
    price: 240, 
    oldPrice: 260, 
    rating: 3.5, 
    color: '#7a1f1f', 
    art: 'polo',
    image: "/image(3).png.png"
  },
  {
    id: 3, 
    name: 'Checkered Shirt', 
    price: 180, 
    oldPrice: null, 
    rating: 4.5, 
    color: '#1a1a1a', 
    art: 'raglan',
    image: "/image(4).png.png"
  },
  { 
    id: 4, 
    name: 'Sleeve Striped T-shirt', 
    price: 130, 
    oldPrice: 160, 
    rating: 4.5, 
    color: '#1e2a4a', 
    art: 'jeans',
  
    image: "/image(5).png.png"
  },
  {
     id: 5, 
     name: 'Vertical Striped Shirt', 
     price: 212, 
     oldPrice: 232, 
     rating: 5.0/5, 
     color: '#3b2440', 
     art: 'shirt',
      image: "/image(6).png.png" 

    },
  { 
    id: 6, 
    name: 'Courage Graphic T-shirt', 
    price: 145, 
    oldPrice: null, 
    rating: 4.5/5, 
    color: '#d9531e', 
    art: 'raglan2',
    image: "/image(7).png.png" 
  
  },
  { 
    id: 7, 
    name: 'Loose Fit Bermuda Shorts', 
    price: 80, 
    oldPrice: null, 
    rating: 3.0/5, 
    color: '#4a5a48', 
    art: 'shirt',
    image: "/image(8).png.png" 
  },
  { 
    id: 8, 
    name: 'Faded Skinny Jeans', 
    price: 210, 
    oldPrice: null, 
    rating: 4.0/5, 
    color: '#d9531e', 
    art: 'tshirt',
    image: "/image(9).png.png"
  },
  { 
    id: 9, 
    name: 'Loose Fit Bermuda Shorts', 
    price: 80, 
    oldPrice: null, 
    rating: 3, 
    color: '#8fa8c9', 
    art: 'shorts',
    image: "/image(10).png.png"
  },
  { 
    id: 10, 
    name: 'Polo with Contrast Trims', 
    price: 212, 
    oldPrice: 242, 
    rating: 4.0/5, 
    color: '#111111', 
    art: 'tshirt',
    image: "/image 7.png"
  },
  { 
    id: 11, 
    name: 'Gradient Graphic T-shirt', 
    price: 145, 
    oldPrice: null, 
    rating: 3.5/5, 
    color: '#2e5fa3', 
    art: 'polo',
    image: "/image 8.png"
  },
  { 
    id: 12, 
    name: 'Polo with Tipping Details', 
    price: 180, 
    oldPrice: null, 
    rating: 4.5/5, 
    color: '#e5e5e5', 
    art: 'tshirt', 
    pattern: 'gradient',
    image: "/image 9.png"
  },
  { 
    id: 13, 
    name: 'Black Striped T-shirt', 
    price: 120, 
    oldPrice: 150, 
    rating: 3.5/5, 
    color: '#c46a9c', 
    art: 'polo',
    image: "/image 10.png"
  },
  
]

export const dressStyles = ['Casual', 'Formal', 'Party', 'Gym']

export const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein']

export function getProductById(id) {
  return products.find((p) => p.id === Number(id))
}

