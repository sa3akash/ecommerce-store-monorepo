export type Product = {
    id: string
    name: string
    description: string
    productCount: number
    stockCount: number
    image: string
    category: string
  }
  
  export type SortOption = {
    label: string
    value: string
  }
  
  export type StockFilter = {
    label: string
    value: "all" | "in-stock" | "out-of-stock"
  }
  
  

export const PRODUCTS: Product[] = Array.from({ length: 50 }, (_, i) => {
  const categories = [
    "Headphone",
    "Mouse",
    "Keyboard",
    "Monitor",
    "PC Desktop",
    "Smartphone",
    "Tablet",
    "Laptop",
    "RAM",
    "VGA",
    "Accessories",
    "Hardisk",
  ]
  const category = categories[Math.floor(Math.random() * categories.length)]
  const stockCount = Math.floor(Math.random() * 200)
  const productCount = stockCount + Math.floor(Math.random() * 100)

  return {
    id: `product-${i + 1}`,
    name: `${category} ${i + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category,
    productCount,
    stockCount,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container%20(2)-9kCTalrHbhojdRsQ6ccJFXl5LFQddi.png",
  }
})

export const SORT_OPTIONS: SortOption[] = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Name (A-Z)", value: "name-asc" },
  { label: "Name (Z-A)", value: "name-desc" },
  { label: "Stock (High-Low)", value: "stock-desc" },
  { label: "Stock (Low-High)", value: "stock-asc" },
]

export const STOCK_FILTERS: StockFilter[] = [
  { label: "All Stock", value: "all" },
  { label: "In Stock", value: "in-stock" },
  { label: "Out of Stock", value: "out-of-stock" },
]

export const ITEMS_PER_PAGE_OPTIONS = [12, 24, 36, 48]

