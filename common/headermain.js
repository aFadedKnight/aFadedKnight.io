class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><header><a href="../index"><img src="../imgs/logos/KnightLogo4kTransparent.png" alt="aFadedKnight Primary Logo transparent" class="Home"> </a><!-- Mobile Menu Icon --><div class="mobile-menu-icon" id="mobile-menu-icon">&#9776;</div><nav class="Links"><ul class="nav__links"><a href="../Projects/Categories/3DRenders"><button class="Renders">Renders</button></a> <a href="../Projects/Categories/3DAnimations"><button class="Animation">Animation</button></a> <a href="../projects"><button class="All">All Work</button></a> <a href="../Projects/Categories/LiveProduction"><button class="LiveProd">Live Prod</button></a> <a href="../Projects/Categories/More"><button class="Other">More</button></a></ul></nav><!-- About button --> <a href="../about" class="about-link"><button class="about">About</button></a></header><!-- Mobile Menu --><div class="mobile-menu" id="mobile-menu"><a href="../Projects/Categories/3DRenders"><button class="Renders">Renders</button></a> <a href="../Projects/Categories/3DAnimations"><button class="Animation">Animation</button></a> <a href="../projects"><button class="All">All Work</button></a> <a href="../Projects/Categories/LiveProduction"><button class="LiveProd">Live Prod</button></a> <a href="../Projects/Categories/Coding-Other"><button class="Other">More</button></a></div></body></html>'
    };
};

customElements.define('site-header',SiteHeader)