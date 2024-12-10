import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './Navigation';
import Home from './components/Home';
import About from './components/About';
import Developer from './components/Developer';
import Products from './components/Products';
import Profile from './components/Profile';
import Showcase from './components/Showcase';
import Reviews from './components/Reviews';
import Artisan from './components/Artisan';
import Product from './components/Product';
import Cart from './components/Cart';
import Dev from './components/Dev';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const uniqueId = `${item.id}-${item.switch}`;
    
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.uniqueId === uniqueId);
      
      if (existingItemIndex !== -1) {
        return prevCart.map((cartItem, index) => 
          index === existingItemIndex 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1, uniqueId }];
      }
    });
  };
  
  
  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item.uniqueId !== itemToRemove.uniqueId));
  };

  const clearCart = () =>{
    setCart([])
  }
const pesorate = 59;
const keyboards = [
    {
        id: 1,
        img: [
            "https://massdrop-s3.imgix.net/product-images/womier-stacked-acrylic-rgb-mechanical-keyboard/FP/YdlZrdh8TP6dHrrx32mY_1080x1080_MD-93147_01.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/womier-stacked-acrylic-rgb-mechanical-keyboard/FP/kzZf2EjoRi6JZhJ6VkrC_1500x1000_MD-93147_06.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/womier-stacked-acrylic-rgb-mechanical-keyboard/FP/nhjOE2WRpGCLwzFCgOtE_1500x1000_MD-93147_10.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/womier-stacked-acrylic-rgb-mechanical-keyboard/FP/q142u4kSYaViqJFfTpTg_1500x1000_MD-93147_04.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70"
        ],
        name: "Womier K66 V2 Hotswap Acrylic RGB Mechanical Keyboard",
        price: 55 * pesorate,
        rating: 4.7,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Top-Notch Typing in Tasteful White",
                description: "White gets its hue by reflecting all colors on the visible light spectrum. In a sense, it’s a rainbow in disguise. Combining white’s false rainbow with a real one created by RGB lighting, the Stacked Acrylic RGB Mechanical Keyboard by Womier delivers a standout aesthetic experience. The typing experience isn’t half bad, either. Featuring a V2 66-key layout PCB with Kailh hotswap sockets, and laser-etched shine-through ABS keycaps, this keyboard is both space efficient and durable. Full anti-ghosting technology facilitates precision typing, while strong rubber feet add stability. Alongside the shine-through keys, a frosted three-layer acrylic case gives the RGB LED base ample opportunity to light up the board. Choose from four types of Gateron mechanical switches to get the perfect feel."
            }
        ],
        specs: [
            "Brand: Womier",
            "Layout: 66-key",
            "PCB: Kailh hotswap",
            "Keycaps: Laser-etched shine-through ABS",
            "Lighting: Full RGB LED underglow and per-key illumination",
            "Case: Stacked acrylic frosted 3-layer",
            "Feet: Rubber feet for stability",
            "Connection: Detachable USB-C cord",
            "Anti-Ghosting: Full anti-ghosting support",
            "Switches: Gateron mechanical switches"
        ],
        included: [
            "USB-C cable",
            "User manual"
        ],
        reviews: [
    
                {
                    id: 1,
                    date: "December 01, 2024",
                    username: "JohnDoe",
                    rating: 5,
                    review: "Fantastic keyboard! The keys feel very responsive, and the RGB lighting is amazing. Worth every penny."
                },
                {
                    id: 2,
                    date: "December 02, 2024",
                    username: "JaneSmith",
                    rating: 4,
                    review: "Good quality and feels comfortable to use. A bit pricey, but overall, a solid product."
                },
                {
                    id: 3,
                    date: "December 03, 2024",
                    username: "MarkTaylor",
                    rating: 3,
                    review: "The keyboard is fine, but the key switches are a little too loud for my liking. Still functional."
                },
                {
                    id: 4,
                    date: "December 04, 2024",
                    username: "LucyBrown",
                    rating: 4,
                    review: "I love the ergonomic design. It's perfect for long gaming sessions. Only wish the cable was a little longer."
                },
                {
                    id: 5,
                    date: "December 05, 2024",
                    username: "ChrisWilson",
                    rating: 5,
                    review: "This is by far the best keyboard I've used. The build quality is top-notch, and the key presses are smooth and satisfying."
                }
            
        ]
    },
    {
        id: 2,
        img: ["https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/erFboS5uSV2hA9MLKqzl_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/NyhNyoxTYmDoHnpvginn_25374.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/yDIheEIBRGOYDhkUgUav_25379.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/keydous-nj80-bluetooth-rgb-hotswappable-keyboard/FP/o3PxJ6j2ScubleFTdHgw_25411.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        ],
        name: "Keydous NJ80 Wireless RGB Hot-Swappable Keyboard",
        price: 219 * pesorate,
        rating: 4.9,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Wireless and Hot-Swappable for Maximum Versatility",
                description: "The Keydous NJ80 is a sleek and modern wireless keyboard with RGB backlighting and hotswappable keys. Whether you prefer a wired or wireless connection, the NJ80 allows you to easily switch between modes. Featuring a solid build with PBT keycaps, it offers a smooth typing experience, while the customizable RGB lighting provides a personal touch. Perfect for both work and play, the NJ80's compatibility with various switches lets you personalize your experience further."
            }
        ],
        specs: [
            "Brand: Keydous",
            "Layout: 80-key",
            "Connection: Bluetooth 5.0, Wired via USB-C",
            "Keycaps: PBT",
            "Lighting: RGB per-key illumination",
            "Battery: 4000mAh rechargeable",
            "Switches: Gateron mechanical switches"
        ],
        included: [
            "USB-C charging cable",
            "User manual",
            "Keycap puller"
        ],
        reviews: [
            {
                id: 1,
                date: "November 20, 2024",
                username: "TechGuru",
                rating: 5,
                review: "Amazing keyboard! The wireless functionality works seamlessly, and the RGB lighting looks incredible. Highly recommend!"
            },
            {
                id: 2,
                date: "November 22, 2024",
                username: "SarahLee",
                rating: 4,
                review: "Great keyboard, but the battery life could be a bit longer. Overall, the hotswappable feature is a big plus."
            },
            {
                id: "3",
                date: "November 24, 2024",
                username: "ChrisDev",
                rating: 5,
                review: "Perfect for my home office setup. The keys are responsive, and switching between wired and wireless is easy."
            },
            {
                id: "4",
                date: "November 26, 2024",
                username: "KeyboardKing",
                rating: 5,
                review: "The Keydous NJ80 is a game-changer for wireless keyboards. The hot-swappable feature is very convenient, and the typing experience is smooth."
            },
            {
                id: 5,
                date: "November 28, 2024",
                username: "JohnD",
                rating: 5,
                review: "Absolutely love this keyboard! The RGB is gorgeous, and the wireless connection is flawless. One of the best purchases I've made!"
            }
        ]
    },
    {
        id: 3,
        img: ["https://massdrop-s3.imgix.net/product-images/idobao-id80-crystal-75-gasket-hotswappable-keyboard-kit/FP/QONc7ASwQoy3Ld9HTWJh_RSBJ6u3BSFGhDYoPhSgm_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/idobao-id80-crystal-gasket-keyboard-kit-drop-exclusive/FP/zEjakV8lTWaZIKlYnpv5_Collab20515-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/idobao-drop-id80-crystal-75-gasket-hotswappable-keyboard-kit/FP/5bf4h2iHSZ8sfLNAYUjG_IDOBAO%20ID80%20Crytal%20Collab20248.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/idobao-drop-id80-crystal-75-gasket-hotswappable-keyboard-kit/FP/BqiFdbw0QzOQgOhZBnvW_IDOBAO%20ID80%20Crytal%20Collab20444.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        ],
        name: "IDOBAO ID80 Crystal Gasket Keyboard",
        price: 229 * pesorate,
        rating: 4.5,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Crystal Clear for a Clean, Minimalist Look",
                description: "The ID80 Crystal Gasket Keyboard features a unique transparent design, making the RGB lighting truly pop. It includes a gasket mount that gives the keyboard a soft, bouncy typing feel, perfect for those who want an enhanced typing experience. The fully hotswappable PCB allows you to change switches without soldering, and the high-quality PBT keycaps ensure durability. Perfect for both enthusiasts and those new to the mechanical keyboard world, the ID80 offers a balanced combination of aesthetics and performance."
            }
        ],
        specs: [
            "Brand: IDOBAO",
            "Layout: 80-key",
            "Connection: Wired USB-C",
            "Keycaps: High-quality PBT",
            "Lighting: RGB per-key illumination",
            "Mounting: Gasket mount for soft feel",
            "Switches: Hotswappable PCB, supports all MX-style switches"
        ],
        included: [
            "USB-C cable",
            "Keycap puller",
            "Switch puller",
            "User manual"
        ],
        reviews: [
            {
                id: 1,
                date: "November 15, 2024",
                username: "KeyboardNerd",
                rating: 5,
                review: "Love this keyboard! The transparent case really lets the RGB lighting shine. The gasket mount is a game-changer."
            },
            {
                id: 2,
                date: "November 18, 2024",
                username: "SamanthaG",
                rating:4,
                review: "Great keyboard, but a little pricey for what it offers. However, the typing experience is top-notch."
            },
            {
                id: 3,
                date: "November 21, 2024",
                username: "MaxPower",
                rating: 5,
                review: "Fantastic build quality and sound. Definitely a great investment for anyone looking for a premium mechanical keyboard."
            },
            {
                id: 4,
                date: "November 23, 2024",
                username: "GamerGuy99",
                rating: 5,
                review: "The RGB is just amazing on this keyboard! It also feels super smooth to type on thanks to the gasket mount. Definitely worth the price."
            },
            {
                id: 5,
                date: "November 25, 2024",
                username: "TechLover",
                rating: 5,
                review: "The ID80 is the perfect blend of aesthetics and performance. The typing feel is fantastic, and the transparency looks amazing under the lights."
            }
        ]
        
    },
    {
        id: 4,
        img: ["https://massdrop-s3.imgix.net/product-images/wobkey-rainy75-mechanical-keyboard/FP/UwmgPuM5TnuVIWVrgTfe_lite_black.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/wobkey-rainy75-mechanical-keyboard/FP/jUVcDOACRkGNdCD1S5X7_pro_white_cocoa.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/wobkey-rainy75-mechanical-keyboard/FP/WTuhPI16T8a6f9sOlWqW_standard_blue.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/wobkey-rainy75-mechanical-keyboard/FP/nMsmYvSzTD2VDmXzYf60_switches.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        ],
        name: "WOBKEY Rainy75 Mechanical Keyboard",
        price: 79 * pesorate,
        rating: 4.2,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Sleek Design Meets Smooth Performance",
                description: "The WOBKEY Rainy75 combines a compact 75% layout with a sleek, minimalist design. Featuring high-quality Gateron switches and durable keycaps, this keyboard is built for both performance and style. The customizable RGB lighting allows you to personalize your setup, and the mechanical switches provide a satisfying typing experience. Whether you're gaming or working, the Rainy75 offers great versatility and comfort."
            }
        ],
        specs: [
            "Brand: WOBKEY",
            "Layout: 75-key",
            "Connection: Wired USB-C",
            "Keycaps: High-quality ABS",
            "Lighting: RGB per-key illumination",
            "Switches: Gateron mechanical switches",
            "Feet: Rubber feet for stability"
        ],
        included: [
            "USB-C cable",
            "User manual"
        ],
        reviews: [
            {
                id: 1,
                date: "November 10, 2024",
                username: "GamingGuru",
                rating: 4,
                review: "Good value for the price. The typing experience is nice, and the RGB is vibrant. However, the keycaps feel a bit cheap."
            },
            {
                id: 2,
                date: "November 12, 2024",
                username: "TechieTom",
                rating: 4,
                review: "Solid keyboard with a nice aesthetic. The switches are responsive, but the RGB could be brighter."
            },
            {
                id: 3,
                date: "November 15, 2024",
                username: "AliceWonder",
                rating: 5,
                review: "Love this keyboard! Great build quality and the RGB is perfect. The 75% layout is just right for my desk."
            },
            {
                id: 4,
                date: "November 18, 2024",
                username: "CharlieAdams",
                rating: 4,
                review: "Very happy with this purchase. The keyboard looks great and feels solid. However, I wish the stabilizers were a little smoother."
            },
            {
                id: 5,
                date: "November 20, 2024",
                username: "SarahJ",
                rating: 5,
                review: "Perfect keyboard for daily use! It's compact, the switches are responsive, and the RGB effects are gorgeous. Highly recommend it!"
            }
        ]
        
    }
    ,
    {
        id: 5,
        img: ["https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/jdkkOZNSRdS05G6io9Qz_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/8w1AODVfR1mpl02NPvCw_Art_Deco_1340-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/w8jS12dFQASNEs3w3s1H_Art_Deco_1333-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/drop-expression-series-art-deco-gold-keyboard/FP/a6yrmVJGQ6qMFak7wvAG_Art_Deco_0988-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70"
        ],
        name: "Drop Expression Series Mechtropolis Keyboard",
        price: 99 * pesorate,
        rating: 4.1,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "A Bold Look with Precision Performance",
                description: "The Drop Expression Series Mechtropolis Keyboard combines a bold Art Deco design with premium performance. With tactile Gateron switches and per-key RGB illumination, this keyboard delivers both style and function. Perfect for typists and gamers alike, the Mechtropolis offers smooth keystrokes and customizable lighting, all within a sleek and elegant build."
            }
        ],
        specs: [
            "Brand: Drop",
            "Layout: Full-size (104-key)",
            "Connection: Wired USB-C",
            "Keycaps: PBT",
            "Lighting: RGB per-key illumination",
            "Switches: Gateron mechanical switches"
        ],
        included: [
            "USB-C cable",
            "User manual",
            "Keycap puller"
        ],
        reviews: [
            {
                id: 1,
                date: "November 8, 2024",
                username: "TechieTom",
                rating: 4,
                review: "Great keyboard with a unique design! The RGB lighting is vibrant, and the switches are very responsive. Only downside is the higher price point."
            },
            {
                id: 2,
                date: "November 10, 2024",
                username: "ChrisDev",
                rating: 4,
                review: "Nice keyboard, the feel is smooth and the lighting is impressive. However, I wish the keycaps were a bit higher quality for the price."
            },
            {
                id: 3,
                date: "November 12, 2024",
                username: "SarahJ",
                rating: 5,
                review: "I absolutely love this keyboard! The Art Deco design is gorgeous, and the switches are quiet but responsive. Perfect for both work and gaming."
            },
            {
                id: 4,
                date: "November 14, 2024",
                username: "AliceWonder",
                rating: 3,
                review: "Decent keyboard, but there are better options for the price. The RGB is great, but the build quality feels a bit lacking."
            },
            {
                id: 5,
                date: "November 16, 2024",
                username: "GamingGuru",
                rating: 5,
                review: "Highly recommend this keyboard! The build quality is top-notch, and it’s a pleasure to type on. The RGB is customizable, and the Gateron switches are a great touch."
            }
        ]
        
    }
    ,{
        id: 6,
        img: ["https://massdrop-s3.imgix.net/product-images/magicforce-21-keys-v2/FP/59YmkBkRTcG8H0NASuPk_AI7B7416-copy-pc.jpg?auto=format&fm=jpg&fit=crop&w=1080&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/magicforce-21-keys-v2/FP/q4zfpK7R6OBTrCJ4VHmJ_AI7B7427-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/magicforce-21-keys-v2/FP/k1AJKYvzQaSbm6iO8Uv2_AI7B7451-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/magicforce-21-keys-v2/FP/gbXdzaTpRgKGpSt3OXoT_AI7B7462-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70"
        ],
        name: "Magicforce 21-Key Mechanical Numpad V2",
        price: 19 * pesorate,
        rating: 4.25,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Compact and Functional Numpad for Enhanced Productivity",
                description: "The Magicforce 21-Key Mechanical Numpad V2 is a compact yet highly functional tool for those who need more number input in a minimalist design. Featuring tactile Gateron switches, it offers a satisfying typing experience. The numpad can be easily connected via USB and is perfect for professionals who frequently work with numbers, whether it's for accounting, coding, or gaming."
            }
        ],
        specs: [
            "Brand: Magicforce",
            "Layout: 21-key",
            "Connection: Wired USB",
            "Keycaps: High-quality PBT",
            "Lighting: No RGB",
            "Switches: Gateron mechanical switches"
        ],
        included: [
            "USB cable",
            "User manual"
        ],
        reviews: [
            {
                id: 1,
                date: "October 25, 2024",
                username: "TechieTom",
                rating: 4,
                review: "Great numpad! The Gateron switches feel smooth, and the compact design is perfect for my desk. Only downside is the lack of RGB."
            },
            {
                id: 2,
                date: "October 28, 2024",
                username: "ChrisDev",
                rating: 5,
                review: "I use this numpad for coding and it's a game-changer. The keys are responsive, and it doesn’t take up much space. Highly recommend!"
            },
            {
                id: 3,
                date: "November 1, 2024",
                username: "SarahJ",
                rating: 4,
                review: "Nice numpad! Works great for work tasks, but I wish it had some lighting to match my keyboard. Still, it’s very reliable."
            },
            {
                id: 4,
                date: "November 3, 2024",
                username: "GamingGuru",
                rating: 3,
                review: "It's a decent numpad, but I feel it's a bit too basic. The switches feel good, but for the price, I expected more features like RGB lighting."
            },
            {
                id: 5,
                date: "November 5, 2024",
                username: "AliceWonder",
                rating: 5,
                review: "Perfect for gaming and productivity. The keys are comfortable to press, and the layout is great for quick number input."
            }
        ]
    }
    ,
    {
        id: 7,
        img: ["https://massdrop-s3.imgix.net/product-images/melgeek-mojo68-plastic-keyboard/FP/Cm7MPmMpRte6dPzmRLRM_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/melgeek-mojo68-plastic-keyboard/FP/fJp9qhMQXWwM44myhPsK_20287-copy-pc.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/melgeek-mojo68-plastic-keyboard/FP/cyvrJqQsQwe63dGC3u6B_20296-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/melgeek-mojo68-plastic-keyboard/FP/vFOYx95ASquCjuM7TFMG_20297-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70"
        ],
        name: "MelGeek Mojo68 Wireless Plastic Keyboard",
        price: 199 * pesorate,
        rating: 4,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "A Compact Wireless Keyboard with Vibrant RGB",
                description: "The MelGeek Mojo68 is a compact and highly customizable wireless mechanical keyboard. Featuring a plastic body and RGB per-key lighting, it offers a unique and vibrant typing experience. With Gateron mechanical switches, it provides smooth keystrokes, and the wireless capability makes it perfect for users who prefer a clean and cable-free desk setup."
            }
        ],
        specs: [
            "Brand: MelGeek",
            "Layout: 68-key",
            "Connection: Wireless (Bluetooth 5.0) and Wired USB-C",
            "Keycaps: High-quality ABS",
            "Lighting: RGB per-key illumination",
            "Switches: Gateron mechanical switches"
        ],
        included: [
            "USB-C cable",
            "User manual",
            "Keycap puller"
        ],
        reviews: [
            {
                id: 1,
                date:"January 1, 2024",
                username: "TechieTom",
                rating: 4,
                review: "Love the compact design and wireless feature. The RGB lighting looks great, but I wish the build quality was a bit more premium for the price."
            },
            {
                id: 2,
                date:"January 3, 2024",
                username: "ChrisDev",
                rating: 5,
                review: "Absolutely fantastic keyboard. The wireless connection is flawless, and the switches feel smooth. The RGB effects are a nice touch!"
            },
            {
                id: 3,
                date:"January 5, 2024",
                username: "SarahJ",
                rating: 4,
                review: "Really like the feel of this keyboard. It’s lightweight and has a great typing experience. The only thing I’d change is the keycap material."
            },
            {
                id: 4,
                date:"January 7, 2024",
                username: "AliceWonder",
                rating: 3,
                review: "Good keyboard, but the build feels a bit cheap. The typing experience is fine, but I expected a bit more durability for the price."
            },
            {
                id: 5,
                date:"January 10, 2024",
                username: "GamingGuru",
                rating: 4,
                review: "Great keyboard for casual gaming and work. The Bluetooth connection is quick, and the RGB is bright. Wish the keycaps were more premium."
            }
        ]
    }
    ,
    {
        id: 8,
        img: ["https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/5NJfnjBXRdOcO3R1WdLA_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/V8JeDuPReuCx6xtP74gw_DROP_SHIFT_DESK_6292-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/UPSO6B8tQFqzOG1R4hDe_DROP_SHIFT_DESK_6273-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/drop-shift-v2-mechanical-keyboard/FP/HxNO2By6Tmmjstno340W_DROP_SHIFT_DESK_6334-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            ],
        name: "SHIFT V2 Mechanical Keyboard",
        price: 179 * pesorate,
        rating: 4.5,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Precision and Customization at Your Fingertips",
                description: "The SHIFT V2 Mechanical Keyboard is a premium, full-sized mechanical keyboard designed for professionals and gamers alike. With a solid build and high-quality Gateron switches, it delivers an exceptional typing experience. The keyboard features customizable RGB lighting and a variety of switch options, allowing you to tailor it to your preferences. Whether you're typing long hours or engaging in competitive gaming, the SHIFT V2 offers precision and comfort."
            }
        ],
        specs: [
            "Brand: Drop",
            "Layout: Full-size (104-key)",
            "Connection: Wired USB-C",
            "Keycaps: High-quality ABS",
            "Lighting: RGB per-key illumination",
            "Switches: Gateron mechanical switches"
        ],
        included: [
            "USB-C cable",
            "User manual",
            "Keycap puller"
        ],
        reviews: [
            {
                id: "1",
                date:"February 2, 2024",
                username: "TechLover",
                rating: "5",
                review: "This keyboard is amazing! The typing experience is smooth, and the RGB is stunning. Highly recommend it for both work and gaming."
            },
            {
                id: "2",
                date:"February 4, 2024",
                username: "GameMaster",
                rating: "4",
                review: "Solid keyboard with great feel. The switches are smooth, but I feel the build could be a bit more premium for the price."
            },
            {
                id: "3",
                date:"February 6, 2024",
                username: "CreativeSoul",
                rating: "5",
                review: "I love the SHIFT V2! The customization options for the RGB and switches are perfect for my setup. It looks and feels fantastic."
            },
            {
                id: "4",
                date:"February 7, 2024",
                username: "OfficeGuru",
                rating: "4",
                review: "Great keyboard, but the space bar stabilizers are a bit wobbly. Otherwise, it's a fantastic product, and the RGB is beautiful."
            },
            {
                id: "5",
                date:"February 10, 2024",
                username: "SarahG",
                rating: "5",
                review: "Perfect for my needs! The keyboard is responsive, and the RGB lighting is vibrant. It's the best mechanical keyboard I've used so far!"
            }
        ]
    }
    ,
    {
        id: 9,
        img: ["https://massdrop-s3.imgix.net/product-images/drop-ctrl-v2-mechanical-keyboard/FP/NKNLWrrRxWDVlCHVEvTw_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/drop-ctrl-v2-mechanical-keyboard/FP/AWDpZzpTO2X3iwIhTJaB_overflow_6207-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/drop-ctrl-v2-mechanical-keyboard/FP/KPAz1esoQuWJtFB2eH6s_DROP_CTRL_V2_5931-copy-pdp.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/drop-ctrl-v2-mechanical-keyboard/FP/bQljIT8QTkmyCh2uXUOU_DROP_CTRL_V2_5856-copy.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70"
        ],
        name: "CTRL V2 Mechanical Keyboard",
        price: 149 * pesorate,
        rating: 3.75,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Enhanced Control and Customization",
                description: "The CTRL V2 Mechanical Keyboard is designed for users who need a high-performance and customizable keyboard. With a full layout, Gateron mechanical switches, and customizable RGB lighting, this keyboard offers an exceptional typing and gaming experience. The solid build and responsive switches make it a perfect choice for both work and play. Additionally, it comes with programmable macros and key remapping, allowing you to set up the keyboard exactly the way you want it."
            }
        ],
        specs: [
            "Brand: Drop",
            "Layout: Full-size (104-key)",
            "Connection: Wired USB-C",
            "Keycaps: High-quality ABS",
            "Lighting: RGB per-key illumination",
            "Switches: Gateron mechanical switches"
        ],
        included: [
            "USB-C cable",
            "User manual",
            "Keycap puller"
        ],
        reviews: [
            {
                id: "1",
                date:"March 5, 2024",
                username: "KeyboardFanatic",
                rating: "4",
                review: "A solid keyboard overall. The keys are responsive, and the RGB lighting is vibrant. However, the stabilizers on the spacebar could be improved."
            },
            {
                id: "2",
                date:"March 7, 2024",
                username: "JohnDoe",
                rating: "3",
                review: "The keyboard feels good, but there are some minor issues with the keycaps. They're a bit thin for my liking. Still, a good buy for the price."
            },
            {
                id: "3",
                date:"March 10, 2024",
                username: "TechReviewMaster",
                rating: "4",
                review: "I really like the feel of the Gateron switches. The customization options are nice, but the build quality could be better for the price."
            },
            {
                id: "4",
                date:"March 11, 2024",
                username: "GamerGirl",
                rating: "3",
                review: "I love the design and features, but the typing experience isn't as smooth as I expected. The keys sometimes feel a little bit too stiff."
            },
            {
                id: "5",
                date:"March 12, 2024",
                username: "MikeW",
                rating: "4",
                review: "Overall, a good keyboard with excellent customization. The RGB lighting is great, but the keyboard is a bit heavy for a full-size layout."
            }
        ]
    }
    , 
    {
        id: 10,
        img: ["https://massdrop-s3.imgix.net/product-images/yunzii-l75-low-profile-wireless-mechanical-keyboard/FP/KaPQPH25RyuGC7AywlOv_01.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/yunzii-l75-low-profile-wireless-mechanical-keyboard/FP/4wPztaqCSPyCozORDOnu_03.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/yunzii-l75-low-profile-wireless-mechanical-keyboard/FP/U6jpNGW6QOO1DHsuo3m8_02.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/yunzii-l75-low-profile-wireless-mechanical-keyboard/FP/w3GhOMw1SX6N0xtBRcM7_07.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
        ],
        name: "YUNZII L75 Low-Profile Wireless Mechanical Keyboard",
        price: 200 * pesorate,
        rating: 4,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Low-Profile Design for Maximum Comfort",
                description: "The YUNZII L75 Low-Profile Wireless Mechanical Keyboard offers a sleek and compact design, perfect for users who prefer a more streamlined typing experience. Featuring low-profile Gateron switches and wireless Bluetooth connectivity, it delivers a smooth and comfortable typing experience, making it ideal for both work and casual gaming. With RGB backlighting and an ultra-thin profile, the L75 blends modern aesthetics with performance."
            }
        ],
        specs: [
            "Brand: YUNZII",
            "Layout: 75-key",
            "Connection: Bluetooth 5.0, Wired via USB-C",
            "Keycaps: High-quality ABS",
            "Lighting: RGB per-key illumination",
            "Switches: Gateron low-profile mechanical switches"
        ],
        included: [
            "USB-C cable",
            "User manual"
        ],
        reviews: [
            {
                id: "1",
                date:"April 2, 2024",
                username: "TechSavvy",
                rating: "4",
                review: "Great keyboard for daily use! The low-profile switches are comfortable, and the wireless feature is seamless. The only downside is the keycaps could be better."
            },
            {
                id: "2",
                date:"April 5, 2024",
                username: "SophieP",
                rating: "5",
                review: "Love this keyboard! It's compact and sleek. The low-profile keys feel fantastic, and the RGB lighting is gorgeous. Highly recommend!"
            },
            {
                id: "3",
                date:"April 10, 2024",
                username: "JohnTech",
                rating: "4",
                review: "This keyboard is excellent for typing. The low-profile keys take a little getting used to, but once you adjust, it's great. Battery life could be improved."
            },
            {
                id: "4",
                date:"April 15, 2024",
                username: "GamerX",
                rating: "3",
                review: "Nice keyboard overall, but the typing experience is not as responsive as I expected. The keys feel a bit soft for gaming."
            },
            {
                id: "5",
                date:"April 20, 2024",
                username: "LenaL",
                rating: "4",
                review: "The design is sleek and modern, and the typing experience is good. I just wish the build quality felt a bit sturdier. Otherwise, it's a great buy!"
            }
        ]
    }
    , 
    {
        id: 11,
        img: ["https://massdrop-s3.imgix.net/product-images/yunzii-rt68-rapid-trigger-magnetic-gaming-mechanical-keyboard/FP/5STnQdCtTBOd3AeSAklp_black.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/yunzii-rt68-rapid-trigger-magnetic-gaming-mechanical-keyboard/FP/ptHWfnLTm6XqKRNFVkj4_03.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/yunzii-rt68-rapid-trigger-magnetic-gaming-mechanical-keyboard/FP/G9ijOQ1zRum97E7dooq3_05.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/yunzii-rt68-rapid-trigger-magnetic-gaming-mechanical-keyboard/FP/JiICAu7ETueUzPREKTyl_beige.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70"
        ],
        name: "YUNZII RT68 Rapid-Trigger Magnetic Gaming Mechanical Keyboard",
        price: 175 * pesorate,
        rating: 4,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Precision and Speed for Gamers",
                description: "The YUNZII RT68 Rapid-Trigger Magnetic Gaming Mechanical Keyboard is designed for gamers who need fast and accurate keypresses. Equipped with magnetic switches, this keyboard offers ultra-low latency and responsive feedback, giving you the edge in competitive gaming. Its robust build and customizable RGB lighting further enhance the gaming experience, making it the perfect choice for both casual and professional players."
            }
        ],
        specs: [
            "Brand: YUNZII",
            "Layout: 68-key",
            "Connection: Wired USB-C",
            "Keycaps: High-quality ABS",
            "Lighting: RGB per-key illumination",
            "Switches: Gateron magnetic mechanical switches"
        ],
        included: [
            "USB-C cable",
            "User manual"
        ],
        reviews: [
            {
                id: "1",
                date:"May 9, 2024",
                username: "GameMasterX",
                rating: "5",
                review: "This is an amazing gaming keyboard! The rapid trigger switches are incredibly responsive, and the build quality is top-notch. The RGB lighting looks great too!"
            },
            {
                id: "2",
                date:"May 11, 2024",
                username: "SpeedyGamer",
                rating: "4",
                review: "I love the speed of the keys. The magnetic switches are super fast, but the keyboard could use more customization options for the lighting."
            },
            {
                id: "3",
                date:"May 14, 2024",
                username: "TechNova",
                rating: "4",
                review: "Great keyboard for gaming. The magnetic switches are definitely a game-changer. The only downside is the keycaps feel a little too lightweight."
            },
            {
                id: "4",
                date:"May 22, 2024",
                username: "PixelPusher",
                rating: "3",
                review: "While the response time is great, I had some issues with the software. It's not as intuitive as I hoped, but the keyboard works fine otherwise."
            },
            {
                id: "5",
                date:"May 31, 2024",
                username: "TheGamingGuru",
                rating: "4",
                review: "Solid keyboard for fast-paced gaming. The RGB lighting is impressive, but I would have preferred a more durable feel to the overall build."
            }
        ]
    }
    ,
    {
        id: 12,
        img: ["https://massdrop-s3.imgix.net/product-images/mistel-md750-delight-mechanical-keyboard/FP/thZIe65Sp2z5AolmkFjQ_pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/mistel-md750-delight-mechanical-keyboard/FP/J1P3IfwZT7uBEgXIyiau_8.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/mistel-md750-delight-mechanical-keyboard/FP/crtKGnaxS7aYiRxkrwAI_9.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
            "https://massdrop-s3.imgix.net/product-images/mistel-md750-delight-mechanical-keyboard/FP/J6Jtpb8ERbyvGFMkDVZ2_5.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70"
        
        ],
        name: "Mistel MD750 Delight Mechanical Keyboard",
        price: 175 * pesorate,
        rating: 4.25,
        switch: [
            {id: 1, color: "Gateron Black"},
            {id: 2, color: "Gateron Blue"},
            {id: 3, color: "Gateron Brown"},
            {id: 4, color: "Gateron Red"},
            {id: 5, color: "Gateron Yellow"}
        ],
        overview: [
            {
                tagline: "Comfortable and Compact with an Elegant Design",
                description: "The Mistel MD750 Delight Mechanical Keyboard is perfect for users seeking a blend of comfort and portability. Its compact 75% layout and customizable switches make it ideal for both work and gaming. The high-quality keycaps and responsive switches ensure a satisfying typing experience, while the stylish design adds a touch of elegance to any desk setup. The keyboard features versatile connectivity options, making it easy to use with various devices."
            }
        ],
        specs: [
            "Brand: Mistel",
            "Layout: 75-key",
            "Connection: Wired USB-C",
            "Keycaps: High-quality ABS",
            "Lighting: RGB per-key illumination",
            "Switches: Gateron mechanical switches"
        ],
        included: [
            "USB-C cable",
            "User manual"
        ],
        reviews: [
            {
                id: "1",
                date:"July, 6, 2024",
                username: "KeyMasterX",
                rating: "5",
                review: "A fantastic mechanical keyboard! The 75% layout is perfect for my desk, and the typing experience is smooth with the Gateron switches."
            },
            {
                id: "2",
                date:"July, 9, 2024",
                username: "ErgoGamer",
                rating: "4",
                review: "This keyboard is a solid choice. The switches are responsive, and I love the compact design. The RGB lighting could be a bit brighter, though."
            },
            {
                id: "3",
                date:"July, 12, 2024",
                username: "TechPro",
                rating: "4",
                review: "Great keyboard for the price. It's comfortable for long typing sessions, and the design looks sleek. I wish the stabilizers were a bit smoother."
            },
            {
                id: "4",
                date:"July, 20, 2024",
                username: "DeskWarrior",
                rating: "4",
                review: "Very pleased with this keyboard. The build quality is solid, and the compact layout fits perfectly on my desk. The RGB lighting is nice, but not the brightest."
            },
            {
                id: "5",
                date:"July, 25, 2024",
                username: "SmoothTypist",
                rating: "5",
                review: "Love this keyboard! The switches are amazing, and the design is elegant yet functional. It fits perfectly in my home office setup."
            }
        ]
    }
    ,
]
const vmo = [
  {id: 1, name: "Mission", description:[
      "To deliver innovative, high-quality mechanical keyboards that cater to the diverse needs of office workers and PC enthusiasts, enhancing productivity and user experience through superior craftsmanship and thoughtful design."
  ]},
  {id: 2, name: "Vision", description:[
      "To be the leading global provider of cutting-edge mechanical keyboards, inspiring creativity and passion in the digital age while fostering a community of keyboard enthusiasts and professionals"
  ]},
  {id: 3, name: "Objectives",description: [ "Quality Excellence: Continuously improve the quality and durability of our keyboards by integrating the latest technologies and premium materials.", "Customer Satisfaction: Ensure exceptional customer experiences by offering personalized service, comprehensive product manuals, and responsive support.", "Innovative Designs: Stay at the forefront of design innovation by regularly introducing new and unique artisan keyboard designs that capture the essence of creativity and functionality.", "Community Engagement: Build and nurture a vibrant community of keyboard enthusiasts by encouraging feedback, showcasing user reviews, and fostering meaningful connections through our digital platforms.", "Sustainable Practices: Commit to environmentally responsible practices in our manufacturing processes and product lifecycle, promoting sustainability in all aspects of our business.", "Employee Development: Invest in the growth and development of our employees by providing continuous learning opportunities and fostering a supportive and collaborative work environment.", "Global Reach: Expand our market presence globally by establishing strong partnerships and leveraging digital channels to reach a wider audience.", "Innovation and Adaptability: Embrace change and innovation, continuously adapting to market trends and customer needs to remain a leader in the industry." ]}
]

