import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    to: {},
    title: {},
    subtitle: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-bf1bd303>`);
      if (_ctx.image) {
        _push(`<img${ssrRenderAttr("src", _ctx.image)}${ssrRenderAttr("alt", _ctx.title)} class="thumb" data-v-bf1bd303>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 data-v-bf1bd303>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: _ctx.to,
        class: "title-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h3>`);
      if (_ctx.subtitle) {
        _push(`<p class="badge" data-v-bf1bd303>${ssrInterpolate(_ctx.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf1bd303"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Card-BP9ZdKMt.mjs.map
