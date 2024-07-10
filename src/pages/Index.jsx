import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { Home, Info, Mail, Star } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const handleNavClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);

    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to [App Name]</h1>
            <p className="text-xl mb-8">Streamline processes, boost productivity, and drive growth.</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <p className="max-w-3xl mx-auto text-center">We are a company dedicated to providing top-notch solutions to streamline your workflow and boost productivity. Our team of experts is committed to delivering the best service and support to help you achieve your goals.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <div className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#home" className="hover:text-purple-400">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400">About</a></li>
                <li><a href="#features" className="hover:text-purple-400">Features</a></li>
                <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="text-center mt-4">
            &copy; 2023 [App Name]. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Intuitive Interface",
    description: "User-friendly design for seamless navigation and efficient task management."
  },
  {
    icon: <Home className="h-8 w-8 text-purple-600" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful data analysis tools."
  },
  {
    icon: <Info className="h-8 w-8 text-purple-600" />,
    title: "Seamless Integration",
    description: "Easily connect with your favorite tools and platforms."
  }
];

export default Index;