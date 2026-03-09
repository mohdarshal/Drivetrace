import { Mail } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t border-border">
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="font-display font-bold text-primary-foreground text-sm">DT</span>
        </div>
        <span className="font-display font-bold text-lg text-foreground">
          Drive<span className="text-primary">Trace</span>
        </span>
      </div>
      <p className="text-muted-foreground text-sm mb-4">AI Powered Vehicle Recognition</p>
      <a
        href="mailto:Drivetrace.ai@gmail.com"
        className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
      >
        <Mail className="w-4 h-4" /> Drivetrace.ai@gmail.com
      </a>
      <p className="text-muted-foreground/50 text-xs mt-8">
        © {new Date().getFullYear()} DriveTrace. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
