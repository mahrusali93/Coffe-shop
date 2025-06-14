import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Star } from "lucide-react";
import { motion } from "framer-motion";

const featuredDrinks = [
  {
    name: "Caramel Macchiato",
    description: "Espresso with steamed milk and vanilla, topped with caramel drizzle.",
    image: "/images/caramel-macchiato.jpg",
  },
  {
    name: "Iced Americano",
    description: "Chilled espresso with water and ice – strong, smooth and refreshing.",
    image: "/images/iced-americano.jpg",
  },
  {
    name: "Mocha Latte",
    description: "Espresso mixed with rich chocolate syrup and steamed milk.",
    image: "/images/mocha-latte.jpg",
  },
];

export default function CoffeeShop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-6 font-sans">
      <header className="flex items-center justify-between py-6">
        <h1 className="text-4xl font-bold flex items-center gap-2 text-amber-800">
          <Coffee className="w-8 h-8" /> Cozy Bean
        </h1>
        <nav className="space-x-4">
          <Button variant="ghost">Menu</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </nav>
      </header>

      <main className="mt-10">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold text-amber-700 mb-4">Brewed with Passion</h2>
          <p className="text-lg text-amber-600 max-w-xl mx-auto">
            At Cozy Bean, we serve handcrafted coffee made from premium beans roasted to perfection.
          </p>
          <Button className="mt-6 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-2xl shadow-md">
            Explore Our Menu
          </Button>
        </motion.section>

        <section className="mt-20">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-10">Featured Drinks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDrinks.map((drink, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="rounded-t-2xl h-48 w-full object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className="text-xl font-semibold text-amber-700 flex items-center gap-2">
                      {drink.name} <Star className="w-4 h-4 text-yellow-400" />
                    </h4>
                    <p className="text-sm text-amber-600 mt-2">{drink.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 text-center text-amber-600 text-sm">
        © 2025 Cozy Bean Coffee Shop. Crafted with love ☕
      </footer>
    </div>
  );
}
