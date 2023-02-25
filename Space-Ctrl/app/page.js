import { Footer, Navbar } from '../components';
import { About, Hero, Insights, WhatsNew } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <WhatsNew />
    <Insights />
    <Footer />
  </div>
);

export default Page;
