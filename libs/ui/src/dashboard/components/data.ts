import {
  BaggageClaim,
  ChartBarBig,
  Frame,
  LayoutDashboard,
  ListOrdered,
  Map,
  PieChart,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react"

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },


  teams: [
    {
      name: "Pixmart.",
      logo: ShoppingBag,
      plan: "Online Shop",
    },
  ],

  dashboard: [
    {
      name: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
  ],

  others: [
    {
      name: "Users",
      url: "/",
      icon: Users,
    },
    {
      name: "Campaign",
      url: "/",
      icon: Zap,
    },
  ],


}


export const projectData = [
  {
    name: "Design Engineering",
    url: "#",
    icon: Frame,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChart,
  },
  {
    name: "Travel",
    url: "#",
    icon: Map,
  },
]


export const navData = [
  {
    title: "Products",
    url: "/",
    icon: ListOrdered,
    isActive: true,
    items: [
      {
        title: "Product",
        url: "#",
      },
      {
        title: "Add Product",
        url: "#",
      },
      {
        title: "All Products",
        url: "#",
      },

    ],
  },
  {
    title: "Orders",
    url: "/",
    icon: BaggageClaim,
    isActive: false,
    items: [
      {
        title: "Order",
        url: "#",
      },
      {
        title: "Add Order",
        url: "#",
      },
      {
        title: "All Orders",
        url: "#",
      },

    ],
  },
  {
    title: "Categories",
    url: "/",
    icon: ChartBarBig,
    isActive: false,
    items: [
      {
        title: "Category",
        url: "#",
      },
      {
        title: "Add Category",
        url: "#",
      },
      {
        title: "Add Sub Category",
        url: "#",
      },
      {
        title: "All Categores",
        url: "#",
      },
      {
        title: "All Sub Categores",
        url: "#",
      },

    ],
  },

]