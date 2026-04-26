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

  function absoluteUrl(path = "/") {
    if (/^https?:\/\//.test(path)) {
      return path;
    }

    return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  }

  function canonicalUrl(product) {
    return absoluteUrl(product.seo.canonicalUrl || product.seo.canonicalPath || `/products/${product.slug}/`);
  }

  function productNumber(product) {
    return product.identity.productNumber || product.identity.sku || product.slug;
  }

  function normalizedProductNumber(product) {
    const number = String(productNumber(product) || "").trim();
    return number.length === 1 ? `0${number}` : number;
  }

  function productPosterSrc(product) {
    const number = normalizedProductNumber(product);
    return number ? `/assets/images/brand/products/stage-posters/${number}.png` : "";
  }

  function heroImageSrc(product) {
    return productPosterSrc(product) || product.hero?.primaryImage || product.hero?.image?.src;
  }

  function heroImageAlt(product) {
    return `${product.identity.nameKo || productName(product)} 3:4 제품 포스터`;
  }

  function productName(product) {
    return product.identity.canonicalName || product.identity.nameKo;
  }

  function imageAlt(product, src) {
    return (
      product.media?.find((item) => item.src === src)?.alt ||
      product.variants?.find((variant) => variant.image === src)?.imageAlt ||
      product.identity.canonicalName ||
      product.identity.nameKo
    );
  }

  function variantKey(variant, fallback) {
    return String(variant.sku || variant.id || variant.volume || variant.size || fallback).replace(/[^a-zA-Z0-9_-]/g, "-");
  }

  function ensureMeta(selector, createTag, attributes) {
    let node = document.head.querySelector(selector);

    if (!node) {
      node = document.createElement(createTag);
      document.head.appendChild(node);
    }

    Object.entries(attributes).forEach(([key, value]) => {
      if (value) {
        node.setAttribute(key, value);
      }
    });
  }

  function renderList(items, className = "") {
    if (!items?.length) {
      return "";
    }

    return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function renderSection(id, eyebrow, title, body) {
    if (!body) {
      return "";
    }

    return `
      <section class="pdp-section" id="${escapeHtml(id)}" aria-labelledby="${escapeHtml(id)}-title">
        <div class="pdp-section__head">
          <p class="pdp-section__eyebrow">${escapeHtml(eyebrow)}</p>
          <h2 id="${escapeHtml(id)}-title">${escapeHtml(title)}</h2>
        </div>
        <div class="pdp-section__body">${body}</div>
      </section>
    `;
  }

  function renderHero(product) {
    const imageSrc = heroImageSrc(product);

    return `
      <section class="pdp-hero" aria-labelledby="pdp-title">
        <div class="pdp-hero__copy">
          <p class="pdp-eyebrow">${escapeHtml(product.hero?.eyebrow || product.identity.line)}</p>
          <h1 id="pdp-title">${escapeHtml(product.identity.nameKo)}</h1>
          ${product.hero?.headline || product.hero?.subtitle ? `<p class="pdp-hero__subtitle">${escapeHtml(product.hero.headline || product.hero.subtitle)}</p>` : ""}
          ${product.hero?.subheadline || product.hero?.description ? `<p class="pdp-hero__desc">${escapeHtml(product.hero.subheadline || product.hero.description)}</p>` : ""}
          ${renderList(product.hero?.benefitChips, "pdp-tag-list")}
        </div>
        ${
          imageSrc
            ? `<figure class="pdp-hero__media">
                <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(heroImageAlt(product))}" loading="eager" decoding="async" />
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

    const title = summary.title || "AI Summary";
    const body = summary.paragraph || summary.body;
    const bullets = summary.keyFacts || summary.bullets;

    return `
      <section class="pdp-answer" aria-labelledby="pdp-answer-title">
        <p class="pdp-answer__kicker">Quick Answer / AI Summary</p>
        <div>
          <h2 id="pdp-answer-title">${escapeHtml(title)}</h2>
          ${summary.oneSentence ? `<p class="pdp-lead">${escapeHtml(summary.oneSentence)}</p>` : ""}
          ${body ? `<p>${escapeHtml(body)}</p>` : ""}
          ${renderList(bullets, "pdp-answer__bullets")}
        </div>
      </section>
    `;
  }

  function renderBuyBox(product) {
    const variants = product.variants || [];
    const routineCta = product.identity.routineStep
      ? `${product.identity.routineStep} 루틴 보기`
      : `${productNumber(product)}번 루틴 보기`;

    if (!product.buyBox && !variants.length) {
      return "";
    }

    return `
      <section class="pdp-buy" aria-labelledby="pdp-buy-title">
        <div>
          <p class="pdp-section__eyebrow">Purchase / Variant / CTA</p>
          <h2 id="pdp-buy-title">구매와 용량 선택</h2>
          <p>${escapeHtml(product.buyBox?.status || "커머스 가격과 재고 데이터 연결 전입니다.")}</p>
        </div>
        ${
          variants.length
            ? `<div class="pdp-variant-list">${variants
                .map(
                  (variant) => `
                    <article class="pdp-variant">
                      <h3>${escapeHtml(variant.name || `${product.identity.nameEn || product.identity.nameKo} ${variant.volume || variant.size || ""}`.trim())}</h3>
                      <dl>
                        ${variant.sku ? `<div><dt>SKU</dt><dd>${escapeHtml(variant.sku)}</dd></div>` : ""}
                        ${variant.volume || variant.size ? `<div><dt>Volume</dt><dd>${escapeHtml(variant.volume || variant.size)}</dd></div>` : ""}
                      </dl>
                    </article>
                  `,
                )
                .join("")}</div>`
            : ""
        }
        <div class="pdp-cta-row">
          <a class="pdp-button pdp-button--primary" href="#how-to-use">${escapeHtml(routineCta)}</a>
          <a class="pdp-button pdp-button--ghost" href="#formula">성분 구조 확인하기</a>
        </div>
      </section>
    `;
  }

  function renderIdentity(identity) {
    if (!identity) {
      return "";
    }

    const rows = [
      ["번호", identity.productNumber || identity.sku],
      ["제품명", identity.nameKo],
      ["영문명", identity.nameEn],
      ["정식명", identity.canonicalName],
      ["라인", identity.line],
      ["루틴 단계", identity.routineStep],
      ["카테고리", identity.category],
      ["정의", identity.shortDefinition],
    ].filter(([, value]) => value);

    return renderSection(
      "identity",
      "Identity",
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
      "Problem Fit",
      "Problem-Solution Fit",
      `
        ${problemSolution.problem ? `<article><h3>Problem</h3><p>${escapeHtml(problemSolution.problem)}</p></article>` : ""}
        ${problemSolution.solution ? `<article><h3>Solution</h3><p>${escapeHtml(problemSolution.solution)}</p></article>` : ""}
        ${problemSolution.targetConcerns?.length ? `<h3>Target Concerns</h3>${renderList(problemSolution.targetConcerns, "pdp-tag-list")}` : ""}
        ${problemSolution.productApproach?.length ? `<h3>Product Approach</h3><ol class="pdp-ordered-list">${problemSolution.productApproach.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>` : ""}
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
      "Formula",
      "Formula Architecture",
      `
        ${formula.thesis || formula.headline ? `<p class="pdp-lead">${escapeHtml(formula.thesis || formula.headline)}</p>` : ""}
        ${formula.axes?.length ? `<div class="pdp-split-list">${formula.axes
          .map((axis) => `<article><h3>${escapeHtml(axis.title)}</h3><p>${escapeHtml(axis.role)}</p>${renderList(axis.ingredients, "pdp-tag-list")}${axis.explanation ? `<p>${escapeHtml(axis.explanation)}</p>` : ""}</article>`)
          .join("")}</div>` : ""}
        ${formula.principles?.length ? `<div class="pdp-split-list">${formula.principles
          .map((item) => `<article><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`)
          .join("")}</div>` : ""}
      `,
    );
  }

  function renderIngredients(ingredients) {
    if (!ingredients) {
      return "";
    }

    const items = Array.isArray(ingredients) ? ingredients : ingredients.items;
    const headline = Array.isArray(ingredients) ? "핵심 성분 구조" : ingredients.headline;
    const note = Array.isArray(ingredients) ? "" : ingredients.note;

    if (!items?.length && !note) {
      return "";
    }

    return renderSection(
      "ingredients",
      "Ingredients",
      "Ingredient Intelligence",
      `
        ${headline ? `<p class="pdp-lead">${escapeHtml(headline)}</p>` : ""}
        ${note ? `<p>${escapeHtml(note)}</p>` : ""}
        ${items?.length ? `<table class="pdp-table"><thead><tr><th>Ingredient</th><th>Role</th><th>Consumer Benefit</th></tr></thead><tbody>${items
          .map((item) => `<tr><th>${escapeHtml(item.nameKo || item.name)}${item.nameEn ? `<small>${escapeHtml(item.nameEn)}</small>` : ""}${item.concentration ? `<small>${escapeHtml(item.concentration)}</small>` : ""}</th><td>${escapeHtml(item.role)}</td><td>${escapeHtml(item.consumerBenefit || item.source || "")}</td></tr>`)
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
      "Texture",
      "Texture Profile",
      `<dl class="pdp-definition-list">
        ${texture.type ? `<div><dt>Type</dt><dd>${escapeHtml(texture.type)}</dd></div>` : ""}
        ${texture.finish ? `<div><dt>Finish</dt><dd>${escapeHtml(texture.finish)}</dd></div>` : ""}
        ${texture.absorption ? `<div><dt>Absorption</dt><dd>${escapeHtml(texture.absorption)}</dd></div>` : ""}
      </dl>${texture.sensoryCopy ? `<p>${escapeHtml(texture.sensoryCopy)}</p>` : ""}${renderList(texture.sensory, "pdp-tag-list")}`,
    );
  }

  function renderEvidence(evidence) {
    if (!evidence?.length) {
      return "";
    }

    return renderSection(
      "evidence",
      "Evidence",
      "Evidence / Clinical Data",
      `<div class="pdp-split-list">${evidence
        .map((item) => `<article><h3>${escapeHtml(item.title || item.metric)}</h3>${item.metric && item.title ? `<p class="pdp-lead">${escapeHtml(item.metric)}</p>` : ""}<p>${escapeHtml(item.summary || item.label || "")}</p><small>${escapeHtml(item.sourceNote || item.source || "")}</small></article>`)
        .join("")}</div>`,
    );
  }

  function renderHowToUse(howToUse) {
    if (!howToUse?.steps?.length) {
      return "";
    }

    return renderSection(
      "how-to-use",
      "Use",
      "How to Use",
      `<ol class="pdp-ordered-list">${howToUse.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>${
        howToUse.frequency ? `<p class="pdp-note">${escapeHtml(howToUse.frequency)}</p>` : ""
      }${renderList(howToUse.cautions, "pdp-tag-list")}${
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
      "Routine",
      "Routine Pairing",
      `<div class="pdp-split-list">${routines
        .map((routine) => `<article><h3>${escapeHtml(routine.title)}</h3>${routine.useCase ? `<p class="pdp-lead">${escapeHtml(routine.useCase)}</p>` : ""}${routine.products || routine.steps ? `<p>${escapeHtml((routine.products || routine.steps).join(" → "))}</p>` : ""}${renderList(routine.recommendedFor, "pdp-tag-list")}${routine.href ? `<a href="${escapeHtml(routine.href)}">루틴에서 보기</a>` : ""}</article>`)
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
      "Related",
      "Related Products",
      `<div class="pdp-split-list">${relatedProducts
        .map((item) => {
          const href = typeof item === "string" ? `/products/${item}/` : item.href;
          const slug = typeof item === "string" ? item : href.replace(/^\/products\//, "").replace(/\/$/, "");
          const sku = typeof item === "string" ? slug.split("-").pop() || slug : item.sku;
          const label = typeof item === "string" ? item : item.name;
          return `<a class="pdp-related-link" href="${escapeHtml(href)}"><span>${escapeHtml(sku)}</span><strong>${escapeHtml(label)}</strong></a>`;
        })
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
        ${renderList(claims.allowed, "pdp-tag-list")}
        <p>${escapeHtml(claims.disclaimer)}</p>
      </section>
    `;
  }

  function buildJsonLd(product) {
    const url = canonicalUrl(product);
    const imageUrl = absoluteUrl(product.hero?.primaryImage || product.hero?.image?.src || product.seo.ogImage);
    const variants = product.variants || [];
    const hasProductGroup = variants.length > 1;
    const graph = [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products/` },
          { "@type": "ListItem", position: 3, name: product.identity.nameKo, item: url },
        ],
      },
      ...(hasProductGroup ? [{
        "@type": "ProductGroup",
        "@id": `${url}#product-group`,
        name: productName(product),
        url,
        brand: { "@type": "Brand", name: "ERTY" },
        productGroupID: product.slug,
        variesBy: ["size", "volume"],
        hasVariant: variants.map((variant, index) => ({ "@id": `${url}#${variantKey(variant, index)}` })),
      }] : []),
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: productName(product),
        alternateName: product.identity.nameEn,
        sku: productNumber(product),
        category: product.identity.category,
        description: product.identity.shortDefinition,
        image: imageUrl,
        brand: { "@type": "Brand", name: "ERTY" },
        offers: variants.map((variant, index) => ({ "@id": `${url}#offer-${variantKey(variant, index)}` })),
      },
      ...variants.map((variant, index) => ({
        "@type": "Product",
        "@id": `${url}#${variantKey(variant, index)}`,
        name: variant.name || `${productName(product)} ${variant.volume || variant.size || ""}`.trim(),
        sku: variant.sku,
        size: variant.size || variant.volume,
        image: variant.image ? absoluteUrl(variant.image) : undefined,
        ...(hasProductGroup ? { isVariantOf: { "@id": `${url}#product-group` } } : {}),
      })),
      ...variants.map((variant, index) => ({
        "@type": "Offer",
        "@id": `${url}#offer-${variantKey(variant, index)}`,
        url,
        itemOffered: { "@id": `${url}#${variantKey(variant, index)}` },
      })),
    ];

    if (product.faq?.length) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${url}#faq`,
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
    const url = canonicalUrl(product);
    const imageUrl = absoluteUrl(product.seo.ogImage || product.hero?.primaryImage || product.hero?.image?.src);

    document.title = product.seo.title;
    ensureMeta('meta[name="description"]', "meta", {
      name: "description",
      content: product.seo.description,
    });
    ensureMeta('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: url,
    });
    ensureMeta('meta[property="og:type"]', "meta", { property: "og:type", content: "product" });
    ensureMeta('meta[property="og:title"]', "meta", { property: "og:title", content: product.seo.title });
    ensureMeta('meta[property="og:description"]', "meta", { property: "og:description", content: product.seo.description });
    ensureMeta('meta[property="og:url"]', "meta", { property: "og:url", content: url });
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
