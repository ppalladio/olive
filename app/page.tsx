import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Leaf, Shield, Star, Truck } from 'lucide-react';
import Image from 'next/image';
import { SustainabilitySection } from './components/SustainabilitySection';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Leaf className="h-8 w-8 text-green-700" />
                        <span className="text-2xl font-bold text-gray-900">Elaia</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#products" className="text-gray-700 hover:text-green-700 transition-colors">
                            Products
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-green-700 transition-colors">
                            Our Story
                        </a>
                        <a href="#quality" className="text-gray-700 hover:text-green-700 transition-colors">
                            Quality
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-green-700 transition-colors">
                            Contact
                        </a>
                    </nav>
                    <Button className="bg-green-700 hover:bg-green-800">Shop Now</Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-cover bg-center">
                    <Image fill src={'/hero.jpg'} alt="Hero" className="object-cover" />
                </div>
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <Badge className="mb-4 bg-green-700/90 text-white">Sustainable • Artisan • Heritage</Badge>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Handcrafted Liquid Gold from
                        <span className="text-yellow-300"> Ancient Groves</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
                        Sustainably harvested and artisan-crafted extra virgin olive oil from century-old trees, preserving both tradition and our
                        Mediterranean ecosystem for future generations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-green-700 hover:bg-green-800 text-lg px-8 py-4">
                            Discover Our Collection
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-transparent"
                        >
                            Learn Our Story
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section id="products" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Artisan Collection</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Small-batch, handcrafted oils made using traditional methods passed down through generations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <div className="aspect-square bg-gradient-to-br from-green-100 to-yellow-100 relative overflow-hidden">
                                <Image
                                    width={400}
                                    height={200}
                                    src="/hero.jpg"
                                    alt="Kalamata Reserve"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <Badge className="absolute top-4 left-4 bg-yellow-600">Best Seller</Badge>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">(127 reviews)</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kalamata Reserve</h3>
                                <p className="text-gray-600 mb-4">
                                    Hand-harvested from 200-year-old trees using traditional methods. Cold-pressed within 2 hours of harvest in our
                                    stone mill, preserving every nuance of flavor while supporting biodiversity.
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-green-700">€45</span>
                                    <Button className="bg-green-700 hover:bg-green-800">Add to Cart</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <div className="aspect-square bg-gradient-to-br from-green-100 to-yellow-100 relative overflow-hidden">
                                <Image
                                    width={400}
                                    height={200}
                                    src="/hero.jpg"
                                    alt="Crete Gold"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <Badge className="absolute top-4 left-4 bg-green-600">Organic</Badge>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">(89 reviews)</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Crete Gold</h3>
                                <p className="text-gray-600 mb-4">
                                    Certified organic and biodynamic. Our artisan farmers use ancient techniques with zero pesticides, creating a pure
                                    oil that reflects the pristine Cretan terroir and sustainable practices.
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-green-700">€52</span>
                                    <Button className="bg-green-700 hover:bg-green-800">Add to Cart</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <div className="aspect-square bg-gradient-to-br from-green-100 to-yellow-100 relative overflow-hidden">
                                <Image
                                    width={400}
                                    height={200}
                                    src="/hero.jpg"
                                    alt="Olympian Heritage"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <Badge className="absolute top-4 left-4 bg-purple-600">Limited Edition</Badge>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">(156 reviews)</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Olympian Heritage</h3>
                                <p className="text-gray-600 mb-4">
                                    Limited production from our oldest grove near Mount Olympus. Hand-selected olives processed in small batches using
                                    traditional stone mills, supporting local artisan communities.
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-green-700">€68</span>
                                    <Button className="bg-green-700 hover:bg-green-800">Add to Cart</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <Badge className="mb-4 bg-green-700 text-white">Sustainable Artisans</Badge>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Guardians of Ancient Traditions</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                For five generations, our family has been stewards of the land, practicing sustainable agriculture that honors both
                                tradition and the environment. Our artisan approach combines time-honored techniques with modern ecological wisdom,
                                ensuring every bottle supports biodiversity and local communities.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                We hand-harvest our olives at dawn when the fruit is at its peak, using traditional methods that preserve the
                                trees&apos; longevity. Our stone mills, some over 100 years old, crush the olives slowly and gently, maintaining the
                                oil&apos;s natural complexity while minimizing our environmental footprint.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-700 mb-2">0</div>
                                    <div className="text-gray-600">Pesticides Used</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
                                    <div className="text-gray-600">Hand-Harvested</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image fill src="/hero.jpg" alt="Greek olive grove" className="rounded-lg shadow-2xl" />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                                <div className="flex items-center space-x-3">
                                    <Award className="h-8 w-8 text-yellow-500" />
                                    <div>
                                        <div className="font-bold text-gray-900">Gold Medal</div>
                                        <div className="text-sm text-gray-600">International Olive Oil Competition</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SustainabilitySection />

            {/* Quality Features */}
            <section id="quality" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Artisan Craftsmanship</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Every bottle reflects centuries of traditional knowledge and sustainable practices
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                                <Leaf className="h-8 w-8 text-green-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Stone Mills</h3>
                            <p className="text-gray-600">
                                Our century-old stone mills crush olives slowly and gently, preserving delicate flavors and nutrients while using
                                minimal energy—the same method our ancestors perfected.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                                <Shield className="h-8 w-8 text-green-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Hand-Selected Excellence</h3>
                            <p className="text-gray-600">
                                Master artisans hand-select each olive at peak ripeness. This meticulous process ensures only the finest fruit enters
                                our mills, maintaining our uncompromising quality standards.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                                <Heart className="h-8 w-8 text-green-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Small-Batch Artistry</h3>
                            <p className="text-gray-600">
                                Limited production allows us to monitor every step personally. Each batch is crafted with the attention and care of a
                                master artisan, ensuring exceptional quality and character.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4">
                                    "Not only is this the finest olive oil I've tasted, but knowing it's produced sustainably makes every dish feel
                                    good. The artisan quality is evident in every drop."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                                        <div className="text-sm text-gray-600">Chef, Barcelona</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4">
                                    &quot;As a chef committed to sustainable sourcing, Elaia represents everything I value: exceptional quality,
                                    environmental responsibility, and authentic artisan craftsmanship.&ldquo;
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                    <div>
                                        <div className="font-semibold text-gray-900">James Mitchell</div>
                                        <div className="text-sm text-gray-600">Restaurant Owner, London</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4">
                                    The story behind each bottle is as beautiful as the oil itself. Supporting traditional artisans while enjoying the
                                    world&apos;s finest olive oil—it doesn&apos;t get better than this.&ldquo;
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Sophie Laurent</div>
                                        <div className="text-sm text-gray-600">Food Blogger, Paris</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Taste the Difference Tradition Makes</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Support sustainable agriculture and artisan craftsmanship with every bottle</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-4">
                            Shop Collection
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-4 bg-transparent"
                        >
                            <Truck className="w-5 h-5 mr-2" />
                            Free Shipping on Orders €75+
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Leaf className="h-8 w-8 text-green-400" />
                                <span className="text-2xl font-bold">Elaia</span>
                            </div>
                            <p className="text-gray-400 mb-4">Premium Greek olive oil from ancient groves, crafted with tradition and passion.</p>
                            <div className="flex space-x-4">
                                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Products</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Kalamata Reserve
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Crete Gold
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Olympian Heritage
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Gift Sets
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Our Story
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Quality Promise
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Sustainability
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Kalamata, Greece</li>
                                <li>+30 27210 12345</li>
                                <li>hello@elaia-olive.com</li>
                                <li>Mon-Fri 9AM-6PM CET</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Elaia Premium Olive Oil. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
