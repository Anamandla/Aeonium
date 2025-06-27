import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "The AI query feature is a game-changer. I can get complex data insights in seconds without writing a single line of SQL.",
    name: "Sipho Ndlovu",
    title: "Data Scientist",
    avatar: "SN",
    image: "https://placehold.co/100x100.png"
  },
  {
    quote: "As a marketing manager, the automation builder has saved my team countless hours. We've automated our weekly reports and can focus more on strategy.",
    name: "Aisha Patel",
    title: "Marketing Manager",
    avatar: "AP",
    image: "https://placehold.co/100x100.png"
  },
  {
    quote: "Finally, a BI tool that doesn't require a whole engineering team to manage. I can build the dashboards I need to run my business effectively.",
    name: "Mike van der Merwe",
    title: "Chief Operating Officer",
    avatar: "MM",
    image: "https://placehold.co/100x100.png"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <p className="colored-title">Testimonials</p>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-4">
            Hear from our customers
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card/50 border-border/50">
              <CardContent className="pt-6">
                <blockquote className="text-muted-foreground text-base">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person business" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </figcaption>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
