import React from 'react';

const BlogPage = () => {
    const blogHero = "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=1200&h=600&fit=crop";
  const stemToys = "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop";
  const outdoorPlay = "https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=400&h=300&fit=crop";
  const artsCrafts = "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop";
  const learningToys = "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop";
    return (
       <div className="min-h-screen bg-background">
        {/* page title */}
        <title>Blog-Page</title>
        
      {/* Hero Section */}
      <section data-aos="fade-right" className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={blogHero}
          alt="Colorful toys and learning materials for children"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/40 to-secondary/30 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Welcome to Our Toy Blog
            </h1>
            <p className="text-xl md:text-2xl text-white drop-shadow-md">
              Discover fun ideas, helpful tips, and joyful learning for your little ones
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section  data-aos="fade-up" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest articles on toys, learning, and creative play
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blog Card 1 */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={stemToys}
              alt="STEM toys and robot building kits for kids"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                STEM Toys That Spark Creativity
              </h3>
              <p className="text-muted-foreground">
                Discover building kits and educational toys that encourage problem-solving and innovation
              </p>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={outdoorPlay}
              alt="Outdoor toys and sandbox play equipment"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Outdoor Play Ideas for Summer
              </h3>
              <p className="text-muted-foreground">
                Fun outdoor activities and toys to keep kids active and engaged all season long
              </p>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={artsCrafts}
              alt="Arts and crafts supplies for creative children"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Creative Arts & Crafts Projects
              </h3>
              <p className="text-muted-foreground">
                Inspire imagination with colorful art supplies and easy DIY project ideas
              </p>
            </div>
          </div>

          {/* Blog Card 4 */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={learningToys}
              alt="Educational alphabet blocks and learning puzzles"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Early Learning Made Fun
              </h3>
              <p className="text-muted-foreground">
                Shape sorters, alphabet blocks, and toys that make learning enjoyable for toddlers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parenting Tips Section */}
      <section  data-aos="fade-right" className="py-16 md:py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Parenting Tips & Tricks
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple advice to make playtime meaningful and stress-free
            </p>
          </div>

          <div  data-aos="fade-up-right" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tip 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Rotate Toys Weekly
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep playtime exciting by rotating toys every week. It reduces clutter and helps kids rediscover old favorites.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-accent-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Join the Play
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Spend 15 minutes daily in child-led play. Let your little one take the lead—it builds confidence and connection.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-highlight rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-highlight-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Safe Play Zones
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Create a designated play area with soft rugs and organized storage. Safety + organization = happy parents!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Child Care Guide Section */}
      <section data-aos="fade-up-right" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Child Care & Toy Safety Guide
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about safe play and child development
          </p>
        </div>

        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guide Item 1 */}
          <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border-2 border-primary/20">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4 shrink-0">
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Age-Appropriate Toys
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Always check age recommendations on toy packaging. Small parts can be choking hazards for children under 3 years old.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Look for the "ASTM" safety certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Avoid toys with sharp edges or loose parts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Check for non-toxic materials and paint</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guide Item 2 */}
          <div className="bg-linear-to-br from-secondary/10 to-highlight/10 rounded-3xl p-8 border-2 border-secondary/20">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mr-4 shrink-0">
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Learning Through Play
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Play isn't just fun—it's how children develop critical skills. Choose toys that encourage exploration and creativity.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Building toys boost spatial awareness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Pretend play develops social skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Puzzles improve problem-solving abilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guide Item 3 */}
          <div className="bg-linear-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border-2 border-accent/20">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mr-4 shrink-0">
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Toy Storage & Organization
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Keep play areas tidy and toys in good condition with smart storage solutions that kids can use independently.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Use clear bins for easy visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Label containers with pictures and words</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Rotate toys to maintain interest</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guide Item 4 */}
          <div  className="bg-linear-to-br from-highlight/10 to-secondary/10 rounded-3xl p-8 border-2 border-highlight/20">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-highlight rounded-2xl flex items-center justify-center mr-4 shrink-0">
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Screen Time Balance
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Balance digital and physical play for healthy development. Active play is essential for growing minds and bodies.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-highlight-foreground mr-2">•</span>
                    <span>Limit screen time to age-appropriate levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-foreground mr-2">•</span>
                    <span>Choose educational apps and content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-highlight-foreground mr-2">•</span>
                    <span>Prioritize hands-on, active play daily</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    );
};

export default BlogPage;