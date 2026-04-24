(function initProductPdpEngine() {
  const data = window.ERTY_PRODUCT_PDP_DATA;
  const root = document.getElementById("product-pdp-root");

  if (!data || !root) {
    return;
  }

  const SITE_URL = "https://ertyofficial.com";
  const currentSlug = window.location.pathname
    .replace(/\/index\.html$/, "/")
    .split("/")
    .filter(Boolean)
    .pop();

  const product = data.products.find(
    (item) => item.slug === currentSlug || item.aliases?.includes(currentSlug),
  );

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function absoluteUrl(path) {
    if (!path) {
      return SITE_URL;
    }

    if (/^https?:\/\//.test(path)) {
      return path;
    }

    return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  }

  function ensureMeta(selector, createTag, attributes) {
    let node = document.head.querySelector(selector);

    if (!node) {
      node = document.createElement(createTag);
      document.head.appendChild(node);
    }

    Object.entries(attributes).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });
  }

  function renderList(items, className = "") {
    if (!items?.length) {
      return "";
    }

    return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function renderSection(id, title, body) {
    if (!body) {
      return "";
    }

    return `
      <section class="pdp-section" id="${escapeHtml(id)}" aria-labelledby="${escapeHtml(id)}-title">
        <div class="pdp-section__head">
          <p class="pdp-section__eyebrow">PDP ${escapeHtml(id)}</p>
          <h2 id="${escapeHtml(id)}-title">${escapeHtml(title)}</h2>
        </div>
        <div class="pdp-section__body">${body}</div>
      </section>
    `;
  }

  function renderHero(product) {
    const image = product.hero?.image;

    return `
      <section class="pdp-hero" aria-labelledby="pdp-title">
        <div class="pdp-hero__copy">
          <p class="pdp-eyebrow">${escapeHtml(product.hero?.eyebrow || product.identity.line)}</p>
          <h1 id="pdp-title">${escapeHtml(product.hero?.title || product.identity.nameKo)}</h1>
          ${product.hero?.subtitle ? `<p class="pdp-hero__subtitle">${escapeHtml(product.hero.subtitle)}</p>` : ""}
          ${product.hero?.description ? `<p class="pdp-hero__desc">${escapeHtml(product.hero.description)}</p>` : ""}
        </div>
        ${
          image?.src
            ? `<figure class="pdp-hero__media">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || product.identity.nameKo)}" loading="eager" decoding="async" />
              </figure>`
            : ""
        }
      </section>
    `;
  }

  function renderAnswerBox(summary) {
    if (!summary) {
      return "";
    }

    return `
      <section class="pdp-answer" aria-labelledby="pdp-answer-title">
        <p class="pdp-answer__kicker">Quick Answer / AI Summary</p>
        <h2 id="pdp-answer-title">${escapeHtml(summary.title)}</h2>
        <p>${escapeHtml(summary.body)}</p>
        ${renderList(summary.bullets, "pdp-answer__bullets")}
      </section>
    `;
  }

  function renderBuyBox(product) {
    const buyBox = product.buyBox;
    const variants = product.variants || [];

    if (!buyBox && !variants.length) {
      return "";
    }

    return `
      <section class="pdp-buy" aria-labelledby="pdp-buy-title">
        <div>
          <p class="pdp-section__eyebrow">Purchase / Variant / CTA</p>
          <h2 id="pdp-buy-title">구매와 용량 선택</h2>
          ${buyBox?.status ? `<p>${escapeHtml(buyBox.status)}</p>` : ""}
        </div>
        ${
          variants.length
            ? `<div class="pdp-variant-list">${variants
                .map(
                  (variant) => `
                    <article class="pdp-variant">
                      <h3>${escapeHtml(variant.name)}</h3>
                      <dl>
                        <div><dt>SKU</dt><dd>${escapeHtml(variant.sku)}</dd></div>
                        <div><dt>Size</dt><dd>${escapeHtml(variant.size)}</dd></div>
                        <div><dt>Status</dt><dd>${escapeHtml(variant.availability?.replace("https://schema.org/", "") || "Pending")}</dd></div>
                      </dl>
                    </article>
                  `,
                )
                .join("")}</div>`
            : ""
        }
        <div class="pdp-cta-row">
          <a class="pdp-button pdp-button--primary" href="${escapeHtml(variants[0]?.url || "#")}" aria-disabled="true">${escapeHtml(buyBox?.primaryCta || "제품 구매하기")}</a>
          <a class="pdp-button pdp-button--ghost" href="${escapeHtml(buyBox?.secondaryHref || "/products/")}">${escapeHtml(buyBox?.secondaryCta || "제품 허브")}</a>
        </div>
      </section>
    `;
  }

  function renderIdentity(identity) {
    if (!identity) {
      return "";
    }

    const rows = [
      ["번호", identity.sku],
      ["제품명", identity.nameKo],
      ["영문명", identity.nameEn],
      ["라인", identity.line],
      ["카테고리", identity.category],
      ["정의", identity.shortDefinition],
    ].filter(([, value]) => value);

    return renderSection(
      "identity",
      "Product Identity",
      `<dl class="pdp-definition-list">${rows
        .map(([term, value]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd></div>`)
        .join("")}</dl>`,
    );
  }

  function renderProblemSolution(problemSolution) {
    if (!problemSolution) {
      return "";
    }

    return renderSection(
      "problem-solution",
      "Problem-Solution Fit",
      `
        ${problemSolution.problem ? `<article><h3>Problem</h3><p>${escapeHtml(problemSolution.problem)}</p></article>` : ""}
        ${problemSolution.solution ? `<article><h3>Solution</h3><p>${escapeHtml(problemSolution.solution)}</p></article>` : ""}
        ${renderList(problemSolution.fitFor, "pdp-tag-list")}
      `,
    );
  }

  function renderFormula(formula) {
    if (!formula) {
      return "";
    }

    return renderSection(
      "formula",
      "Formula Architecture",
      `
        ${formula.headline ? `<p class="pdp-lead">${escapeHtml(formula.headline)}</p>` : ""}
        ${formula.principles?.length ? `<div class="pdp-split-list">${formula.principles
          .map((item) => `<article><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`)
          .join("")}</div>` : ""}
      `,
    );
  }

  function renderIngredients(ingredients) {
    if (!ingredients || (!ingredients.items?.length && !ingredients.note)) {
      return "";
    }

    return renderSection(
      "ingredients",
      "Ingredient Intelligence",
      `
        ${ingredients.headline ? `<p class="pdp-lead">${escapeHtml(ingredients.headline)}</p>` : ""}
        ${ingredients.note ? `<p>${escapeHtml(ingredients.note)}</p>` : ""}
        ${ingredients.items?.length ? `<table class="pdp-table"><tbody>${ingredients.items
          .map((item) => `<tr><th>${escapeHtml(item.name)}</th><td>${escapeHtml(item.role)}</td></tr>`)
          .join("")}</tbody></table>` : ""}
      `,
    );
  }

  function renderTexture(texture) {
    if (!texture) {
      return "";
    }

    return renderSection(
      "texture",
      "Texture Profile",
      `<dl class="pdp-definition-list">
        ${texture.type ? `<div><dt>Type</dt><dd>${escapeHtml(texture.type)}</dd></div>` : ""}
        ${texture.finish ? `<div><dt>Finish</dt><dd>${escapeHtml(texture.finish)}</dd></div>` : ""}
      </dl>${renderList(texture.sensory, "pdp-tag-list")}`,
    );
  }

  function renderEvidence(evidence) {
    if (!evidence?.length) {
      return "";
    }

    return renderSection(
      "evidence",
      "Evidence / Clinical Data",
      `<div class="pdp-split-list">${evidence
        .map((item) => `<article><h3>${escapeHtml(item.metric)}</h3><p>${escapeHtml(item.label)}</p><small>${escapeHtml(item.source || "")}</small></article>`)
        .join("")}</div>`,
    );
  }

  function renderHowToUse(howToUse) {
    if (!howToUse?.steps?.length) {
      return "";
    }

    return renderSection(
      "how-to-use",
      "How to Use",
      `<ol class="pdp-ordered-list">${howToUse.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>${
        howToUse.caution ? `<p class="pdp-note">${escapeHtml(howToUse.caution)}</p>` : ""
      }`,
    );
  }

  function renderRoutines(routines) {
    if (!routines?.length) {
      return "";
    }

    return renderSection(
      "routine",
      "Routine Pairing",
      `<div class="pdp-split-list">${routines
        .map((routine) => `<article><h3>${escapeHtml(routine.title)}</h3><p>${escapeHtml(routine.steps.join(" → "))}</p><a href="${escapeHtml(routine.href)}">루틴에서 보기</a></article>`)
        .join("")}</div>`,
    );
  }

  function renderFaq(faq) {
    if (!faq?.length) {
      return "";
    }

    return renderSection(
      "faq",
      "FAQ",
      `<div class="pdp-faq-list">${faq
        .map((item) => `<details open><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`)
        .join("")}</div>`,
    );
  }

  function renderRelated(relatedProducts) {
    if (!relatedProducts?.length) {
      return "";
    }

    return renderSection(
      "related",
      "Related Products",
      `<div class="pdp-split-list">${relatedProducts
        .map((item) => `<a class="pdp-related-link" href="${escapeHtml(item.href)}"><span>${escapeHtml(item.sku)}</span><strong>${escapeHtml(item.name)}</strong></a>`)
        .join("")}</div>`,
    );
  }

  function renderDisclaimer(claims) {
    if (!claims?.disclaimer) {
      return "";
    }

    return `
      <section class="pdp-disclaimer" aria-labelledby="pdp-disclaimer-title">
        <h2 id="pdp-disclaimer-title">Claim Disclaimer</h2>
        <p>${escapeHtml(claims.disclaimer)}</p>
      </section>
    `;
  }

  function buildJsonLd(product) {
    const canonicalUrl = absoluteUrl(product.seo.canonicalPath || `/products/${product.slug}/`);
    const imageUrl = absoluteUrl(product.hero?.image?.src || product.seo.ogImage);
    const graph = [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products/` },
          { "@type": "ListItem", position: 3, name: product.identity.nameKo, item: canonicalUrl },
        ],
      },
      {
        "@type": "ProductGroup",
        "@id": `${canonicalUrl}#product-group`,
        name: product.identity.nameKo,
        url: canonicalUrl,
        brand: { "@type": "Brand", name: "ERTY" },
        productGroupID: product.identity.sku,
        variesBy: ["size"],
        hasVariant: product.variants?.map((variant) => ({ "@id": `${canonicalUrl}#${variant.id}` })) || [],
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        name: product.identity.nameKo,
        alternateName: product.identity.nameEn,
        sku: product.identity.sku,
        category: product.identity.category,
        description: product.identity.shortDefinition,
        image: imageUrl,
        brand: { "@type": "Brand", name: "ERTY" },
        offers: product.variants?.map((variant) => ({ "@id": `${canonicalUrl}#offer-${variant.id}` })),
      },
      ...(product.variants?.map((variant) => ({
        "@type": "Product",
        "@id": `${canonicalUrl}#${variant.id}`,
        name: variant.name,
        sku: variant.sku,
        size: variant.size,
        isVariantOf: { "@id": `${canonicalUrl}#product-group` },
      })) || []),
      ...(product.variants?.map((variant) => ({
        "@type": "Offer",
        "@id": `${canonicalUrl}#offer-${variant.id}`,
        url: canonicalUrl,
        itemOffered: { "@id": `${canonicalUrl}#${variant.id}` },
        priceCurrency: variant.currency || "KRW",
        price: variant.price || "0",
        availability: variant.availability || "https://schema.org/PreOrder",
      })) || []),
    ];

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

  function applySeo(product) {
    const canonicalUrl = absoluteUrl(product.seo.canonicalPath || `/products/${product.slug}/`);
    const imageUrl = absoluteUrl(product.seo.ogImage || product.hero?.image?.src);

    document.title = product.seo.title;
    ensureMeta('meta[name="description"]', "meta", {
      name: "description",
      content: product.seo.description,
    });
    ensureMeta('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: canonicalUrl,
    });
    ensureMeta('meta[property="og:type"]', "meta", { property: "og:type", content: "product" });
    ensureMeta('meta[property="og:title"]', "meta", { property: "og:title", content: product.seo.title });
    ensureMeta('meta[property="og:description"]', "meta", { property: "og:description", content: product.seo.description });
    ensureMeta('meta[property="og:url"]', "meta", { property: "og:url", content: canonicalUrl });
    ensureMeta('meta[property="og:image"]', "meta", { property: "og:image", content: imageUrl });
    ensureMeta('meta[name="twitter:card"]', "meta", { name: "twitter:card", content: "summary_large_image" });
    ensureMeta('meta[name="twitter:title"]', "meta", { name: "twitter:title", content: product.seo.title });
    ensureMeta('meta[name="twitter:description"]', "meta", { name: "twitter:description", content: product.seo.description });
    ensureMeta('meta[name="twitter:image"]', "meta", { name: "twitter:image", content: imageUrl });
  }

  function renderProduct(product) {
    applySeo(product);
    root.innerHTML = [
      renderHero(product),
      renderAnswerBox(product.aiSummary),
      renderBuyBox(product),
      renderIdentity(product.identity),
      renderProblemSolution(product.problemSolution),
      renderFormula(product.formula),
      renderIngredients(product.ingredients),
      renderTexture(product.texture),
      renderEvidence(product.evidence),
      renderHowToUse(product.howToUse),
      renderRoutines(product.routines),
      renderFaq(product.faq),
      renderRelated(product.relatedProducts),
      renderDisclaimer(product.claims),
    ].join("");

    document.getElementById("product-json-ld")?.remove();

    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.id = "product-json-ld";
    jsonLd.textContent = JSON.stringify(buildJsonLd(product));
    root.appendChild(jsonLd);
  }

  if (!product) {
    root.innerHTML = `
      <section class="pdp-missing">
        <h1>Product PDP data is not ready</h1>
        <p>이 제품 상세 페이지는 PDP 데이터 연결 전입니다.</p>
        <a href="/products/">제품 허브로 돌아가기</a>
      </section>
    `;
    return;
  }

  renderProduct(product);
})();
