const appRoutes = {
    home: "/",
    about: "/about",
    contact: "/contact",
    blog: "/blog",
    careers: "/careers",
    support: "/support",
    faq: "/faq",
    terms: "/terms-and-conditions",
    privacy: "/privacy-policy",
    dashboard: "/dashboard",
    profile: "/profile",
    settings: "/settings",
    login: "/login",
    register: "/register",
};

const DOCS = "/docs";

const docsRoutes = {
    1: `${DOCS}`,
    2: `${DOCS}/introduction`,
    3: `${DOCS}/terms-and-conditions`,
    4: `${DOCS}/privacy-policy`,
    5: `${DOCS}/cookie-policy`,
    6: `${DOCS}/refund-and-replacement-policy`,
    7: `${DOCS}/shipping-and-delivery-policy`,
    8: `${DOCS}/cancellation-policy`,
    9: `${DOCS}/intellectual-property-policy`,
    10: `${DOCS}/partnership-policy`,
    11: `${DOCS}/warranty-and-guarantee-policy`,
    12: `${DOCS}/end-user-license-agreement`,
    13: `${DOCS}/non-disclosure-agreement`,
    14: `${DOCS}/service-level-agreement`,
};

export { appRoutes, docsRoutes, DOCS };