const story = [
  {id:1, title:"Our Story", 
  quoute:"From humble beginnings to crafting keystrokes of perfection.",
  text:"In 2018, Keystaxx was born in a small garage where three friends, fueled by their shared passion for mechanical keyboards, set out to redefine the typing experience. Armed with only a 3D printer and an unyielding drive for perfection, the team meticulously designed keyboards that were not only functional but also beautiful, blending art with engineering. The journey wasn’t easy, but with countless hours of experimentation and innovation, they crafted products that set new standards in the world of keyboards. What began as a small project is now a global brand, recognized for pushing the boundaries of design, quality, and technology. From gamers seeking precision to office professionals in need of efficiency, Keystaxx keyboards are more than just tools—they are a testament to our commitment to excellence, crafted for everyone, everywhere."}
]


const team = [
    { 
        id: 1, 
        img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/454999099_2372230773108864_8461404286643287097_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2Wqq7e34O73F7Qpao5yaSXqyZxIha-hterJnEiFr6G3kbTnc5iD7v7_G6_b84n0Wpt8UFnw5xjgVcm92xgSMy&_nc_ohc=UN9nnZuguPIQ7kNvgEk75vL&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=AJINW4zBRaQha1RQDxgx088&oh=00_AYDe71AH1znKdQ85VhvKpzuMnk3zj_QTYR9ToxvVmIQMZw&oe=67586B49", 
        name: "James Peter Gonzaga", 
        position: "Founder & CEO", 
        quote: "Turning ideas into realities one keystroke at a time.", 
        summary: "Visionary entrepreneur and innovative leader with a decade of experience in product design, strategic management, and scaling startups to successful operations.",
        skills: [
            "Leadership & Team Building",
            "Strategic Planning & Execution",
            "Product Innovation",
            "Market Trend Analysis",
            "Investor Relations"
        ],
        achievements: [
            "Founded Keystaxx and led the company to achieve $2M in annual revenue within its first 3 years.",
            "Secured $500K in seed funding to expand product lines and enter international markets.",
            "Developed and launched 15+ award-winning keyboard models praised for design and performance."
        ],
        education: "Bachelor's Degree in Industrial Design, University of the Philippines (2012)",
        certifications: [
            "Certified Product Manager (CPM), AIPMM (2016)",
            "Leadership Excellence Certificate, Harvard Business School Online (2020)"
        ],
        experience: [
            "CEO, Keystaxx (2018 - Present)",
            "Product Design Manager, ErgoTech Solutions (2013 - 2018)"
        ],
        contact: {
            email: "james.gonzaga@keystaxx.com",
            phone: "+63 912 345 6789",
            linkedin: "linkedin.com/in/jamesgonzaga"
        }
    },
    { 
        id: 2, 
        img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-1/441253984_1663693657703516_3776085941013426418_n.jpg?stp=c120.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEsDSvklyDJ_Zo_Z8NZXqwCysRgzivBW_zKxGDOK8Fb_HrfUrLFBRqMyiFIhnZ8fqvexMRxqSezpLrLOBLfq2yT&_nc_ohc=kwEpPQg6m8sQ7kNvgHIwxc0&_nc_zt=24&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=AIiPakJwWiPrdpmVlysDeaz&oh=00_AYBpGnXbMqoKbUJg-fxwE5GYFYAD2dZW9VjF0e7Fdm7j5w&oe=675841DB", 
        name: "William D. Dosil", 
        position: "Founder & Chief Engineer", 
        quote: "Precision is the soul of every keyboard.", 
        summary: "Expert engineer specializing in hardware design and manufacturing, with extensive experience in PCB development, switch mechanics, and quality control.",
        skills: [
            "PCB Design & Development",
            "Hardware Testing & Debugging",
            "Prototyping & Manufacturing",
            "Embedded Systems",
            "Supplier Relations"
        ],
        achievements: [
            "Designed over 50 proprietary keyboard prototypes, optimizing ergonomics and user satisfaction.",
            "Reduced production costs by 20% through innovative PCB design and component sourcing.",
            "Authored a technical white paper on advancements in mechanical switch designs."
        ],
        education: "Bachelor's Degree in Mechanical Engineering, Ateneo de Manila University (2013)",
        certifications: [
            "Certified PCB Designer (2021)",
            "Six Sigma Green Belt (2020)"
        ],
        experience: [
            "Chief Engineer, Keystaxx (2018 - Present)",
            "Senior Hardware Engineer, Precision Keyboards Inc. (2014 - 2018)"
        ],
        contact: {
            email: "william.dosil@keystaxx.com",
            phone: "+63 917 654 3210",
            linkedin: "linkedin.com/in/williamdosil"
        }
    },
    { 
        id: 3, 
        img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-1/412825736_2331983020332787_6183900205711737811_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH9_xbyPOle11p19wMebk-5m5UhkM5dLUOblSGQzl0tQ4CKFTZtPylVRcyG4MkqmDolfCYYluaT6irz6fgXi2rZ&_nc_ohc=HjBGCiSJyDYQ7kNvgEjBB3S&_nc_zt=24&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=Adx8gNSy5hfnhVo53hRE9hi&oh=00_AYAP3QoC1xTNllkCfdf-9Z2A-Io1GMdwwBpQ-idfCqI_Xw&oe=67586E2E", 
        name: "Alfredo II Fajardo", 
        position: "Founder & Creative Director", 
        quote: "Every keyboard tells a story.", 
        summary: "Creative visionary with expertise in artisan keycap design, branding, and thematic product development, blending functionality with artistic storytelling.",
        skills: [
            "Artisan Keycap Design",
            "Brand Identity Development",
            "3D Modeling & Printing",
            "Thematic Product Design",
            "Creative Direction"
        ],
        achievements: [
            "Designed the 'Galaxy Key' series, generating $300K in sales within 6 months.",
            "Developed a limited-edition 'Retro Type' keyboard, selling out in under 24 hours.",
            "Coordinated with artists and influencers to create exclusive product collaborations."
        ],
        education: "Bachelor's Degree in Fine Arts, De La Salle University (2014)",
        certifications: [
            "Certified 3D Printing Specialist (2019)",
            "Adobe Certified Expert in Photoshop (2020)"
        ],
        experience: [
            "Creative Director, Keystaxx (2018 - Present)",
            "Freelance Product Designer (2014 - 2018)"
        ],
        contact: {
            email: "alfredo.fajardo@keystaxx.com",
            phone: "+63 918 765 4321",
            linkedin: "linkedin.com/in/alfredofajardo"
        }
    },
    { 
        id: 4, 
        img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/361632630_3399954010254072_2765873733267857660_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGCKT_48ebnIZjQWvf5F86Sg74dUK_IM-uDvh1Qr8gz60enjY-_qc-t5sqSpIeAWz1_W0tgQ23I14t1Rrmul7aD&_nc_ohc=TQFEULlfAv8Q7kNvgH-Gt1U&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=ANvcm78p5pZah0MC2HMRUmq&oh=00_AYD5YAECNmrG-UvUlDSQ7iphe0WAy7QKhhsumRDP3aO3-w&oe=675853E4", 
        name: "Mark Bringas", 
        position: "Marketing Manager", 
        quote: "Keystaxx isn’t just a product, it’s a lifestyle.", 
        summary: "Results-driven marketing professional with a strong background in branding, customer engagement, and digital marketing strategies.",
        skills: [
            "Brand Development",
            "Social Media Marketing",
            "Community Building",
            "Content Strategy",
            "SEO/SEM"
        ],
        achievements: [
            "Increased Keystaxx’s community size by 200% over two years through strategic campaigns.",
            "Launched a viral social media campaign that boosted sales by 40% in Q1 2023.",
            "Established partnerships with 15+ influencers, driving brand awareness globally."
        ],
        education: "Bachelor's Degree in Marketing Management, University of Santo Tomas (2015)",
        certifications: [
            "Google Digital Marketing Certification (2021)",
            "HubSpot Content Marketing Certification (2020)"
        ],
        experience: [
            "Marketing Manager, Keystaxx (2020 - Present)",
            "Social Media Specialist, Creative Solutions (2016 - 2020)"
        ],
        contact: {
            email: "mark.bringas@keystaxx.com",
            phone: "+63 919 876 5432",
            linkedin: "linkedin.com/in/markbringas"
        }
    },
    { 
        id: 5, 
        img: "https://scontent.fmnl15-1.fna.fbcdn.net/v/t39.30808-6/438229742_7616636511726728_2238280202694369559_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEwY7WPm3gheuxIMUwy5BT5pGBK7XAbowukYErtcBujCwj4SE5bcnTpPKCPNrkKSyZY3fYt-16zFrESeyHz-b_2&_nc_ohc=SsCSvBqCLYoQ7kNvgHyVo1s&_nc_zt=23&_nc_ht=scontent.fmnl15-1.fna&_nc_gid=Ae2g3ZhWY9Fs4uU5ZeJkeFF&oh=00_AYDycGAKym8AJgGOvpgdmD1PN14T1uwSN2hGiPNDHNj2Gw&oe=675845DE", 
        name: "Rj Salcedo", 
        position: "Community Manager", 
        quote: "The best designs come from listening.", 
        summary: "Dedicated community manager skilled in fostering customer relationships, gathering user feedback, and driving product improvements through active engagement.",
        skills: [
            "Community Engagement",
            "Customer Relationship Management",
            "Social Media Moderation",
            "Feedback Analysis",
            "Event Coordination"
        ],
        achievements: [
            "Built and moderated Keystaxx’s online forums, creating a thriving community of 50K members.",
            "Gathered critical user feedback that influenced the design of the 'Adaptive Key' series.",
            "Organized and hosted 10+ community events, increasing brand loyalty by 30%."
        ],
        education: "Bachelor's Degree in Communication, Polytechnic University of the Philippines (2016)",
        certifications: [
            "Customer Experience Management Certification (2022)",
            "Community Building Specialist, CMX Academy (2021)"
        ],
        experience: [
            "Community Manager, Keystaxx (2019 - Present)",
            "Social Media Coordinator, EngageTech (2017 - 2019)"
        ],
        contact: {
            email: "rj.salcedo@keystaxx.com",
            phone: "+63 920 987 6543",
            linkedin: "linkedin.com/in/rjsalcedo"
        }
    }
  ];
  

