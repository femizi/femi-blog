import React from "react";
export function Footer({
  year
}) {
  return <footer className="absolute bottom-0 inset-x-0 py-2 grid place-content-center
      lg:border-t lg:border-slate-900/10
      dark:border-slate-50/[0.06] dark:text-slate-400">
        Built By Femi Efejuku © {year}
      </footer>;
}
  