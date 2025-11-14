import _sfc_main$1 from './ContentRenderer-gz8TCBQL.mjs';
import { _ as __nuxt_component_1 } from './Card-BP9ZdKMt.mjs';
import { _ as _export_sfc, u as useRoute, a as __nuxt_component_0 } from './server.mjs';
import { withAsyncContext, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useAsyncData, q as queryContent } from './query-PUowDtHk.mjs';
import './ContentRendererMarkdown-BMEa74xP.mjs';
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
import 'property-information';
import './node-yHY0X6Y7.mjs';
import './preview-CzMU26dm.mjs';
import 'vue-router';
import '../_/index.mjs';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: label } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `label-${slug}`,
      () => queryContent(`/labels/${slug}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const { data: albums } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `label-albums-${slug}`,
      () => queryContent("/albums").where({ labelSlug: slug }).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      const _component_Card = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(label)) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "label-page" }, _attrs))} data-v-ab4556eb><div class="label-header" data-v-ab4556eb><img${ssrRenderAttr("src", unref(label).logo)}${ssrRenderAttr("alt", unref(label).name)} class="label-logo" data-v-ab4556eb><div class="label-info" data-v-ab4556eb><h1 class="label-name" data-v-ab4556eb>${ssrInterpolate(unref(label).name)}</h1><p class="badge" data-v-ab4556eb>${ssrInterpolate(unref(label).country)}</p><p data-v-ab4556eb>Fundada: <strong data-v-ab4556eb>${ssrInterpolate(unref(label).founded)}</strong></p>`);
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(label),
          class: "label-bio"
        }, null, _parent));
        _push(`</div></div><h2 class="section-title" data-v-ab4556eb>\xC1lbumes del sello</h2><div class="albums-grid" data-v-ab4556eb><!--[-->`);
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
                _push2(`<p data-v-ab4556eb${_scopeId}>\u{1F3B7} Artista: `);
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
                _push2(`</p>`);
              } else {
                return [
                  createVNode("p", null, [
                    createTextVNode("\u{1F3B7} Artista: "),
                    createVNode(_component_NuxtLink, {
                      to: `/artists/${al.artistSlug}`,
                      class: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(al.artist), 1)
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
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/labels/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab4556eb"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-B1h_CoSw.mjs.map
