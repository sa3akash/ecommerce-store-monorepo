import { Products } from '@ui/dashboard/pages/products';

export default function Home() {
  return (
    <>
      <Products />
    </>
  );
}

// const { setTheme } = useThemes();

// const { user, isLoading } = useAuth();

//  <h1>Name - {isLoading ? "Loading...": user?.name}</h1>
//     <Button onClick={() => setTheme('light')}>light</Button>
//     <Button onClick={() => setTheme('dark')}>dark</Button>
//     <div>
//         <Button onClick={logoutAction}>Logout</Button>
//       </div>
