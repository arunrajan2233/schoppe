"use client";

import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";

const ACTIONS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/49304948080",
    Icon: WhatsappIcon,
    external: true,
  },
  {
    label: "E-Mail",
    href: "mailto:info@schopp24.de",
    Icon: Mail,
  },
  {
    label: "Anrufen",
    href: "tel:+49304948080",
    Icon: Phone,
  },
];

// Fixed quick-contact buttons on the right edge of every page
export default function FloatingContact() {
  return (
    <div className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:right-6">
      {ACTIONS.map(({ label, href, Icon, external }, i) => (
        <motion.a
          key={label}
          initial={{ opacity: 0, scale: 0.6, x: 16 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={href}
          aria-label={label}
          title={label}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00ACA9] to-[#004884] text-white shadow-lg shadow-[#00ACA9]/20 ring-2 ring-white transition-shadow hover:shadow-xl hover:shadow-[#00ACA9]/30"
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  );
}
