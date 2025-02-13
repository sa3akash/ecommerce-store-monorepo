import {
  BaggageClaim,
  ChartBarBig,
  Frame,
  Images,
  LayoutDashboard,
  ListOrdered,
  Map,
  PieChart,
  Rss,
  ShoppingBag,
  Users,
  Zap
} from 'lucide-react';

export const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
  },

  teams: [
    {
      name: 'Pixmart.',
      logo: ShoppingBag,
      plan: 'Online Shop'
    }
  ],

  dashboard: [
    {
      name: 'Dashboard',
      url: '/',
      icon: LayoutDashboard
    }
  ],

  others: [
    {
      name: 'Users',
      url: '/',
      icon: Users
    },
    {
      name: 'Campaign',
      url: '/',
      icon: Zap
    },
    {
      name: 'Carousel',
      url: '/',
      icon: Images
    },
    {
      name: 'ADS',
      url: '/',
      icon: Rss
    }
  ]
};

export const projectData = [
  {
    name: 'Design Engineering',
    url: '#',
    icon: Frame
  },
  {
    name: 'Sales & Marketing',
    url: '#',
    icon: PieChart
  },
  {
    name: 'Travel',
    url: '#',
    icon: Map
  }
];

export const navData = [
  {
    title: 'Products',
    url: '/',
    icon: ListOrdered,
    isActive: true,
    items: [
      {
        title: 'Product',
        url: '/product'
      },
      {
        title: 'Add Product',
        url: '/product/add-product'
      },
      {
        title: 'All Products',
        url: '/product/all-products'
      }
    ]
  },
  {
    title: 'Orders',
    url: '/',
    icon: BaggageClaim,
    isActive: false,
    items: [
      {
        title: 'Order',
        url: '/order'
      },
      {
        title: 'Add Order',
        url: '/order/add-order'
      },
      {
        title: 'All Orders',
        url: '/order/all-orders'
      }
    ]
  },
  {
    title: 'Categories',
    url: '/',
    icon: ChartBarBig,
    isActive: false,
    items: [
      {
        title: 'Category',
        url: '/category'
      },
      {
        title: 'Add Category',
        url: '/category/add-category'
      },
      {
        title: 'Add Sub Category',
        url: '/category/add-sub-category'
      },
      {
        title: 'All Categores',
        url: '/category/all-category'
      },
      {
        title: 'All Sub Categores',
        url: '/category/all-sub-category'
      }
    ]
  }
];

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const paymentData: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com'
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com'
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com'
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com'
  }
];
