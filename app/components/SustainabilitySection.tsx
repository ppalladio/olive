import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Leaf, Recycle, Sun, TreePine, Users } from 'lucide-react';

export function SustainabilitySection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-green-700 text-white">Our Commitment</Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Sustainable by Nature</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Every decision we make considers the impact on our land, our community, and future generations. Sustainability isn &apos; t
                        just a practice for us—it&apos;s a way of life rooted in respect for nature.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TreePine className="h-8 w-8 text-green-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Regenerative Agriculture</h3>
                            <p className="text-gray-600">
                                We practice regenerative farming that improves soil health, increases biodiversity, and captures carbon naturally,
                                making our groves carbon-negative.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Droplets className="h-8 w-8 text-blue-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Water Conservation</h3>
                            <p className="text-gray-600">
                                Our ancient irrigation systems and drought-resistant olive varieties use 70% less water than conventional farming,
                                preserving this precious Mediterranean resource.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sun className="h-8 w-8 text-amber-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Solar-Powered Production</h3>
                            <p className="text-gray-600">
                                Our mill runs entirely on solar energy, and we use traditional stone pressing methods that require minimal
                                electricity, reducing our carbon footprint to near zero.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Recycle className="h-8 w-8 text-green-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Zero Waste Philosophy</h3>
                            <p className="text-gray-600">
                                Olive pomace becomes natural fertilizer, pruned branches fuel our heating, and our glass bottles are designed for
                                reuse and recycling.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-purple-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
                            <p className="text-gray-600">
                                We employ local artisans year-round, support traditional crafts, and contribute 5% of profits to Mediterranean
                                ecosystem conservation projects.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="h-8 w-8 text-green-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Biodiversity Protection</h3>
                            <p className="text-gray-600">
                                Our groves are home to over 150 species of birds, insects, and plants. We maintain wild corridors and native
                                vegetation to support ecosystem health.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Certifications */}
                <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Certifications</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <span className="text-white font-bold text-sm">ORGANIC</span>
                            </div>
                            <p className="text-sm text-gray-600">EU Organic Certified</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <span className="text-white font-bold text-sm">FAIR</span>
                            </div>
                            <p className="text-sm text-gray-600">Fair Trade Certified</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-2">
                                <span className="text-white font-bold text-sm">BIO</span>
                            </div>
                            <p className="text-sm text-gray-600">Biodynamic Agriculture</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                <span className="text-white font-bold text-sm">B-CORP</span>
                            </div>
                            <p className="text-sm text-gray-600">B-Corporation Certified</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
