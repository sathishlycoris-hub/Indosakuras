import Layout from "@/components/layout/Layout";
import Subheader from "@/components/layout/Subheader";
import { ArrowRight, Mail, ChevronRight, Building, Users, Calendar, Globe, MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/layout/Contact";
import { Link } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";

interface CompanyProfile {
  id: number;
  sub_title: string;
  content: string;
}

const Profile = ({
  companyProfiles,
}: {
  companyProfiles: CompanyProfile[];
}) => {


AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 120,
  delay: 80,
});





  const strengthsData = [
    {
      title: "High Performing\nIndian IT Engineers",
      subtitle: "Proven Excellence",
      description: `Our engineers specialize in innovative IT solutions, ensuring high-quality 
performance and optimal results with nearly 20 years of experience. Our engineers deliver 
tailored, effective solutions that drive growth and success for businesses worldwide.`
    },
    {
      title: "19 years of Experience",
      subtitle: "Specialized in Japanese Companies",
      description: `With nearly two decades of experience, we specialize in understanding and 
meeting the unique needs of Japanese companies.`
    },
    {
      title: "Hybrid Development",
      subtitle: "Flexible & Cost-Effective",
      description: `Offer a blend of on-site and offshore models, providing flexibility, 
cost-efficiency, and high-quality results. This approach allows businesses to scale resources 
as needed.`
    },
    {
      title: "Bilingual Communication",
      subtitle: "Japanese & English Expertise",
      description: `Ensure smooth communication between clients and teams through our bilingual 
capabilities, bridging language barriers for effective collaboration.`
    },
    {
      title: "Cutting-Edge Technology",
      subtitle: "Empowering Growth through Innovation",
      description: `We embrace the latest technologies like GenAI, machine learning, cloud 
services and more, ensuring your business stays ahead in innovation.`
    },
    {
      isCTA: true,
      title: "Ready to innovate and<br/>drive an impact?",
      buttonText: "Let’s talk with us",
    }
  ];

  

  const contactLocationData = {
    title: "Locations",
    subtitle: "Get in touch with us today to start your technology journey",
    description: `We’re committed to crafting concepts that help you reach new heights with our 
  GenAI, Mobile app, Software Development, AI/ML Development, ERP solutions, Business 
  Intelligence and Cybersecurity Solutions.`,
    image: "/image/LocationEng.png"
  };



  return (
    <Layout>
      {/* Subheader Navigation */}
      <Subheader currentPage="Corporate Profile" />








      {/* Our Strengths */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
        
          <h2 className="text-primary text-center mb-2 text-3xl font-bold">
            Our Strengths
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Combining expertise for innovation
          </p>

         
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
         
            <div className="lg:col-span-2 flex flex-col gap-5">
              
              <div className="bg-[#F5E6EE] rounded-xl p-6 h-[380px]">
                <h3 className="text-[#D6387A] mb-3">
                  High Performing<br />Indian IT Engineers
                </h3>
                <h4 className="mb-3">Proven Excellence</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our engineers specialize in innovative IT solutions, ensuring high-quality performance and optimal results with nearly 20 years of experience, we deliver tailored, effective solutions that drive growth and success for businesses worldwide. Our engineers excel in delivering innovative IT solutions, ensuring top-notch performance and quality for businesses across various industries our engineers excel at delivering high-quality solutions that meet the unique needs of each clients.
                </p>
              </div>

            
              <div className="grid grid-cols-1">
               
                <div className="bg-[#E8E8E8] rounded-xl p-6 h-[220px]">
                  <h3 className="text-[#D6387A] mb-3">Cutting-Edge Technology</h3>
                  <h4 className="mb-3">Empowering Growth through Innovation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We embrace the latest technologies like GenAI, machine learning, cloud services and more, ensuring your business stays ahead in innovation.
                  </p>
                </div>

           
                <div></div>
              </div>
            </div>

          
            <div className="lg:col-span-2 flex flex-col gap-5">
              
              <div className="bg-[#E8E8E8] rounded-xl p-6 h-[160px]">
                <h3 className="text-[#D6387A] mb-3">19 years of Experience</h3>
                <h4 className="mb-3">Specialized in Japanese Companies</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With nearly two decades of experience, we specialize in understanding and meeting the unique needs of Japanese companies
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                
                <div className="bg-pink-100 rounded-xl p-5 h-[200px]">
                  <h3 className="text-[#D6387A] mb-2">
                    Hybrid Development
                  </h3>
                  <h4 className="mb-2">Flexible & Cost-Effective</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Offer a blend of on-site and offshore models, providing flexibility, cost-efficiency, and high-quality results. This approach allows businesses to scale resources as needed.
                  </p>
                </div>

                <div className="bg-[#E8E8E8] rounded-xl p-5 h-[200px]">
                  <h3 className="text-[#D6387A] mb-2">
                    Bilingual Communication
                  </h3>
                  <h4 className="mb-2">
                    Japanese & English Expertise
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Ensure smooth communication between clients and teams through our bilingual capabilities, bridging language barriers for effective collaboration.
                  </p>
                </div>
              </div>

  
              <div className="grid grid-cols-1">
             
                <div></div>

                
                <div className="bg-pink-100 rounded-xl p-6 relative overflow-hidden h-[220px] flex flex-col justify-center">
                  <h4 className="mb-4 max-w-xs">
                    Ready to innovate and drive an impact?
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Join us in shaping the future of technology. At Indo-Sakura, we empower great ideas, encourage bold thinking, and turn ambition into meaningful innovation. Let’s build solutions that matter — together.
                  </p>
                  <button className="bg-[#D6387A] text-white px-6 py-3 rounded-md hover:bg-[#B52E68] transition-colors w-fit">
                    Lets talk with us
                  </button>

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Strengths */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8" data-aos="fade-up">

          {/* LABEL */}
          <div className="section-divider mb-8 border-white/80">
            <h2 className="text-3xl font-semibold text-white">Our Strengths</h2>
          </div>

          <div className="grid lg:grid-cols-[65%_35%] gap-12">

            {/* LEFT — CONTENT */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-6">
                Combining Expertise for Innovation
              </h2>

              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Our engineers specialize in innovative IT solutions, ensuring high-quality performance
                and optimal results with nearly 20 years of experience. We deliver tailored, effective
                solutions that drive growth and success for businesses worldwide.
              </p>

              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                We embrace cutting-edge technologies like GenAI, machine learning, and cloud services,
                ensuring your business stays ahead in innovation while maintaining our bilingual
                capabilities for seamless Japan-India collaboration.
              </p>

              <Link href="/contact">
                <Button
                  variant="heroOutline"
                  className="mb-12 bg-white text-sm  font-semibold text-pink-800 border-white hover:bg-white/90 hover:text-pink-700 bg-pink-100 rounded-3xl px-8 py-6 shadow-2xl max-w-xs absolute "
                >
                  Ready to innovate and drive an impact? <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>

            </div>

            {/* RIGHT — STAT CARDS */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/15 rounded-xl p-5">
                <div className="text-3xl font-bold mb-1">19+</div>
                <p className="font-medium text-primary-foreground/90">Years Experience</p>
                <p className="text-primary-foreground/70">Japanese Companies</p>
              </div>

              <div className="bg-primary-foreground/15 rounded-xl p-5">
                <div className="text-3xl font-bold mb-1">150+</div>
                <p className="font-medium text-primary-foreground/90">IT Engineers</p>
                <p className="text-primary-foreground/70">High Performing</p>
              </div>

              <div className="bg-primary-foreground/15 rounded-xl p-5">
                <div className="text-3xl font-bold mb-1">2</div>
                <p className="font-medium text-primary-foreground/90">Languages</p>
                <p className="text-primary-foreground/70">Japanese & English</p>
              </div>

              <div className="bg-primary-foreground/15 rounded-xl p-5">
                <div className="text-3xl font-bold mb-1">Hybrid</div>
                <p className="font-medium text-primary-foreground/90">Development</p>
                <p className="text-primary-foreground/70">Flexible & Cost-Effective</p>
              </div>
            </div>

          </div>

          {/* FULL-WIDTH FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
              <Users className="w-6 h-6 mx-auto mb-3" />

              <p className="font-medium">Proven Excellence</p>

              <p className="text-primary-foreground/70">
                High-quality performance
              </p>

              <p className="mt-2 text-primary-foreground/80 leading-relaxed">
                Our engineers excel in delivering innovative IT solutions, ensuring
                top-notch performance and quality for businesses.
              </p>
            </div>


            <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
              <Globe className="w-6 h-6 mx-auto mb-3" />
              <p className="font-medium">Bilingual Team</p>
              <p className="text-primary-foreground/70">Seamless communication</p>
              <p className="mt-2 text-primary-foreground/80 leading-relaxed">
                Ensure smooth communication between clients and teams through our bilingual capabilities, bridging language barriers for effective collaboration.
              </p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
              <CheckCircle className="w-6 h-6 mx-auto mb-3" />
              <p className="font-medium">Cutting-Edge Tech</p>
              <p className="text-primary-foreground/70">GenAI & Cloud services</p>
              <p className="mt-2 text-primary-foreground/80 leading-relaxed">
               We embrace the latest technologies like GenAI, machine learning, cloud services and more, ensuring your business stays ahead in innovation.
              </p>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
              <ArrowRight className="w-6 h-6 mx-auto mb-3" />
              <p className="font-medium">Hybrid Model</p>
              <p className="text-primary-foreground/70">On-site & offshore blend</p>
              <p className="mt-2 text-primary-foreground/80 leading-relaxed">
                Offer a blend of on-site and offshore models, providing flexibility, cost-efficiency, and high-quality results. This approach allows businesses to scale resources as needed.
              </p>
            </div>
          </div>

        </div>
      </section>




     <section className="py-16 bg-muted/20">
  <div className="container mx-auto px-4 lg:px-8">

    <div className="section-divider mb-8 border-pink/80">
      <h2 className="text-3xl font-bold mb-8 text-primary">
        Company Profile
      </h2>
    </div>

    <div className="border border-gray-300 rounded-lg overflow-hidden text-sm">
      {companyProfiles.map((row, i) => (
        <div
          key={row.id}
          className="grid grid-cols-3 border-b border-gray-300"
        >
          {/* LEFT COLUMN */}
          <div className="bg-pink-100 p-4 font-semibold leading-relaxed">
            {row.sub_title}
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="col-span-2 p-4 space-y-1 leading-relaxed prose max-w-none"
            dangerouslySetInnerHTML={{ __html: row.content }}
          />
        </div>
      ))}
    </div>

  </div>
</section>



      <section className="py-2">
        <div className="container mx-auto px-4 lg:px-8">

          <h2 className="text-primary text-3xl font-bold mb-4">
            {contactLocationData.title}
          </h2>

          <div className="w-full flex justify-center mb-0">
            <img
              src={contactLocationData.image}
              alt="Indo-Sakura Global Locations"
              className="rounded-lg shadow-md w-full "
            />
          </div>

          {/* Location Details */}
          {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 bg-[#E8E8E8] p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                <Building className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">東京本社</p>
                <p className="text-sm text-bold">東京都江戸川区東陽5-30-13</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                <Building className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">大阪営業所</p>
                <p className="text-sm text-bold">大阪市北区梅田1丁目3番12号</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">インド開発センター</p>
                <p className="text-sm text-bold">Bangalore, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">米国営業所</p>
                <p className="text-sm text-bold">米国・NY州ALBANY市</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">ドバイ営業所</p>
                <p className="text-sm text-bold">#3051 Single Biz Tower Biz Bay, Dubai</p>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5 bg-[#E8E8E8] p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building className="w-9 h-9 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Tokyo Headquarters</p>
                <p className="text-sm text-bold">
                  5-30-13 Toyo, Edogawa-ku, Tokyo
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-9 h-9 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Osaka Sales Office</p>
                <p className="text-sm text-bold">
                  1-3-12 Umeda, Kita-ku, Osaka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-9 h-9 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">India Development Center</p>
                <p className="text-sm text-bold">Bangalore, India</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-9 h-9 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">U.S. Sales Office</p>
                <p className="text-sm text-bold">Albany, NY, USA</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-9 h-9 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">Dubai Sales Office</p>
                <p className="text-sm text-bold">
                  #3051 Single Biz Tower, Business Bay, Dubai
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>


      {/* Contact Form Section */}
      <ContactCTA />
    </Layout>
  );
};

export default Profile;
