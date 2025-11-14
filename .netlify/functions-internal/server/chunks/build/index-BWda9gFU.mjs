import { _ as __nuxt_component_1 } from './Card-BP9ZdKMt.mjs';
import { ref, withAsyncContext, computed, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData, q as queryContent } from './query-PUowDtHk.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import '../_/index.mjs';
import './preview-CzMU26dm.mjs';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const q = ref("");
    const { data: artists } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("artists", () => {
      return queryContent("/artists").sort({ name: 1 }).find();
    })), __temp = await __temp, __restore(), __temp);
    const filtered = computed(() => {
      if (!artists.value) return [];
      if (!q.value) return artists.value;
      const t = q.value.toLowerCase();
      return artists.value.filter(
        (a) => a.name.toLowerCase().includes(t) || (a.country || "").toLowerCase().includes(t) || (a.styles || []).join(" ").toLowerCase().includes(t)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "artists-page" }, _attrs))} data-v-c9c5702e><h1 class="page-title" data-v-c9c5702e>Artistas</h1><input${ssrRenderAttr("value", q.value)} class="search" placeholder="Buscar artista, estilo o pa\xEDs..." data-v-c9c5702e><div class="artists-grid" data-v-c9c5702e><!--[-->`);
      ssrRenderList(filtered.value, (a) => {
        var _a;
        _push(ssrRenderComponent(_component_Card, {
          key: a._path,
          to: a._path,
          title: a.name,
          subtitle: (_a = a.styles) == null ? void 0 : _a.join(", "),
          image: a.image
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="artist-meta" data-v-c9c5702e${_scopeId}>${ssrInterpolate(a.country)} \u2022 ${ssrInterpolate(a.years_active)}</p>`);
            } else {
              return [
                createVNode("p", { class: "artist-meta" }, toDisplayString(a.country) + " \u2022 " + toDisplayString(a.years_active), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artists/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c9c5702e"]]);

export { index as default };
//# sourceMappingURL=index-BWda9gFU.mjs.map
