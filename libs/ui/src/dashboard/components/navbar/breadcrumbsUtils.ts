export interface Breadcrumb {
  label: string;
  href: string;
}

const routeLabels: { [key: string]: string } = {
  '/': 'Dashboard',
  'getting-started': 'Getting Started',
  'data-fetching': 'Data Fetching'
};

export function generateBreadcrumbs(path: string): Breadcrumb[] {
  const parts = path.split('/').filter(Boolean);
  let currentPath = '';

  if (path === '/') {
    return [{ label: 'Dashboard', href: '/' }];
  }

  return parts.map((part, index) => {
    currentPath += `/${part}`;
    return {
      label: routeLabels[part] || part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
      href: index === parts.length - 1 ? '#' : currentPath
    };
  });
}
