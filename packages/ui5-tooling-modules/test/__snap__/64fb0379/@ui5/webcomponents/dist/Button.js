/*!
 * ${copyright}
 */
sap.ui.define(
  [
    "sap/ui/core/webc/WebComponent",
    "sap/ui/core/EnabledPropagator",
    "../../../@ui5/webcomponents",
    "../../../Button",
  ],
  function (WebComponentBaseClass, EnabledPropagator) {
    "use strict"

    const WrapperClass = WebComponentBaseClass.extend(
      "@ui5.webcomponents.dist.Button",
      {
        metadata: {
          namespace: "@ui5/webcomponents",
          qualifiedNamespace: "@ui5.webcomponents",
          tag: "ui5-button",
          interfaces: ["@ui5.webcomponents.IButton"],
          properties: {
            design: {
              type: "@ui5.webcomponents.ButtonDesign",
              mapping: "property",
              defaultValue: "Default",
            },
            enabled: {
              type: "boolean",
              defaultValue: "true",
              mapping: {
                type: "property",
                to: "disabled",
                formatter: "_mapEnabled",
              },
            },
            icon: {
              type: "string",
              mapping: "property",
            },
            endIcon: {
              type: "string",
              mapping: "property",
            },
            submits: {
              type: "boolean",
              mapping: "property",
              defaultValue: false,
            },
            tooltip: {
              type: "string",
              mapping: "property",
            },
            accessibleName: {
              type: "string",
              mapping: "property",
            },
            accessibilityAttributes: {
              type: "any",
              mapping: "property",
              defaultValue: "{}",
            },
            accessibleDescription: {
              type: "string",
              mapping: "property",
            },
            type: {
              type: "@ui5.webcomponents.ButtonType",
              mapping: "property",
              defaultValue: "Button",
            },
            accessibleRole: {
              type: "@ui5.webcomponents.ButtonAccessibleRole",
              mapping: "property",
              defaultValue: "Button",
            },
            text: {
              type: "string",
              mapping: "textContent",
            },
            width: {
              type: "sap.ui.core.CSSSize",
              mapping: "style",
            },
            height: {
              type: "sap.ui.core.CSSSize",
              mapping: "style",
            },
          },
          aggregations: {
            badge: {
              type: "@ui5.webcomponents.dist.ButtonBadge",
              multiple: true,
              slot: "badge",
            },
          },
          associations: {
            ariaLabelledBy: {
              type: "sap.ui.core.Control",
              multiple: true,
              mapping: {
                type: "property",
                to: "accessibleNameRef",
                formatter: "_getAriaLabelledByForRendering",
              },
            },
          },
          events: {
            click: {
              allowPreventDefault: true,
              enableEventBubbling: true,
              parameters: {
                originalEvent: {
                  type: "object",
                  types: [
                    {
                      dtsType: "Event",
                      ui5Type: "object",
                    },
                  ],
                  dtsParamDescription:
                    "Returns original event that comes from user's **click** interaction",
                },
                altKey: {
                  type: "boolean",
                  types: [
                    {
                      dtsType: "boolean",
                      ui5Type: "boolean",
                    },
                  ],
                  dtsParamDescription:
                    'Returns whether the "ALT" key was pressed when the event was triggered.',
                },
                ctrlKey: {
                  type: "boolean",
                  types: [
                    {
                      dtsType: "boolean",
                      ui5Type: "boolean",
                    },
                  ],
                  dtsParamDescription:
                    'Returns whether the "CTRL" key was pressed when the event was triggered.',
                },
                metaKey: {
                  type: "boolean",
                  types: [
                    {
                      dtsType: "boolean",
                      ui5Type: "boolean",
                    },
                  ],
                  dtsParamDescription:
                    'Returns whether the "META" key was pressed when the event was triggered.',
                },
                shiftKey: {
                  type: "boolean",
                  types: [
                    {
                      dtsType: "boolean",
                      ui5Type: "boolean",
                    },
                  ],
                  dtsParamDescription:
                    'Returns whether the "SHIFT" key was pressed when the event was triggered.',
                },
              },
            },
          },
          getters: [],
          methods: [],
          designtime: "@ui5/webcomponents/designtime/Button.designtime",
        },
      },
    )

    EnabledPropagator.call(WrapperClass.prototype)

    return WrapperClass
  },
)