const artisan = [
  {
    switches: [
      {
        color: "Red",
        price: 30 * pesorate,
        img: "https://m.media-amazon.com/images/I/51Fr4W9zzvL.jpg",
      },
      {
        color: "Blue",
        price: 35 * pesorate,
        img: "https://m.media-amazon.com/images/I/616iIZ6QwAL.jpg",
      },
      {
        color: "Brown",
        price: 32 * pesorate,
        img: "https://m.media-amazon.com/images/I/512FB6GEVOL.jpg",
      },
      {
        color: "Black",
        price: 40 * pesorate,
        img: "https://m.media-amazon.com/images/I/51ItkjlmqWL.jpg",
      },
      {
        color: "Clear",
        price: 37 * pesorate,
        img: "https://m.media-amazon.com/images/I/51oxfBwidRL.jpg",
      },
    ],
    gasket: [
      {
        layout: "75%",
        name: "NextTime X75 75% Gasket Mechanical Keyboard kit PCB Hot Swappable Swit – KPrepublic",
        price: 50 * pesorate,
        img: "https://kprepublic.com/cdn/shop/products/S278d616b68914489973c8b677d805ce0U.jpg?v=1647067469",
      },
      {
        layout: "60%",
        name: "GMK61 Barebones Keyboard Kit,60% Hot Swap Programmable Gasket Mount",
        price: 55 * pesorate,
        img: "https://m.media-amazon.com/images/I/6113gvsZxLL._AC_UF894,1000_QL80_.jpg",
      },
      {
        layout: "100%",
        name: "Glorious GMMK 3 100% Custom Gaming Keyboard",
        price: 60 * pesorate,
        img: "https://www.caseking.de/dw/image/v2/BKRR_PRD/on/demandware.static/-/Sites-master-catalog-caseking/default/dwe87fea02/images/pim/GATA/GATA-2775/GATA-2775_4349855dc306b0039350cac0fce878444e189b61.jpg?sw=731",
      },
      {
        layout: "65%",
        name: "GMK67-S 65% Wireless Mechanical Keyboard Kit Gasket Structure ",
        price: 70 * pesorate,
        img: "https://down-ph.img.susercontent.com/file/sg-11134201-7rbnf-lqhg1ts2hwoac9",
      },
      {
        layout: "80%",
        name: "Standard GasketGMK81 Wireless Bare Bone Keyboard GASKET",
        price: 45 * pesorate,
        img: "https://down-ph.img.susercontent.com/file/sg-11134201-7rbmm-lqbqh5pxvuro5c",
      },
    ],
    keycap: [
      {
        theme: "Ocean Whale",
        price: 25 * pesorate,
        img: "https://i5.walmartimages.com/asr/2505bcf4-fa6b-4393-ade5-42dc7f2d6cc3.c98c9141f4df3a7d4c9319878d8cac7f.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      },
      {
        theme: "Ice Cream Dream",
        price: 28 * pesorate,
        img: "https://www.mechlands.com/cdn/shop/products/203A2366.jpg?v=1700555955",
      },
      {
        theme: "Cherry",
        price: 30 * pesorate,
        img: "https://gamakay.com/cdn/shop/files/MG_9614_800x.jpg?v=1692699496",
      },
      {
        theme: "Bamboo",
        price: 35 * pesorate,
        img: "https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-ltnm8fx0fctp64",
      },
      {
        theme: "Coffee",
        price: 40 * pesorate,
        img: "https://m.media-amazon.com/images/I/81Y+-ty-QgL.jpg",
      },
    ],
  },
];

const reviews = [
    { id: 1, name: "Sweetie Foxx", date: "August 9, 2024", review: "The product was authentic and the delivery was fast.", rating: 5 },
    { id: 2, name: "Liam Brown", date: "August 10, 2024", review: "Great quality, but the packaging could be improved.", rating: 4 },
    { id: 3, name: "Ella Green", date: "August 11, 2024", review: "Excellent service and premium product. Highly recommend!", rating: 5 },
    { id: 4, name: "Aiden Clark", date: "August 12, 2024", review: "The product arrived late, but it was worth the wait.", rating: 4 },
    { id: 5, name: "Olivia Smith", date: "August 13, 2024", review: "Fantastic experience! Customer support was very helpful.", rating: 5 },
    { id: 6, name: "Ethan Johnson", date: "August 14, 2024", review: "The item had minor defects, but the return process was smooth.", rating: 3 },
    { id: 7, name: "Sophia Davis", date: "August 15, 2024", review: "Amazing product and fast shipping! Will buy again.", rating: 5 },
    { id: 8, name: "Mason Wilson", date: "August 16, 2024", review: "Not as described, but customer service handled it well.", rating: 3 },
    { id: 9, name: "Isabella Moore", date: "August 17, 2024", review: "Perfect! Exactly what I needed and came on time.", rating: 5 },
    { id: 10, name: "James Taylor", date: "August 18, 2024", review: "Good quality but slightly overpriced.", rating: 4 }
];


  return (
    <>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home newarrival={keyboards.slice(0, 3)} bestseller={keyboards.slice(3, 6)} team={team} story ={story} vmo={vmo} />} />
        <Route path="/about" element={<About team={team} story ={story} vmo={vmo} />} />
        <Route path="/products">
        <Route index element={<Products keyboards={keyboards} />} />
        <Route
            path=":productid"
            element={<Product addToCart={addToCart} />} 
        />
        </Route>

        <Route path="/developer">
        <Route index element={<Developer team={team} />} />
        <Route
            path=":developerid"
            element={<Dev team={team} />} 
        />
        </Route>
        <Route path="/reviews" element={<Reviews reviews={reviews}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/artisan" element={<Artisan artisan = {artisan} />} />
        <Route path="/showcase" element={<Showcase keyboards={keyboards}/>} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} keyboards={keyboards} clearCart={clearCart}/>} 
        />
      </Routes>
    </>
  );
}

export default App;
