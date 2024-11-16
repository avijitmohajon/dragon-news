
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/Layout-component/LeftNavbar';
import RightNavbar from '../Components/Layout-component/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            {/* Header */}

            <header className='mt-5'>
                <Header></Header>

                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            {/* Navbar */}

            <nav className='w-11/12 mx-auto mt-3'>
                <Navbar></Navbar>
            </nav>

            {/* main */}

            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>

                <aside className='left col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>

                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='right col-span-3'>
                    <RightNavbar />
                </aside>

            </main>
        </div>
    );
};

export default HomeLayout;