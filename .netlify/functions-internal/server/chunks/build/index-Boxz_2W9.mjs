import { _ as __nuxt_component_1 } from './Card-BP9ZdKMt.mjs';
import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: albums } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("albums", () => {
      return queryContent("/albums").sort({ year: 1 }).find();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "albums-section" }, _attrs))} data-v-bc4583c3><h1 class="section-title" data-v-bc4583c3>\xC1lbumes</h1><div class="albums-grid" data-v-bc4583c3><!--[-->`);
      ssrRenderList(unref(albums), (al) => {
        var _a;
        _push(ssrRenderComponent(_component_Card, {
          key: al._path,
          to: al._path,
          title: al.title,
          subtitle: (_a = al.year) == null ? void 0 : _a.toString(),
          image: al.cover
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="info" data-v-bc4583c3${_scopeId}> \u{1F3B7} Artista: `);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/artists/${al.artistSlug}`,
                class: "link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(al.artist)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(al.artist), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</p><p class="info" data-v-bc4583c3${_scopeId}> \u{1F4BF} Discogr\xE1fica: `);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/labels/${al.labelSlug}`,
                class: "link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(al.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(al.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</p>`);
            } else {
              return [
                createVNode("p", { class: "info" }, [
                  createTextVNode(" \u{1F3B7} Artista: "),
                  createVNode(_component_NuxtLink, {
                    to: `/artists/${al.artistSlug}`,
                    class: "link"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(al.artist), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ]),
                createVNode("p", { class: "info" }, [
                  createTextVNode(" \u{1F4BF} Discogr\xE1fica: "),
                  createVNode(_component_NuxtLink, {
                    to: `/labels/${al.labelSlug}`,
                    class: "link"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(al.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc4583c3"]]);

export { index as default };
//# sourceMappingURL=index-Boxz_2W9.mjs.map
