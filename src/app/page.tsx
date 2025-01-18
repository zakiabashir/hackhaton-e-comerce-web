

import Hero from "./components/Hero";
import TopCategories from "./components/TopCategories";
import LatestProducts from "./components/LatestProducts";
import Feature from "./components/FeatureProduct";
import Offers from "./components/Offers";
import Unique from "./components/Unique";
import TrendingProducts from "./components/TrendingProducts";
import Discount from "./components/Discount";
import BlogSection from "./components/BlogSection";
import Newslater from "./components/Newslater";
import { client } from "@/sanity/lib/client";

const getProducts = async ()=>{
  const products = await client.fetch(
          `
          *[_type=="product"][3..8]{
        _id,
          name,
          description,
         
          price,
          "image_url":image.asset->url,
        
      }
          `
  )
  return products

}
async function Homepage(){
  const products = await getProducts()
  return(
    <div>
      <Hero />
      <Feature />
      <LatestProducts products={products} />
      <Offers />
      <Unique />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
      <BlogSection />
      
    </div>
  )
}

export default Homepage;