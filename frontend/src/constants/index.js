import { Edit, Home, Phone, User2 } from "lucide-react";

export const mockUser = {
  name: "Elon Mask",
  username: "elon_mask",
  email: "elonmask@gmail.com",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg",
  isAdmin: true,
};

export const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: Edit,
  },
  {
    label: "About",
    href: "/about",
    icon: User2,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

<<<<<<< HEAD
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
=======
export const BASE_URL = 'https://blog-application-2-lbpm.onrender.com/api';
>>>>>>> 203bbe4ba60dbae30c2d1e5e7c561dc630628bdf

export const placeholderUserImage = "/placeholder-user.webp";

export const headerHeight = 70;
