import React from 'react'
import Announcements from '../components/Announcements';
import Categories from '../components/Categories';
import Navbar from "../components/Navbar";
import Slider from '../components/Slider';
import BooksList from '../components/BooksList';
import Substack from '../components/Substack';
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Announcements/>
      <Navbar/>
      <Slider />
      <Categories />
      <BooksList />
      <Substack />
      <Footer />
    </div>
  );
};

export default Home;