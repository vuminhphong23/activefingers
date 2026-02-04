import Link from "next/link";
import HeaderMenu from "../Menu";

export default function Header({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handleSidebar,
}) {
  return (
    <header
      className={`main-header menu-absolute ${scroll ? "fixed-header" : ""}`}
    >
      <div className="header-upper">
        <div className="container container-1695 clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <img
                        src="/assets/images/logos/logo.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="navbar-toggle"
                    onClick={handleMobileMenu}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className={`navbar-collapse collapse clearfix ${
                    isMobileMenu ? "show" : ""
                  }`}
                >
                  <HeaderMenu />
                </div>
              </nav>
            </div>
            <div className="menu-btns ms-lg-auto">
              <Link href="/contact" className="theme-btn style-two ms-5">
                let&apos;s talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
