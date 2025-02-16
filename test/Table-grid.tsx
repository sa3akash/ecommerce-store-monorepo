"use client"

import { useState } from "react"
import {
  type ColumnFiltersState,
  type SortingState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table"
import { ChevronDown, ChevronLeft, ChevronRight, Plus, Search, X } from "lucide-react"
import Link from "next/link"

import type { Product, SortOption, StockFilter } from "./table-data"
import { Input } from "@ecommerce/ui/src/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@ecommerce/ui/src/components/ui/dropdown-menu"
import { Button } from "@ecommerce/ui/src/components/ui/button"
import { Checkbox } from "@ecommerce/ui/src/components/ui/checkbox"

interface TableGridProps {
  products: Product[]
  sortOptions: SortOption[]
  stockFilters: StockFilter[]
  itemsPerPageOptions: number[]
  onDelete?: (selectedIds: string[]) => void
  onAdd?: () => void
}

export function TableGrid({
  products,
  sortOptions,
  stockFilters,
  itemsPerPageOptions,
  onDelete,
  onAdd,
}: TableGridProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [currentStockFilter, setCurrentStockFilter] = useState<StockFilter["value"]>("all")
  const [currentSort, setCurrentSort] = useState<string>(sortOptions[0].value)
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0])

  const table = useReactTable({
    data: products,
    columns: [],
    state: {
      sorting,
      columnFilters,
      globalFilter: searchQuery,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const searchValue = filterValue.toLowerCase()
      const name = row.getValue("name")?.toString().toLowerCase() || ""
      const description = row.getValue("description")?.toString().toLowerCase() || ""
      return name.includes(searchValue) || description.includes(searchValue)
    },
  })

  // Filter products based on search and stock status
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStock =
      currentStockFilter === "all"
        ? true
        : currentStockFilter === "in-stock"
          ? product.stockCount > 0
          : product.stockCount === 0

    return matchesSearch && matchesStock
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (currentSort) {
      case "newest":
        return -1 // Assuming newer items are at the start
      case "oldest":
        return 1
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      case "stock-desc":
        return b.stockCount - a.stockCount
      case "stock-asc":
        return a.stockCount - b.stockCount
      default:
        return 0
    }
  })

  // Pagination
  const pageCount = Math.ceil(sortedProducts.length / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)
  const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const toggleSelection = (id: string) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const clearSelection = () => {
    setSelectedRows({})
  }

  const selectedCount = Object.values(selectedRows).filter(Boolean).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 text-sm">
        <Link href="/dashboard" className="text-purple-500">
          Dashboard
        </Link>
        <span className="text-gray-500">/</span>
        <span className="text-gray-500">Category</span>
      </div>

      {/* Search and Actions */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search..."
            className="pl-9 bg-transparent border-gray-800"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-gray-800">
              {stockFilters.find((f) => f.value === currentStockFilter)?.label}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {stockFilters.map((filter) => (
              <DropdownMenuItem key={filter.value} onClick={() => setCurrentStockFilter(filter.value)}>
                {filter.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-gray-800">
              {sortOptions.find((o) => o.value === currentSort)?.label}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {sortOptions.map((option) => (
              <DropdownMenuItem key={option.value} onClick={() => setCurrentSort(option.value)}>
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {selectedCount > 0 && (
          <Button variant="outline" className="border-gray-800" onClick={clearSelection}>
            <X className="mr-2 h-4 w-4" />
            Cancel Marking
          </Button>
        )}

        {selectedCount > 0 && (
          <Button
            variant="destructive"
            onClick={() => {
              const selectedIds = Object.entries(selectedRows)
                .filter(([_, selected]) => selected)
                .map(([id]) => id)
              onDelete?.(selectedIds)
              clearSelection()
            }}
          >
            Delete
          </Button>
        )}

        <Button className="bg-purple-600 hover:bg-purple-700 ml-auto" onClick={onAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="bg-white bg-opacity-5 rounded-xl p-4 relative group">
            <Checkbox
              checked={selectedRows[product.id]}
              onCheckedChange={() => toggleSelection(product.id)}
              className="absolute top-4 left-4 z-10"
            />
            <div className="aspect-square bg-gray-800 rounded-lg mb-4" />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{product.description}</p>
            <div className="flex justify-between text-sm">
              <div>
                <div className="text-gray-500">Product</div>
                <div className="font-semibold">{product.productCount}</div>
              </div>
              <div>
                <div className="text-gray-500">Stock</div>
                <div className="font-semibold">{product.stockCount}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-gray-800">
                {itemsPerPage} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {itemsPerPageOptions.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => {
                    setItemsPerPage(option)
                    setCurrentPage(1)
                  }}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <span>from {sortedProducts.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="border-gray-800 p-2"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: Math.min(5, pageCount) }, (_, i) => {
            const page = i + 1
            return (
              <Button
                key={page}
                variant="outline"
                className={`border-gray-800 ${currentPage === page ? "bg-purple-600" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            )
          })}
          {pageCount > 5 && <span>...</span>}
          {pageCount > 5 && (
            <Button variant="outline" className="border-gray-800" onClick={() => setCurrentPage(pageCount)}>
              {pageCount}
            </Button>
          )}
          <Button
            variant="outline"
            className="border-gray-800 p-2"
            onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
            disabled={currentPage === pageCount}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

