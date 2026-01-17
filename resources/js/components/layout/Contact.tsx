// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";


// export default function ContactCTA() {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4 lg:px-8 text-center">
//         <h2 className="text-2xl font-semibold mb-2">Contact Form</h2>
//         <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
//           Have questions about our solutions or need a quote? Get in touch with our team today
//         </p>

//         <Link to="/contact">
//           <Button className="hover:bg-primary">
//             Contact Us
//             <ArrowRight className="w-4 h-4 ml-1" />
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// }

// import { ChevronRight, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// export default function ContactCTA() {
//   return (
//     <section className="py-16 bg-muted/30">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="bg-background rounded-xl shadow-lg p-12 max-w-2xl mx-auto text-center">
//           <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Mail className="w-7 h-7 text-primary" />
//           </div>
//           <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Form</h3>
//           <Link to="/contact">
//             <Button className="px-8">
//               Contact Us
//               <ChevronRight className="w-4 h-4 ml-1" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";


export default function ContactCTA() {
  return (
    <section className="py-8  text-black/80 relative overflow-hidden">
  <div className="container mx-auto px-4 lg:px-8">
    
    {/* Single Centered Content */}
    <div className="flex justify-center bg-[#eeeded] rounded-xl  p-8 max-w-8xl mx-auto text-center">
      <div className="text-center max-w-xl">
         <div className="w-14 h-14 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
         <h2 className="text-2xl font-semibold mb-2">Contact Form</h2>
         <p className="text-muted-foreground mb-6 max-w-xl mx-auto whitespace-nowrap">
           Have questions about our solutions or need a quote? Get in touch with our team today
         </p>

         <Link href="/contact">
           <Button className="hover:bg-primary">
             Contact Us
             <ArrowRight className="w-4 h-4 ml-1" />
           </Button>
         </Link>

      </div>
    </div>

  </div>
</section>

  );
}
