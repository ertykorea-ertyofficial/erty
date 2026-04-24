import type { ProductPdpData } from "../../data/products/types";

const SITE_URL = "https://ertyofficial.com";

function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildProductJsonLd(product: ProductPdpData) {
  const canonicalUrl = absoluteUrl(product.seo.canonicalPath || `/products/${product.slug}/`);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products/` },
        { "@type": "ListItem", position: 3, name: product.identity.nameKo, item: canonicalUrl },
      ],
    },
  ];

  if (product.variants?.length) {
    graph.push({
      "@type": "ProductGroup",
      "@id": `${canonicalUrl}#product-group`,
      name: product.identity.nameKo,
      url: canonicalUrl,
      brand: { "@type": "Brand", name: "ERTY" },
      productGroupID: product.identity.sku,
      variesBy: ["size"],
      hasVariant: product.variants.map((variant) => ({ "@id": `${canonicalUrl}#${variant.id}` })),
    });
  }

  graph.push({
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: product.identity.nameKo,
    alternateName: product.identity.nameEn,
    sku: product.identity.sku,
    category: product.identity.category,
    description: product.identity.shortDefinition,
    image: absoluteUrl(product.hero?.image?.src || product.seo.ogImage),
    brand: { "@type": "Brand", name: "ERTY" },
    offers: product.variants?.map((variant) => ({ "@id": `${canonicalUrl}#offer-${variant.id}` })),
  });

  if (product.variants?.length) {
    graph.push(
      ...product.variants.map((variant) => ({
        "@type": "Offer",
        "@id": `${canonicalUrl}#offer-${variant.id}`,
        url: canonicalUrl,
        itemOffered: { "@id": `${canonicalUrl}#${variant.id}` },
        priceCurrency: variant.currency || "KRW",
        price: variant.price || "0",
        availability: variant.availability || "https://schema.org/PreOrder",
      })),
    );
  }

  if (product.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: product.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
