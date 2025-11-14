import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0 } from './server.mjs';
import { withAsyncContext, unref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useAsyncData, q as queryContent } from './query-PUowDtHk.mjs';
import '../_/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '../_/index.mjs';
import './preview-CzMU26dm.mjs';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: album } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `album-${slug}`,
      () => queryContent(`/albums/${slug}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(album)) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "album-page" }, _attrs))} data-v-61093127><div class="album-header" data-v-61093127><img${ssrRenderAttr("src", unref(album).cover)}${ssrRenderAttr("alt", unref(album).title)} class="album-cover" data-v-61093127><div class="album-info" data-v-61093127><h1 class="album-title" data-v-61093127>${ssrInterpolate(unref(album).title)} <span class="year" data-v-61093127>(${ssrInterpolate(unref(album).year)})</span></h1><p data-v-61093127> \u{1F3B7} Artista: `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/artists/${unref(album).artistSlug}`,
          class: "link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(album).artist)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(album).artist), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><p data-v-61093127> \u{1F4BF} Discogr\xE1fica: `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/labels/${unref(album).labelSlug}`,
          class: "link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(album).label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(album).label), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><p class="badge" data-v-61093127>${ssrInterpolate((unref(album).styles || []).join(", "))}</p><p class="description" data-v-61093127>${ssrInterpolate(unref(album).description)}</p></div></div><h2 class="tracks-title" data-v-61093127>Pistas</h2><ol class="tracklist" data-v-61093127><!--[-->`);
        ssrRenderList(unref(album).tracks, (t, i) => {
          _push(`<li data-v-61093127>${ssrInterpolate(i + 1)}. ${ssrInterpolate(t)}</li>`);
        });
        _push(`<!--]--></ol></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61093127"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-DGhmpCRn.mjs.map
