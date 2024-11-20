import React from 'react';
import Overview from './Overview';
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Specification from './Specification';
import Inthebox from './Inthebox';
import Keyfeatures from './keyfeatures';
import SetupInstructions from './Setup';
import Howtouse from './Howtouse';
import Troubleshoot from './Troubleshoot';
import Maintenance from './Maintenance';
import WarrantyAndSupport from './WarrantyAndSupport';

export default function App() {
  const kbx = {
    name: "KB X1000",
    img: "https://m.media-amazon.com/images/I/61kbx5X4SqL._AC_SL1215_.jpg",
    description:
      "Product Overview - The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort. It features customizable RGB backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming experience.",
    switchType: "Cherry MX Red (Mechanical)",
    keyLayout: "Full-size (104 keys)",
    backlighting: "RGB with customizable colors",
    connectivity: "Wired (USB 2.0)",
    dimensions: "440 mm x 135 mm x 35 mm",
    weight: "1.2 kg",
    cableLength: "1.8 meters",
    additionalFeatures: "Anti-ghosting, N-key rollover, dedicated media controls"
  };

  const inTheBoxItems = [
    "KB-X1000 Keyboard",
    "USB Cable",
    "User Manual",
    "Keycap Removal Tool",
    "Warranty Card"
  ];

  const keyFeatures = [
    "Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.",
    "Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.",
    "Programmable Keys: Assign macros and custom functions to any key with the included software.",
    "Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.",
    "Dedicated Media Controls: Easily control music and videos with dedicated media keys."
  ];

  const setupInstructions = [
    {
      section: "Unboxing",
      steps: [
        "Carefully remove the keyboard and accessories from the box."
      ]
    },
    {
      section: "Connecting the Keyboard",
      steps: [
        "Plug the USB cable into an available USB port on your computer.",
        "The keyboard should be automatically recognized and ready for use. No additional drivers are required."
      ]
    },
    {
      section: "Software Installation (Optional)",
      steps: [
        "Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.",
        "Follow the on-screen instructions to install the software."
      ]
    },
    {
      section: "Keycap Removal and Replacement",
      steps: [
        "Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.",
        "Replace keycaps by aligning them over the switch and pressing down until they click into place."
      ]
    }
  ];

  const howToUseInstructions = [
    {
      section: "Basic Typing",
      steps: [
        "Simply start typing; the keyboard is pre-configured with standard key mappings."
      ]
    },
    {
      section: "Customizing Backlighting",
      steps: [
        "Press Fn + F9 to cycle through preset lighting effects.",
        "Use the configuration software to create custom lighting profiles."
      ]
    },
    {
      section: "Programming Keys",
      steps: [
        "Open the configuration software.",
        "Select the key you want to program.",
        "Assign a macro or function and save your changes."
      ]
    },
    {
      section: "Using Media Controls",
      steps: [
        "Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control."
      ]
    }
  ];

  const troubleshootInstructions = [
    {
      section: "Keyboard Not Responding",
      steps: [
        "Ensure the USB connection is secure.",
        "Try connecting the keyboard to a different USB port.",
        "Restart your computer if necessary."
      ]
    },
    {
      section: "Backlighting Not Working",
      steps: [
        "Check if the backlight is disabled or set to a minimal brightness level.",
        "Verify that the configuration software is properly installed."
      ]
    },
    {
      section: "Key Not Registering",
      steps: [
        "Confirm that no physical obstructions are affecting the key.",
        "Test the key in different applications to determine if the issue is software-related."
      ]
    }
  ];

  const maintenanceInstructions = [
    {
      section: "Cleaning",
      steps: [
        "Disconnect the keyboard from the computer.",
        "Use a soft, dry cloth to clean the surface.",
        "For deeper cleaning, carefully remove keycaps and use compressed air to remove debris."
      ]
    },
    {
      section: "Storage",
      steps: [
        "Store the keyboard in a cool, dry place.",
        "Avoid exposure to liquids or extreme temperatures."
      ]
    }
  ];

  const warrantyAndSupport = [
    {
      section: "Warranty Period",
      details: [
        "2 years from the date of purchase."
      ]
    },
    {
      section: "Customer Support",
      details: [
        "For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.",
        "Manufacturer’s Website: www.keyboardcompany.com",
        "Customer Support Email: support@keyboardcompany.com",
        "Support Hotline: 1-800-555-1234"
      ]
    },
    {
      section: "Closing Statement",
      details: [
        "Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!"
      ]
    }
  ];

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Overview kbx={kbx} />} />
        <Route path="/specification" element={<Specification kbx={kbx} />} />
        <Route path="/inthebox" element={<Inthebox items={inTheBoxItems} />} />
        <Route path="/keyfeatures" element={<Keyfeatures features={keyFeatures} />} />
        <Route path="/setup" element={<SetupInstructions instructions={setupInstructions} />} />
        <Route path="/howtouse" element={<Howtouse how={howToUseInstructions} />} />
        <Route path="/troubleshoot" element={<Troubleshoot troubleshoot={troubleshootInstructions} />} />
        <Route path="/maintenance" element={<Maintenance maintenance={maintenanceInstructions} />} />
        <Route path="/warrantyandsupport" element={<WarrantyAndSupport warranty={warrantyAndSupport} />} />
      </Routes>
    </Router>
  );
}
