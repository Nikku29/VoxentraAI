import { HoloScrollArchitect } from './HoloScrollArchitect'

export const TrinityArchitecture = () => {

  return (
    <section
      id="technology"
      className="bg-background py-24 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-16 text-center opacity-0 transition-all duration-700 ease-out">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            ARCHITECTURAL DEFENSE: THE SYNERGISTIC TRINITY
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Scroll-Driven Layered Intelligence
          </p>
        </div>

        {/* Holo Scroll Architect - Trinity Visualization */}
        <HoloScrollArchitect />
      </div>
    </section>
  );
};
