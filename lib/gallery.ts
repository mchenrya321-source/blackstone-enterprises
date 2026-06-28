export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Editorial caption for gallery lightbox */
  caption: string;
  /** Primary homepage placement */
  placement:
    | "hero"
    | "services"
    | "about"
    | "cta"
    | "gallery"
    | "contact";
  objectPosition?: string;
};

/**
 * Photo assignments based on content analysis:
 *
 * 1 — Crane lifting semi-truck front end on-site → Hero (most cinematic & impactful)
 * 2 — Top-down cylinder head / valve work → Engine Diagnostics service
 * 3 — Exposed Peterbilt engine bay → Fleet Maintenance service
 * 4 — Maintainer service truck with welder → Mobile Diesel Repair service
 * 5 — Field drive-shaft lift with dump truck → CTA divider (emergency field work)
 * 6 — Crane removing Peterbilt hood → About section (professional capability)
 * 7 — Internal timing gear / engine depth → Preventative Maintenance service
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery/1.jpg",
    alt: "Mobile crane lifting the front end of a semi-truck during on-site diesel repair",
    width: 1242,
    height: 2208,
    caption: "On-site heavy diesel repair — mobile crane service in the field.",
    placement: "hero",
    objectPosition: "center 35%",
  },
  {
    id: "2",
    src: "/gallery/2.jpg",
    alt: "Top-down view of diesel engine cylinder head and valve train repair",
    width: 1242,
    height: 2208,
    caption: "Precision engine work — cylinder head and valve train service.",
    placement: "services",
    objectPosition: "center center",
  },
  {
    id: "3",
    src: "/gallery/3.jpg",
    alt: "Peterbilt semi-truck with exposed diesel engine during maintenance",
    width: 1800,
    height: 2400,
    caption: "Fleet truck engine bay — full diesel maintenance and repair.",
    placement: "services",
    objectPosition: "center 40%",
  },
  {
    id: "4",
    src: "/gallery/4.jpg",
    alt: "Blackstone Maintainer mobile service truck with welder and crane equipment",
    width: 1109,
    height: 2400,
    caption: "Fully equipped mobile service truck — ready to roll to your job site.",
    placement: "services",
    objectPosition: "center 45%",
  },
  {
    id: "5",
    src: "/gallery/5.jpg",
    alt: "Mobile service truck crane lifting a drive shaft next to a dump truck on a job site",
    width: 1242,
    height: 2208,
    caption: "Emergency field service — drivetrain repair on location.",
    placement: "cta",
    objectPosition: "center 40%",
  },
  {
    id: "6",
    src: "/gallery/6.jpg",
    alt: "Service crane removing a Peterbilt hood for heavy diesel engine repair",
    width: 1242,
    height: 2208,
    caption: "Heavy equipment repair — professional crane-assisted diesel service.",
    placement: "about",
    objectPosition: "center 35%",
  },
  {
    id: "7",
    src: "/gallery/7.jpg",
    alt: "Close-up of diesel engine timing gears and internal components during overhaul",
    width: 1800,
    height: 2400,
    caption: "Preventative maintenance and internal engine diagnostics.",
    placement: "services",
    objectPosition: "center center",
  },
];

export const HERO_IMAGE = GALLERY_IMAGES.find((img) => img.placement === "hero")!;
export const ABOUT_IMAGE = GALLERY_IMAGES.find((img) => img.placement === "about")!;
export const CTA_IMAGE = GALLERY_IMAGES.find((img) => img.placement === "cta")!;

export function getImageById(id: string) {
  return GALLERY_IMAGES.find((img) => img.id === id);
}
