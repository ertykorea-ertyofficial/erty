import { notFound } from "next/navigation";
import { ProductAnswerBox } from "../../../components/pdp/ProductAnswerBox";
import { ProductBuyBox } from "../../../components/pdp/ProductBuyBox";
import { ProductHero } from "../../../components/pdp/ProductHero";
import { ProductIdentity } from "../../../components/pdp/ProductIdentity";
import { ProblemSolution } from "../../../components/pdp/ProblemSolution";
import { FormulaArchitecture } from "../../../components/pdp/FormulaArchitecture";
import { IngredientIntelligence } from "../../../components/pdp/IngredientIntelligence";
import { TextureProfile } from "../../../components/pdp/TextureProfile";
import { EvidenceSection } from "../../../components/pdp/EvidenceSection";
import { HowToUse } from "../../../components/pdp/HowToUse";
import { RoutinePairing } from "../../../components/pdp/RoutinePairing";
import { ProductFAQ } from "../../../components/pdp/ProductFAQ";
import { RelatedProducts } from "../../../components/pdp/RelatedProducts";
import { ClaimDisclaimer } from "../../../components/pdp/ClaimDisclaimer";
import { ProductJsonLd } from "../../../components/pdp/ProductJsonLd";
import { getProductBySlug, products } from "../../../data/products";
import { buildProductMetadata } from "../../../lib/seo/productMetadata";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {};
  }

  return buildProductMetadata(product);
}

export default function ProductPdpPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="pdp-layout">
      <ProductHero product={product} />
      <ProductAnswerBox aiSummary={product.aiSummary} />
      <ProductBuyBox product={product} />
      <ProductIdentity identity={product.identity} />
      <ProblemSolution data={product.problemSolution} />
      <FormulaArchitecture formula={product.formula} />
      <IngredientIntelligence ingredients={product.ingredients} />
      <TextureProfile texture={product.texture} />
      <EvidenceSection evidence={product.evidence} />
      <HowToUse howToUse={product.howToUse} />
      <RoutinePairing routines={product.routines} />
      <ProductFAQ faq={product.faq} />
      <RelatedProducts relatedProducts={product.relatedProducts} />
      <ClaimDisclaimer claims={product.claims} />
      <ProductJsonLd product={product} />
    </main>
  );
}
