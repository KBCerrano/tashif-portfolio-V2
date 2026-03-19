import "vite-project\src\styles\section.css";

function Section({ children, variant = "default" }) {
  return (
    <section className={`section section-${variant}`}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}

export default Section;