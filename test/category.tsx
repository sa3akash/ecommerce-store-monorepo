"use client"

import { useState } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus, Trash, X } from "lucide-react"

import { Button } from "@ecommerce/ui/src/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ecommerce/ui/src/components/ui/dropdown-menu"
import { Input } from "@ecommerce/ui/src/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ecommerce/ui/src/components/ui/table"
import { Checkbox } from "@ecommerce/ui/src/components/ui/checkbox"

// Define the data type
type Product = {
  id: string
  name: string
  description: string
  category: string
  productCount: number
  stockCount: number
  image: string
}

// Sample data
const data: Product[] = [
  {
    id: "1",
    name: "Headphone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Electronics",
    productCount: 140,
    stockCount: 134,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container%20(2)-7HMdyE29cCjF9zk751ILpfbYoscLUC.png",
  },
  {
    id: "2",
    name: "Mouse",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    category: "Electronics",
    productCount: 180,
    stockCount: 134,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container%20(2)-7HMdyE29cCjF9zk751ILpfbYoscLUC.png",
  },
  // Add more sample data as needed
]

export function Category() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const columns: ColumnDef<Product>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="flex items-center gap-4">
          <img
            src={row.original.image || "/placeholder.svg"}
            alt={row.original.name}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div>
            <div className="font-medium">{row.getValue("name")}</div>
            <div className="text-sm text-muted-foreground">{row.original.description}</div>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <div>{row.getValue("category")}</div>,
    },
    {
      accessorKey: "productCount",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Products
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div >{row.getValue("productCount")}</div>,
    },
    {
      accessorKey: "stockCount",
      header: "Stock",
      cell: ({ row }) => <div>{row.getValue("stockCount")}</div>,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit product</DropdownMenuItem>
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Delete product</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center justify-between space-x-2 p-4">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Filter products..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                All Stock <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => table.resetColumnFilters()}>All Stock</DropdownMenuItem>
              <DropdownMenuItem onClick={() => table.getColumn("stockCount")?.setFilterValue((old: number) => old > 0)}>
                In Stock
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => table.getColumn("stockCount")?.setFilterValue((old: number) => old === 0)}
              >
                Out of Stock
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-2">
          {table.getSelectedRowModel().rows.length > 0 && (
            <>
              <Button variant="outline" size="sm" onClick={() => table.toggleAllPageRowsSelected(false)}>
                <X className="mr-2 h-4 w-4" />
                Cancel Selection
              </Button>
              <Button variant="destructive" size="sm">
                <Trash className="mr-2 h-4 w-4" />
                Delete Selected
              </Button>
            </>
          )}
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Category
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 p-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
          selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}




















// 'use client'

// import { ITEMS_PER_PAGE_OPTIONS, PRODUCTS, SORT_OPTIONS, STOCK_FILTERS } from "../../components/molecules/table-data";
// import { TableGrid } from "../../components/molecules/Table-grid";

// export const Category = () => {
//   return (
//     <div className="min-h-screen bg-[#0A0A0A] text-white p-6">
//     <div className="max-w-[1400px] mx-auto">
//       <TableGrid
//         products={PRODUCTS}
//         sortOptions={SORT_OPTIONS}
//         stockFilters={STOCK_FILTERS}
//         itemsPerPageOptions={ITEMS_PER_PAGE_OPTIONS}
//         onDelete={(selectedIds) => {
//           console.log("Delete:", selectedIds)
//         }}
//         onAdd={() => {
//           console.log("Add category clicked")
//         }}
//       />
//     </div>
//   </div>
//   );
// }


