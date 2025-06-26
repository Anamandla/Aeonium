import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-card border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Logo className="h-8 w-8 text-primary" />
                            <span className="font-headline text-xl font-bold text-foreground">
                            Aeonium
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">Empowering Businesses with AI-Powered Insights.</p>
                        <div className="flex space-x-4">
                            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-foreground">Product</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="#features" className="text-muted-foreground hover:text-primary">Features</Link></li>
                            <li><Link href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                            <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Book a Demo</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-foreground">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">contact@aeonium.tech</Link></li>
                            <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground">Subscribe to our newsletter</h3>
                        <p className="mt-4 text-sm text-muted-foreground">Get the latest news, articles, and resources, sent to your inbox weekly.</p>
                        <form className="mt-4 flex gap-2">
                            <Input type="email" placeholder="Enter your email" className="flex-1" aria-label="Email for newsletter"/>
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Aeonium Technologies (Pty) Ltd. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
