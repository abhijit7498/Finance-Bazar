// components/DesktopNav.jsx
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

export default function DesktopNav({
  mainNavItems,
  openDropdown,
  setOpenDropdown,
}) {
  return (
    <nav className="hidden md:flex space-x-8">
      {mainNavItems.map((item, index) =>
        item.isSingle ? (
          <Link
            key={index}
            to={item.href}
            className="text-sm text-blue-950 font-semibold flex items-center h-16"
          >
            {item.title}
          </Link>
        ) : (
          <DropdownMenu
            key={item.title}
            open={openDropdown === item.title}
            onOpenChange={(isOpen) =>
              setOpenDropdown(isOpen ? item.title : null)
            }
          >
            <DropdownMenuTrigger asChild>
              <button className="flex items-center h-16 text-blue-950 cursor-pointer font-semibold text-sm">
                {item.title}
                <FiChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${openDropdown === item.title ? "rotate-180" : ""
                    }`}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-6 w-screen">
              <div className="max-w-5xl mx-auto flex justify-between">
                {item.items.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-base text-blue-950 mb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.links.map((link, index) => (
                        <li key={index}>
                          <Link
                            to={link.href}
                            className="text-sm font-base hover:text-primary relative inline-block group text-blue-900"
                          >
                            {link.label}
                            {link.badge && (
                              <span className="ml-1 px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded">
                                {link.badge}
                              </span>
                            )}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      )}
    </nav>
  );
}
