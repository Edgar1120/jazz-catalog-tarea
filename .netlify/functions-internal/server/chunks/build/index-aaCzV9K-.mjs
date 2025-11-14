import { _ as __nuxt_component_1 } from './Card-BP9ZdKMt.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    const { data: artists } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("home-artists", () => {
      return queryContent("/artists").only(["_path", "name", "styles", "image", "country", "years_active"]).sort({ name: 1 }).find();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-0370de5e><h1 class="page-title" data-v-0370de5e>Cat\xE1logo de Jazz</h1><p class="page-subtitle" data-v-0370de5e>Explora artistas, sus \xE1lbumes y sellos discogr\xE1ficos.</p><div class="artists-grid" data-v-0370de5e><!--[-->`);
      ssrRenderList(unref(artists), (a) => {
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
              _push2(`<p class="artist-meta" data-v-0370de5e${_scopeId}>${ssrInterpolate(a.country)} \u2022 Activo(s): ${ssrInterpolate(a.years_active)}</p>`);
            } else {
              return [
                createVNode("p", { class: "artist-meta" }, toDisplayString(a.country) + " \u2022 Activo(s): " + toDisplayString(a.years_active), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0370de5e"]]);

export { index as default };
//# sourceMappingURL=index-aaCzV9K-.mjs.map
