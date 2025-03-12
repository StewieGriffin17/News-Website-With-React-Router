import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";

const HomeLayout = () => {
  return (
    <div className="font-family">
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav className="w-10/12 mx-auto py-3">
        <Navbar></Navbar>
      </nav>

      <main className="w-10/12 mx-auto pt-5 grid grid-cols-12 gap-5">
		<aside className="col-span-3">
            <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
            <RightNavbar></RightNavbar>
        </aside>
	  </main>
    </div>
  );
};

export default HomeLayout;
