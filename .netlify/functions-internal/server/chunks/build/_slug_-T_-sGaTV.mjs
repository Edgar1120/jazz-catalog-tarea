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
    const { data: artist } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `artist-${slug}`,
      () => queryContent(`/artists/${slug}`).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const { data: albums } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `artist-albums-${slug}`,
      () => queryContent("/albums").where({ artistSlug: slug }).sort({ year: 1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const { data: labels } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`artist-labels-${slug}`, async () => {
      var _a, _b;
      if (!((_b = (_a = artist.value) == null ? void 0 : _a.labelRefs) == null ? void 0 : _b.length)) return [];
      const refs = artist.value.labelRefs.map((r) => `/labels/${r}`);
      return await queryContent().where({ _path: { $in: refs } }).find();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ContentRenderer = _sfc_main$1;
      const _component_Card = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(artist)) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "artist-page" }, _attrs))} data-v-208b5c60><div class="artist-header" data-v-208b5c60><img${ssrRenderAttr("src", unref(artist).image)}${ssrRenderAttr("alt", unref(artist).name)} class="artist-photo" data-v-208b5c60><div class="artist-info" data-v-208b5c60><h1 class="artist-name" data-v-208b5c60>${ssrInterpolate(unref(artist).name)}</h1><p class="badge" data-v-208b5c60>${ssrInterpolate((_a = unref(artist).styles) == null ? void 0 : _a.join(", "))}</p><p data-v-208b5c60>Pa\xEDs: <strong data-v-208b5c60>${ssrInterpolate(unref(artist).country)}</strong></p><p data-v-208b5c60>A\xF1os activo(s): <strong data-v-208b5c60>${ssrInterpolate(unref(artist).years_active)}</strong></p>`);
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(artist),
          class: "artist-bio"
        }, null, _parent));
        _push(`</div></div><h2 class="section-title" data-v-208b5c60>\xC1lbumes</h2><div class="cards-grid" data-v-208b5c60><!--[-->`);
        ssrRenderList(unref(albums), (al) => {
          var _a2;
          _push(ssrRenderComponent(_component_Card, {
            key: al._path,
            to: al._path,
            title: al.title,
            subtitle: (_a2 = al.year) == null ? void 0 : _a2.toString(),
            image: al.cover
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p data-v-208b5c60${_scopeId}>Discogr\xE1fica: `);
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
                  createVNode("p", null, [
                    createTextVNode("Discogr\xE1fica: "),
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
        _push(`<!--]--></div><h2 class="section-title" data-v-208b5c60>Discogr\xE1ficas relacionadas</h2><div class="cards-grid" data-v-208b5c60><!--[-->`);
        ssrRenderList(unref(labels), (lb) => {
          _push(ssrRenderComponent(_component_Card, {
            key: lb._path,
            to: lb._path,
            title: lb.name,
            subtitle: lb.country,
            image: lb.logo
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p data-v-208b5c60${_scopeId}>Fundada: ${ssrInterpolate(lb.founded)}</p>`);
              } else {
                return [
                  createVNode("p", null, "Fundada: " + toDisplayString(lb.founded), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/artists/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-208b5c60"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-T_-sGaTV.mjs.map
