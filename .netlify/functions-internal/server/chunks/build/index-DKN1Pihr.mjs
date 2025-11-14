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
    const { data: labels } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("labels", () => {
      return queryContent("/labels").sort({ name: 1 }).find();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "labels-page" }, _attrs))} data-v-1979f1ae><h1 class="page-title" data-v-1979f1ae>Discogr\xE1ficas</h1><div class="labels-grid" data-v-1979f1ae><!--[-->`);
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
              _push2(`<p class="label-meta" data-v-1979f1ae${_scopeId}>Fundada: ${ssrInterpolate(lb.founded)}</p>`);
            } else {
              return [
                createVNode("p", { class: "label-meta" }, "Fundada: " + toDisplayString(lb.founded), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/labels/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1979f1ae"]]);

export { index as default };
//# sourceMappingURL=index-DKN1Pihr.mjs.map
