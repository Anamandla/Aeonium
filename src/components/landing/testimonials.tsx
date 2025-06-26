import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Aeonium helped us reduce churn by 20% in just 3 months. Their insights are incredibly powerful.",
    name: "Sipho Ndlovu",
    title: "SME Owner",
    avatar: "SN",
    image: "https://placehold.co/100x100.png"
  },
  {
    quote: "We now get insights in minutes, not days. The time savings for our marketing team have been phenomenal.",
    name: "Aisha Patel",
    title: "Marketing Director",
    avatar: "AP",
    image: "https://placehold.co/100x100.png"
  },
  {
    quote: "The automation builder is a game-changer. We've automated so many manual processes, freeing up our ops team for more strategic work.",
    name: "Mike van der Merwe",
    title: "Ops Lead",
    avatar: "MM",
    image: "https://placehold.co/100x100.png"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by forward-thinking teams
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between">
              <CardContent className="pt-6 flex-1 flex flex-col justify-between">
                <blockquote className="text-muted-foreground text-lg">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person business" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.title}</div>
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
