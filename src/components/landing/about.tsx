export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for the Bold. Designed for the Future.
          </h2>
          <div className="mt-8 space-y-6 text-lg text-muted-foreground">
            <p>
              Aeonium Technologies is a South African software company on a mission to simplify data analytics and machine learning for businesses of all sizes. Through our flagship SaaS platform—Aeonium Insights—we help organizations make smarter decisions, uncover actionable insights, and automate complex workflows with ease.
            </p>
            <p>
              We are passionate about making enterprise-grade intelligence accessible to SMEs, startups, and large enterprises alike—without the complexity or cost of traditional solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
