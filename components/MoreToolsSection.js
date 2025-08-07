"use client";
import Link from "next/link";
import { tools } from "@/config/tools";

const MoreToolsSection = ({ currentToolSlug }) => {
  // Filter by category and exclude the current tool
  const categories = {
    convert: tools.filter(t => t.category === "convert" && t.slug !== currentToolSlug),
    compress: tools.filter(t => t.category === "compress" && t.slug !== currentToolSlug),
    utility: tools.filter(t => t.category === "utility" && t.slug !== currentToolSlug),
  };

  return (
    <div className="mt-20 text-text">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
        🔧 Explore More Tools from FreeToolShop
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Convert */}
        <div>
          <h3 className="text-xl font-semibold  mb-3 text-secondary">🔄 Converters</h3>
          <div className="space-y-3 flex flex-col">
            {categories.convert.slice(0, 5).map(tool => (
              <Link key={tool.slug} href={`/${tool.slug}`}>
                <div className="glow-border p-5 bg-white rounded-xl h-full shadow transition-all hover:text-accent hover:shadow-[0_0_20px_var(--glow-color)] hover:scale-[1.02]">
                  <div className="flex items-center gap-3 ">
                    <span className="text-xl">{tool.icon}</span>
                    <div>
                      <p className="font-medium">{tool.title}</p>
                      <p className="text-sm text-text">{tool.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Compress */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-secondary">📦 Compressors</h3>
          <div className="space-y-3 flex flex-col">
            {categories.compress.slice(0, 5).map(tool => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                <div className="h-full bg-base-200 p-3 rounded-xl shadow hover:bg-primary hover:text-white transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{tool.icon}</span>
                    <div>
                      <p className="font-medium">{tool.title}</p>
                      <p className="text-sm text-gray-500">{tool.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Utility */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-secondary">🧰 Utilities</h3>
          <div className="space-y-3 flex flex-col">
            {categories.utility.slice(0, 5).map(tool => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                <div className="h-full bg-base-200 p-3 rounded-xl shadow hover:bg-primary hover:text-white transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{tool.icon}</span>
                    <div>
                      <p className="font-medium">{tool.title}</p>
                      <p className="text-sm text-gray-500">{tool.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreToolsSection;
