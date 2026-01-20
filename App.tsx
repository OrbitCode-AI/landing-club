import Header from './Header';
import Hero from './Hero';
import Events from './Events';
import Team from './Team';
import Gallery from './Gallery';
import Join from './Join';
import Footer from './Footer';
import './styles.css';

export default function App() {
  return (
    <div className="club-site">
      <Header />
      <Hero />
      <Events />
      <Team />
      <Gallery />
      <Join />
      <Footer />
    </div>
  );
}
