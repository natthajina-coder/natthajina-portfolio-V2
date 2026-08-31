"use client";

import type { CSSProperties, ReactNode } from "react";
import { SiteSidebar } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      defaultOpen
      style={{ "--sidebar-width": "310px" } as CSSProperties}
      className="portfolio-shell"
    >
      <SiteSidebar />
      <SidebarInset className="portfolio-content">
        <div className="portfolio-mobile-bar">
          <SidebarTrigger className="portfolio-mobile-trigger" aria-label="Open navigation" />
          <div className="portfolio-mobile-brand">
            <span>NJ Jinavanich</span>
          </div>
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
