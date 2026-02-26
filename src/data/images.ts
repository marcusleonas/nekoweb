interface GalleryImage {
    src: string;
    alt: string;
}

export const rawImages: GalleryImage[] = [
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/lithuania%202025%2002%20(1).jpg",
        alt: "latvia trip 2025",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/lithuania%202025%2001%20(1).jpg",
        alt: "lithuania trip 2025",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/25-01-2026%2001.jpg",
        alt: "seven sisters cliffs, england",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/25-01-2026%2002.jpg",
        alt: "seven sisters cliffs, england",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/25-01-2026%2003.jpg",
        alt: "seven sisters cliffs, england",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/my%20car.jpg",
        alt: "our tuxedo cat, cookie",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/cookie%20in%20grass(1).jpg",
        alt: "tuxedo cat, cookie, hiding in the grass",
    },
];
export const images = rawImages.reverse();

const rawArt: GalleryImage[] = [
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/CG%20Wishbone%20Poster.png",
        alt: "Conan Gray - Wishbone Poster",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/Charli%20XCX%20Brat%20Poster.png",
        alt: "Charli XCX - Brat Poster",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/CG%20Superache%20Poster.png",
        alt: "Conan Gray - Superache Poster",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/So%20Tired%20All%20The%20Time.png",
        alt: "So Tired All The Time",
    },
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/FontsFontsFonts.png",
        alt: "Fonts! Fonts! Fonts!",
    },
];
export const art = rawArt.reverse();
