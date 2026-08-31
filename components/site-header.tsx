"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
  BookOpen,
  GraduationCap,
  Home,
  Mail,
  Wrench,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  { href: "/#home", label: "Home", icon: Home },
  { href: "/#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/#case-study", label: "Case Study", icon: BookOpen },
  { href: "/#capabilities", label: "Skills", icon: Wrench },
  { href: "/#education", label: "Education", icon: GraduationCap },
  { href: "/#contact", label: "Contact", icon: Mail },
];

function SidebarNavLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Home;
}) {
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild size="lg" className="portfolio-nav-button">
        <Link href={href} onClick={() => setOpenMobile(false)}>
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function SiteSidebar() {
  return (
    <Sidebar collapsible="offcanvas" className="portfolio-sidebar">
      <SidebarHeader className="portfolio-sidebar-header">
        <Link href="/#home" className="portfolio-sidebar-profile" aria-label="Natthapol Jinavanich home">
          <strong>Natthapol (NJ)<br />Jinavanich</strong>
          <small>Project &amp; Program Manager</small>
        </Link>
      </SidebarHeader>

      <SidebarContent className="portfolio-sidebar-content">
        <SidebarGroup className="portfolio-sidebar-group">
          <SidebarGroupContent>
            <SidebarMenu className="portfolio-sidebar-menu">
              {navigation.map((item) => <SidebarNavLink key={item.label} {...item} />)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
