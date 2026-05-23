import type { ProductPdpData } from "../../data/products/types";
import { SITE_URL, absoluteUrl } from "./site";

export function buildProductJsonLd(product: ProductPdpData) {
  const canonicalUrl = absoluteUrl(product.seo.canonicalUrl || product.seo.canonicalPath || `/products/${product.slug}/`);
  const productName = product.identity.canonicalName || product.identity.nameKo;
  const productNumber = product.identity.productNumber || product.identity.sku || product.slug;
  const productImage = product.hero?.primaryImage || product.hero?.image?.src || product.seo.ogImage;
  const variants = product.variants || [];
  const hasProductGroup = variants.length > 1;
  const variantId = (variant: NonNullable<ProductPdpData["variants"]>[number]) =>
    String(variant.id || variant.volume || variant.size || product.slug).replace(/[^a-zA-Z0-9_-]/g, "-");
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

  if (hasProductGroup) {
    graph.push({
      "@type": "ProductGroup",
      "@id": `${canonicalUrl}#product-group`,
      name: productName,
      url: canonicalUrl,
      brand: { "@type": "Brand", name: "ERTY" },
      productGroupID: product.slug,
      variesBy: ["size", "volume"],
      hasVariant: variants.map((variant) => ({ "@id": `${canonicalUrl}#${variantId(variant)}` })),
    });
  }

  graph.push({
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: productName,
    alternateName: product.identity.nameEn,
    sku: productNumber,
    category: product.identity.category,
    description: product.identity.shortDefinition,
    image: absoluteUrl(productImage),
    brand: { "@type": "Brand", name: "ERTY" },
    offers: variants.map((variant) => ({ "@id": `${canonicalUrl}#offer-${variantId(variant)}` })),
  });

  if (variants.length) {
    graph.push(
      ...variants.map((variant) => ({
        "@type": "Offer",
        "@id": `${canonicalUrl}#offer-${variantId(variant)}`,
        url: canonicalUrl,
        itemOffered: { "@id": `${canonicalUrl}#${variantId(variant)}` },
      })),
      ...variants.map((variant) => ({
        "@type": "Product",
        "@id": `${canonicalUrl}#${variantId(variant)}`,
        name: variant.name || `${productName} ${variant.volume || variant.size || ""}`.trim(),
        size: variant.size || variant.volume,
        image: variant.image ? absoluteUrl(variant.image) : undefined,
        ...(hasProductGroup ? { isVariantOf: { "@id": `${canonicalUrl}#product-group` } } : {}),
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
