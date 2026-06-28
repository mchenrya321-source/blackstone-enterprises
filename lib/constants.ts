const serviceImageMap: Record<string, string> = {
  "Mobile Diesel Repair": "/gallery/4.jpg",
  "Fleet Maintenance": "/gallery/3.jpg",
  "Engine Diagnostics": "/gallery/2.jpg",
  "Heavy Equipment Repair": "/gallery/6.jpg",
  "Preventative Maintenance": "/gallery/7.jpg",
  "Emergency Service": "/gallery/5.jpg",
};

export const SITE = {
  name: "Blackstone Enterprises",
  phone: "318-351-1308",
  phoneHref: "tel:+13183511308",
  facebook: "https://www.facebook.com/profile.php?id=61583065178497",
  serviceArea: "Serving Northeast Louisiana and surrounding areas.",
  email: "info@blackstoneenterprises.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    title: "Mobile Diesel Repair",
    description:
      "On-site diesel repair for trucks, fleets, and equipment — we come to you so downtime stays minimal.",
    image: serviceImageMap["Mobile Diesel Repair"],
    imageAlt:
      "Blackstone Maintainer mobile service truck with welder and crane equipment",
    objectPosition: "center 45%",
  },
  {
    title: "Fleet Maintenance",
    description:
      "Scheduled maintenance programs built to keep your fleet running hard, shift after shift.",
    image: serviceImageMap["Fleet Maintenance"],
    imageAlt: "Peterbilt semi-truck with exposed diesel engine during maintenance",
    objectPosition: "center 40%",
  },
  {
    title: "Engine Diagnostics",
    description:
      "Advanced diagnostic testing to pinpoint issues fast and get you back on the road with confidence.",
    image: serviceImageMap["Engine Diagnostics"],
    imageAlt: "Top-down view of diesel engine cylinder head and valve train repair",
    objectPosition: "center center",
  },
  {
    title: "Heavy Equipment Repair",
    description:
      "Excavators, bulldozers, loaders, and construction equipment serviced by experienced diesel techs.",
    image: serviceImageMap["Heavy Equipment Repair"],
    imageAlt: "Service crane removing a Peterbilt hood for heavy diesel engine repair",
    objectPosition: "center 35%",
  },
  {
    title: "Preventative Maintenance",
    description:
      "Proactive service plans that reduce breakdowns, extend equipment life, and protect your bottom line.",
    image: serviceImageMap["Preventative Maintenance"],
    imageAlt:
      "Close-up of diesel engine timing gears and internal components during overhaul",
    objectPosition: "center center",
  },
  {
    title: "Emergency Service",
    description:
      "When equipment goes down, response time matters. Fast emergency diesel repair when you need it most.",
    image: serviceImageMap["Emergency Service"],
    imageAlt:
      "Mobile service truck crane lifting a drive shaft next to a dump truck on a job site",
    objectPosition: "center 40%",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Reliable",
    description:
      "Dependable service you can count on — every call, every job, every time.",
  },
  {
    title: "Experienced",
    description:
      "Skilled diesel technicians with real-world heavy equipment and fleet experience.",
  },
  {
    title: "Fast Response",
    description:
      "Mobile service and rapid turnaround to minimize downtime and keep you moving.",
  },
  {
    title: "Honest Service",
    description:
      "Straightforward diagnostics and transparent communication — no surprises.",
  },
  {
    title: "Built Around Uptime",
    description:
      "Everything we do is focused on keeping your equipment operational and productive.",
  },
] as const;
