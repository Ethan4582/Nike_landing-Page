import { Hero, CustomerReview, Footer,  PopularProduct, Services, SpecialOffer, Subscribe,  SuperQuality } from './sections'
import Nav from "./components/Nav"

const App= ()=>(
  <main className="relative bg-mycolor">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
      <section className="padding"> 
        <PopularProduct/>
      </section>
      <section className="padding"> 
        <SuperQuality/>
      </section>
      <section className="padding-x py-10"> 
        <Services/>
      </section>
      <section className="padding"> 
        <SpecialOffer/>
      </section>
      <section className="bg-pale-blue padding "> 
        <CustomerReview/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full"> 
       <Subscribe/>
      </section>
      <section className=" bg-black padding-x padding-t pb-8"> 
        <Footer/>
      </section>
    </section>
  </main>
)

export default App;