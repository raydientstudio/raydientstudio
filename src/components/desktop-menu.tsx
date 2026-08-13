"use client"

import Link from "next/link"

const products = [
  {
    title: "Agent Stack",
    items: [
      { name: "AI SDK", href: "/ai-sdk" },
      { name: "AI Gateway", href: "/ai-gateway" },
      { name: "Sandbox", href: "/sandbox" },
      { name: "Passport", href: "/passport" },
      { name: "Connect", href: "/connect" },
      { name: "eve", href: "/eve" },
    ],
  },
  {
    title: "Core Platform",
    items: [
      { name: "Security", href: "/security" },
      { name: "Content Delivery", href: "/content-delivery" },
      { name: "Fluid Compute", href: "/fluid-compute" },
      { name: "Observability", href: "/observability" },
      { name: "Workflows", href: "/workflows" },
      { name: "CI/CD", href: "/ci-cd" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Next.js", href: "/nextjs" },
      { name: "Vercel Agent", href: "/vercel-agent" },
      { name: "Vercel Plugin", href: "/vercel-plugin" },
      { name: "Domains", href: "/domains", external: true },
      { name: "v0", href: "/v0", external: true },
    ],
  },
]

const resources = [
  { name: "Documentation", href: "/docs" },
  { name: "Guides", href: "/guides" },
  { name: "Help", href: "/help" },
  { name: "Blog", href: "/blog" },
]

export default function DesktopMenu() {
  return (
    <nav className="flex items-center gap-8">
      {/* Products */}
      <div className="group relative">
        <button
          type="button"
          className="flex items-center gap-1 text-[16px] text-black"
        >
          Products

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform duration-200 group-hover:rotate-180"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Products Mega Menu */}
        <div className="invisible absolute left-0 top-full right-0 z-50 w-screen border-t border-black/5 bg-white opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
          <div className="grid grid-cols-3 gap-20 px-[76px] py-8">
            {products.map((column) => (
              <div key={column.title}>
                <p className="mb-3 text-[16px] text-black/60">
                  {column.title}
                </p>

                <div className="flex flex-col">
                  {column.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex w-fit items-center py-[2px] text-[24px] leading-[1.5] tracking-[-0.02em] text-[#1d1d1f] transition-opacity hover:opacity-60"
                    >
                      {item.name}

                      {item.external && (
                        <span className="ml-1 text-[18px]">
                          ↗
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="group relative">
        <button
          type="button"
          className="flex items-center gap-1 text-[16px] text-black"
        >
          Resources

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform duration-200 group-hover:rotate-180"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Resources Dropdown */}
        <div className="invisible absolute left-0 top-full z-50 w-[220px] pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
          <div className="rounded-xl border border-black/10 bg-white p-3 shadow-lg">
            {resources.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-[15px] text-black hover:bg-black/5"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise */}
      <Link
        href="/enterprise"
        className="text-[16px] text-black transition-opacity hover:opacity-60"
      >
        Enterprise
      </Link>

      {/* Pricing */}
      <Link
        href="/pricing"
        className="text-[16px] text-black transition-opacity hover:opacity-60"
      >
        Pricing
      </Link>
    </nav>
  )
}