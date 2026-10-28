import { About, Contact, Faq, Header, Hero, Packages, Process, Videos } from './components/Sections';
import { ContactFab } from './components/ContactFab';

export default function App() {
  return (
    <>
      <div className="page">
        <a className="skip" href="#portfolyo">
          İçeriğe geç
        </a>
        <Header />
        <main>
          <Hero />
          <About />
          <Videos />
          <Process />
          <Packages />
          <Faq />
          <Contact />
        </main>
      </div>
      {/* .page bir container olduğu için sabit konumlu ikon onun dışında durur; içinde olsaydı sayfayla birlikte kayardı. */}
      <ContactFab />
    </>
  );
}
