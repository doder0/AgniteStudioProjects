import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 grešaka pri čučnju koje svi prave",
    excerpt: "Čučanj je kralj vežbi, ali ga većina radi pogrešno. Naučite kako da izbegnete najčešće greške i maksimalno iskoristite ovu moćnu vežbu.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=500&fit=crop",
    category: "Trening",
    author: "Marko Jovanović",
    date: "15. Dec 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Kako da se naterate da vežbate zimi?",
    excerpt: "Mrak, hladnoća i topla postelja - zima je neprijatelj motivacije. Evo 7 proverenih strategija koje će vas držati aktivnim celog zimskog perioda.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
    category: "Motivacija",
    author: "Ana Mitrović",
    date: "10. Dec 2024",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Proteini - vaš saveznik u definiciji",
    excerpt: "Koliko proteina vam zaista treba? Kada ih uzimati? Koji su najbolji izvori? Sve što treba da znate o proteinima za optimalne rezultate.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=500&fit=crop",
    category: "Ishrana",
    author: "Milica Pavlović",
    date: "5. Dec 2024",
    readTime: "7 min"
  },
  {
    id: 4,
    title: "HIIT vs Kardio: Šta je bolje za mršavljenje?",
    excerpt: "Večita debata u fitness svetu. Razložili smo nauku iza oba pristupa i otkrili koji je pravi izbor za vaše ciljeve.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=500&fit=crop",
    category: "Trening",
    author: "Stefan Todorović",
    date: "28. Nov 2024",
    readTime: "6 min"
  },
  {
    id: 5,
    title: "Značaj sna za oporavak mišića",
    excerpt: "Trenirate naporno ali ne vidite rezultate? Problem možda nije u teretani već u spavaćoj sobi. Otkrijte zašto je san ključan za rast mišića.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=500&fit=crop",
    category: "Oporavak",
    author: "Milica Pavlović",
    date: "20. Nov 2024",
    readTime: "5 min"
  },
  {
    id: 6,
    title: "Vodič za početnike: Prva nedelja u teretani",
    excerpt: "Prvi put u teretani? Bez panike! Evo kompletnog vodiča koji će vam pomoći da se osećate samouvereno od prvog dana.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    category: "Za početnike",
    author: "Marko Jovanović",
    date: "15. Nov 2024",
    readTime: "8 min"
  },
  {
    id: 7,
    title: "Meal prep za zauzete: Nedeljni plan",
    excerpt: "Nemate vremena za kuvanje? Naučite kako da pripremite celu nedelju obroka za samo 2-3 sata nedeljno.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    category: "Ishrana",
    author: "Milica Pavlović",
    date: "8. Nov 2024",
    readTime: "6 min"
  },
  {
    id: 8,
    title: "Kako pravilno raditi mrtvo dizanje",
    excerpt: "Deadlift gradi snagu celog tela, ali loša forma može dovesti do povrede. Naučite pravilnu tehniku korak po korak.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=500&fit=crop",
    category: "Trening",
    author: "Stefan Todorović",
    date: "1. Nov 2024",
    readTime: "7 min"
  },
  {
    id: 9,
    title: "Mentalno zdravlje i vežbanje: Veza koju ne smete ignorisati",
    excerpt: "Fitness nije samo o telu. Otkrijte kako redovno vežbanje može transformisati vaše mentalno zdravlje i kvalitet života.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
    category: "Wellness",
    author: "Ana Mitrović",
    date: "25. Okt 2024",
    readTime: "5 min"
  },
  {
    id: 10,
    title: "Suplementi: Šta vam zaista treba?",
    excerpt: "Industrija suplemenata vredi milijarde, ali šta vam zaista treba? Razdvojili smo nauku od marketinga.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&h=500&fit=crop",
    category: "Ishrana",
    author: "Milica Pavlović",
    date: "18. Okt 2024",
    readTime: "6 min"
  }
];

const categories = ["Sve", "Trening", "Ishrana", "Motivacija", "Oporavak", "Wellness", "Za početnike"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">BLOG</span> & ČLANCI
            </h1>
            <p className="text-xl text-muted-foreground">
              Saveti, motivacija i stručni vodiči od našeg tima trenera i nutricionista. 
              Sve što treba da znate o fitnesu, ishrani i zdravom načinu života.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "Sve"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                  Najnovije
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-1 text-sm text-primary">
                  <Tag className="h-4 w-4" />
                  {blogPosts[0].category}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {blogPosts[0].date}
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {blogPosts[0].readTime} čitanja
                </span>
              </div>
              <Button asChild>
                <Link to={`/blog/${blogPosts[0].id}`}>
                  Pročitaj više
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Svi članci
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id}
                className="group rounded-xl bg-secondary/50 border border-border hover:border-primary/30 overflow-hidden transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {post.author}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              ŽELIŠ VIŠE SAVETA?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Prijavi se na naš newsletter i dobijaj ekskluzivne savete, recepte i motivaciju direktno u inbox.
            </p>
            <Button variant="hero" asChild>
              <Link to="/kontakt">
                Prijavi se na newsletter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
