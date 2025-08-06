import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { Services } from './components/Services';
// import { AboutUs } from './components/AboutUs';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
// import { Awards } from './components/Awards';
import { CoreAreas } from './components/CoreAreas';
// import { Blog } from './components/Blog';
export function App() {
  return <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Hero />
      <div className="max-w-[1425px] px-[60px] mx-auto my-0">
        <FeatureCards />
        <Services />
      {/* <AboutUs /> */}
      <CoreAreas />
      {/* <Blog /> */}
      <Testimonials />
      {/* <Awards /> */}
      <ContactForm />
      </div>
      <Footer />
    </div>;
}