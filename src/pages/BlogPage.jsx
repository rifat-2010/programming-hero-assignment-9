import React from 'react';

const BlogPage = () => {
    return (
        <div className="font-sans bg-gradient-to-b from-primary/10 to-softpink/10 min-h-screen">
            {/* Hero Section */}
            <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-primary to-mint rounded-b-3xl shadow-md">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">Playful Parenthood</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                        Discover fun toys, creative play ideas, and expert parenting tips to make childhood magical!
                    </p>
                    <div className="mt-10">
                        <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full p-1 animate-bounce">
                            {/* <i data-feather="chevron-down" className="text-white w-8 h-8"></i> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Blogs Section */}
            <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-accent">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Card 1 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img src="http://static.photos/toys/640x360/1" alt="Educational Toys" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-secondary rounded-full mb-2">Learning</span>
                            <h3 className="text-xl font-bold mb-2">Top 10 Educational Toys for Toddlers</h3>
                            <p className="text-gray-600 mb-4">Discover toys that make learning fun and help develop essential skills.</p>
                            <a href="#" className="text-accent font-medium flex items-center">
                                Read More {/* <i data-feather="arrow-right" className="ml-2 w-4 h-4"></i> */}
                            </a>
                        </div>
                    </div>

                    {/* Blog Card 2 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img src="http://static.photos/toys/640x360/2" alt="Creative Play" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-primary rounded-full mb-2">Creativity</span>
                            <h3 className="text-xl font-bold mb-2">Unlocking Imagination Through Play</h3>
                            <p className="text-gray-600 mb-4">How simple toys can spark endless creative adventures for your child.</p>
                            <a href="#" className="text-accent font-medium flex items-center">
                                Read More {/* <i data-feather="arrow-right" className="ml-2 w-4 h-4"></i> */}
                            </a>
                        </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <img src="http://static.photos/toys/640x360/3" alt="Outdoor Play" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-softpink rounded-full mb-2">Outdoors</span>
                            <h3 className="text-xl font-bold mb-2">Best Outdoor Toys for Active Kids</h3>
                            <p className="text-gray-600 mb-4">Get your kids moving with these fun and engaging outdoor play options.</p>
                            <a href="#" className="text-accent font-medium flex items-center">
                                Read More {/* <i data-feather="arrow-right" className="ml-2 w-4 h-4"></i> */}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parenting Tips Section */}
            <section className="py-16 px-4 md:px-8 lg:px-12 bg-white rounded-3xl shadow-inner max-w-7xl mx-auto my-12">
                <h2 className="text-3xl font-bold text-center mb-12 text-primary">Quick Parenting Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-4">
                            {/* <i data-feather="clock" className="w-8 h-8"></i> */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Quality Time</h3>
                        <p className="text-gray-600">Just 15 minutes of focused playtime daily builds stronger bonds with your child.</p>
                    </div>

                    <div className="text-center p-6 rounded-xl bg-secondary/10 hover:bg-secondary/20 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center text-white mb-4">
                            {/* <i data-feather="book" className="w-8 h-8"></i> */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Story Power</h3>
                        <p className="text-gray-600">Reading together boosts vocabulary and imagination more than screen time.</p>
                    </div>

                    <div className="text-center p-6 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center text-white mb-4">
                            {/* <i data-feather="heart" className="w-8 h-8"></i> */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Emotional Growth</h3>
                        <p className="text-gray-600">Use pretend play to help children process emotions and develop empathy.</p>
                    </div>

                    <div className="text-center p-6 rounded-xl bg-mint/20 hover:bg-mint/30 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-mint rounded-full flex items-center justify-center text-white mb-4">
                            {/* <i data-feather="thumbs-up" className="w-8 h-8"></i> */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Positive Reinforcement</h3>
                        <p className="text-gray-600">Praise effort over results to build resilience and a growth mindset.</p>
                    </div>
                </div>
            </section>

            {/* Child Care Guide Section */}
            <section className="py-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-8 md:p-12 text-white shadow-xl">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                            <h2 className="text-3xl font-bold mb-4">Toy Safety Guide</h2>
                            <p className="text-lg mb-6">Keep playtime safe and enjoyable with our essential toy safety checklist for parents.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    {/* <i data-feather="check-circle" className="flex-shrink-0 mr-3 mt-1 w-5 h-5"></i> */}
                                    <span>Check for age recommendations on packaging</span>
                                </li>
                                <li className="flex items-start">
                                    {/* <i data-feather="check-circle" className="flex-shrink-0 mr-3 mt-1 w-5 h-5"></i> */}
                                    <span>Inspect regularly for broken parts or sharp edges</span>
                                </li>
                                <li className="flex items-start">
                                    {/* <i data-feather="check-circle" className="flex-shrink-0 mr-3 mt-1 w-5 h-5"></i> */}
                                    <span>Avoid toys with small parts for children under 3</span>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <img src="http://static.photos/toys/640x360/4" alt="Safe Toys" className="w-full rounded-xl shadow-lg"/>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="bg-primary/10 p-3 rounded-full mr-4">
                                {/* <i data-feather="sun" className="text-primary w-8 h-8"></i> */}
                            </div>
                            <h3 className="text-xl font-bold">Creative Play Ideas</h3>
                        </div>
                        <p className="text-gray-600">Transform everyday items into magical toys with these simple DIY play concepts that spark imagination.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="bg-secondary/10 p-3 rounded-full mr-4">
                                {/* <i data-feather="shield" className="text-secondary w-8 h-8"></i> */}
                            </div>
                            <h3 className="text-xl font-bold">Digital Safety</h3>
                        </div>
                        <p className="text-gray-600">Balancing screen time with physical play for healthy development in the digital age.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;