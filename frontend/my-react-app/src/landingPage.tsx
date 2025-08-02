import {
  Search,
  MapPin,
  CalendarIcon,
  Users,
  Plane,
  Hotel,
  Car,
  Camera,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import LoginForm from "./loginForm"
import SignupForm from "./signupForm"
type LinkProps = React.ComponentProps<"a"> & { href: string }
function externalLink({ href, children, ...props }: LinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

export default function TravelPlanner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [travelers, setTravelers] = useState<string>("")

  const popularDestinations = [
    {
      name: "Paris, France",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $899",
      rating: 4.8,
      description: "City of Light and romance",
    },
    {
      name: "Tokyo, Japan",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $1,299",
      rating: 4.9,
      description: "Modern culture meets tradition",
    },
    {
      name: "Bali, Indonesia",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $699",
      rating: 4.7,
      description: "Tropical paradise and culture",
    },
    {
      name: "New York, USA",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $799",
      rating: 4.6,
      description: "The city that never sleeps",
    },
    {
      name: "Santorini, Greece",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $1,099",
      rating: 4.8,
      description: "Stunning sunsets and architecture",
    },
    {
      name: "Dubai, UAE",
      image: "/placeholder.svg?height=300&width=400",
      price: "From $999",
      rating: 4.7,
      description: "Luxury and modern marvels",
    },
  ]

  const features = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Flight Booking",
      description: "Find and book the best flights at competitive prices",
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hotel Reservations",
      description: "Discover and book accommodations worldwide",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Car Rentals",
      description: "Rent vehicles for your travel convenience",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Tour Packages",
      description: "Curated experiences and guided tours",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Travel Insurance",
      description: "Protect your trip with comprehensive coverage",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for your travels",
    },
  ]

  return (
   <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                {/* Plane Icon - replace with emoji or SVG */}
                ✈️
                <span className="text-xl font-bold text-gray-900">TravelPlan</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
                Destinations
              </a>
              <a href="#flights" className="text-gray-700 hover:text-blue-600 transition-colors">
                Flights
              </a>
              <a href="#hotels" className="text-gray-700 hover:text-blue-600 transition-colors">
                Hotels
              </a>
              <a href="#packages" className="text-gray-700 hover:text-blue-600 transition-colors">
                Packages
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors">
                <Link to="/login">
                  Login
                </Link>
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <Link to="/signup">
                  Sign Up
                </Link>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {/* Use emoji or SVG for menu icon */}
                {isMenuOpen ? "✖️" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Destinations
                </a>
                <a href="#flights" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Flights
                </a>
                <a href="#hotels" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Hotels
                </a>
                <a href="#packages" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Packages
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <button className="text-left px-4 py-2 rounded-md text-gray-700 hover:text-blue-600">
                    Sign In
                  </button>
                  <button className="text-left px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Sign Up
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Plan Your Perfect Journey</h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100">
              Discover amazing destinations, book flights, hotels, and create unforgettable memories
            </p>

            {/* Search Form */}
            <div className="bg-white/95 backdrop-blur text-gray-900 rounded-xl max-w-5xl mx-auto shadow">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Destination Input */}
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">📍</span>
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="pl-10 h-12 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Check-in */}
                  <input
                    type="date"
                    value={checkInDate ? checkInDate.toISOString().split("T")[0] : ""}
                    onChange={(e) => setCheckInDate(e.target.value ? new Date(e.target.value) : undefined)}
                    className="h-12 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700"
                  />

                  {/* Check-out */}
                  <input
                    type="date"
                    value={checkOutDate ? checkOutDate.toISOString().split("T")[0] : ""}
                    onChange={(e) => setCheckOutDate(e.target.value ? new Date(e.target.value) : undefined)}
                    className="h-12 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700"
                  />

                  {/* Travelers Select */}
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="h-12 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700"
                  >
                    <option value="">Travelers</option>
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3">3 Travelers</option>
                    <option value="4">4 Travelers</option>
                    <option value="5+">5+ Travelers</option>
                  </select>
                </div>

                {/* Search Button */}
                <button className="w-full mt-6 h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
                  🔍
                  <span>Search Trips</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the world's most amazing places with our curated travel packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white hover:shadow-lg transition-shadow cursor-pointer group border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 text-gray-900">
                    ⭐
                    {destination.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                    <span className="text-lg font-bold text-blue-600">{destination.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <button className="w-full border border-gray-300 rounded-md py-2 hover:bg-gray-50 flex justify-center items-center gap-2">
                    View Details
                    <span className="transform transition-transform group-hover:translate-x-1">➡️</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Trip
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From flights to accommodations, we've got all your travel needs covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-lg border bg-white hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of travelers who trust us to plan their perfect trips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-12 px-8 rounded-md bg-white text-blue-600 font-semibold hover:bg-blue-100 transition">
              Start Planning
            </button>
            <button className="h-12 px-8 rounded-md border border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo + Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">✈️</span>
                <span className="text-xl font-bold">TravelPlan</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for unforgettable travel experiences around the world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Flights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hotels</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Car Rentals</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TravelPlan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
