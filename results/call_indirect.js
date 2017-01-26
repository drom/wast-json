{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'proc'
          },
          expr: {
            kind: 'func',
            params: [],
            result: null,
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'out-i32'
          },
          expr: {
            kind: 'func',
            params: [],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'out-i64'
          },
          expr: {
            kind: 'func',
            params: [],
            result: {
              kind: 'result',
              type: 'i64'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'out-f32'
          },
          expr: {
            kind: 'func',
            params: [],
            result: {
              kind: 'result',
              type: 'f32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'out-f64'
          },
          expr: {
            kind: 'func',
            params: [],
            result: {
              kind: 'result',
              type: 'f64'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'over-i32'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i32'
              }]
            }],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'over-i64'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }],
            result: {
              kind: 'result',
              type: 'i64'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'over-f32'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'f32'
              }]
            }],
            result: {
              kind: 'result',
              type: 'f32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'over-f64'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'f64'
              }]
            }],
            result: {
              kind: 'result',
              type: 'f64'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'f32-i32'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [
                {
                  kind: 'item',
                  type: 'f32'
                },
                {
                  kind: 'item',
                  type: 'i32'
                }
              ]
            }],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'i32-i64'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [
                {
                  kind: 'item',
                  type: 'i32'
                },
                {
                  kind: 'item',
                  type: 'i64'
                }
              ]
            }],
            result: {
              kind: 'result',
              type: 'i64'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'f64-f32'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [
                {
                  kind: 'item',
                  type: 'f64'
                },
                {
                  kind: 'item',
                  type: 'f32'
                }
              ]
            }],
            result: {
              kind: 'result',
              type: 'f32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'i64-f64'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [
                {
                  kind: 'item',
                  type: 'i64'
                },
                {
                  kind: 'item',
                  type: 'f64'
                }
              ]
            }],
            result: {
              kind: 'result',
              type: 'f64'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'over-i32-duplicate'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i32'
              }]
            }],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'over-i64-duplicate'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i64'
              }]
            }],
            result: {
              kind: 'result',
              type: 'i64'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'over-f32-duplicate'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'f32'
              }]
            }],
            result: {
              kind: 'result',
              type: 'f32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'over-f64-duplicate'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'f64'
              }]
            }],
            result: {
              kind: 'result',
              type: 'f64'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'const-i32'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'out-i32'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '0x132'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'const-i64'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'out-i64'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i64',
            init: '0x164'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'const-f32'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'out-f32'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0xf32'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'const-f64'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'out-f64'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'f64',
            init: '0xf64'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'id-i32'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-i32'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'id-i64'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-i64'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'id-f32'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-f32'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'id-f64'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-f64'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32-i64'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i32-i64'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64-f64'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i64-f64'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32-i32'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f32-i32'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64-f32'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f64-f32'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 1,
              raw: '1'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'over-i32-duplicate'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-i32-duplicate'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'over-i64-duplicate'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-i64-duplicate'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'over-f32-duplicate'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-f32-duplicate'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'over-f64-duplicate'
          },
          expo: null,
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-f64-duplicate'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'get_local',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          }]
        },
        {
          kind: 'table',
          index: null,
          items: {
            kind: 'elem',
            items: [
              {
                kind: 'identifier',
                name: 'const-i32'
              },
              {
                kind: 'identifier',
                name: 'const-i64'
              },
              {
                kind: 'identifier',
                name: 'const-f32'
              },
              {
                kind: 'identifier',
                name: 'const-f64'
              },
              {
                kind: 'identifier',
                name: 'id-i32'
              },
              {
                kind: 'identifier',
                name: 'id-i64'
              },
              {
                kind: 'identifier',
                name: 'id-f32'
              },
              {
                kind: 'identifier',
                name: 'id-f64'
              },
              {
                kind: 'identifier',
                name: 'f32-i32'
              },
              {
                kind: 'identifier',
                name: 'i32-i64'
              },
              {
                kind: 'identifier',
                name: 'f64-f32'
              },
              {
                kind: 'identifier',
                name: 'i64-f64'
              },
              {
                kind: 'identifier',
                name: 'fac'
              },
              {
                kind: 'identifier',
                name: 'fib'
              },
              {
                kind: 'identifier',
                name: 'even'
              },
              {
                kind: 'identifier',
                name: 'odd'
              },
              {
                kind: 'identifier',
                name: 'runaway'
              },
              {
                kind: 'identifier',
                name: 'mutual-runaway1'
              },
              {
                kind: 'identifier',
                name: 'mutual-runaway2'
              },
              {
                kind: 'identifier',
                name: 'over-i32-duplicate'
              },
              {
                kind: 'identifier',
                name: 'over-i64-duplicate'
              },
              {
                kind: 'identifier',
                name: 'over-f32-duplicate'
              },
              {
                kind: 'identifier',
                name: 'over-f64-duplicate'
              }
            ]
          }
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-i32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'out-i32'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '0'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-i64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'out-i64'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '1'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-f32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'out-f32'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '2'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-f64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'out-f64'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '3'
            }]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-index'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'over-i64'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i64',
                init: '100'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '5'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-first-i32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'over-i32'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '32'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '4'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-first-i64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'over-i64'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i64',
                init: '64'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '5'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-first-f32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'over-f32'
            },
            exprs: [
              {
                kind: 'const',
                type: 'f32',
                init: '1.32'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '6'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-first-f64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'over-f64'
            },
            exprs: [
              {
                kind: 'const',
                type: 'f64',
                init: '1.64'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '7'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-second-i32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'f32-i32'
            },
            exprs: [
              {
                kind: 'const',
                type: 'f32',
                init: '32.1'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '32'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-second-i64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'i32-i64'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i32',
                init: '32'
              },
              {
                kind: 'const',
                type: 'i64',
                init: '64'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '9'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-second-f32'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'f64-f32'
            },
            exprs: [
              {
                kind: 'const',
                type: 'f64',
                init: '64'
              },
              {
                kind: 'const',
                type: 'f32',
                init: '32'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '10'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'type-second-f64'
          },
          imp: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'i64-f64'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i64',
                init: '64'
              },
              {
                kind: 'const',
                type: 'f64',
                init: '64.1'
              },
              {
                kind: 'const',
                type: 'i32',
                init: '11'
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'dispatch'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'over-i64'
            },
            exprs: [
              {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                }
              },
              {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'dispatch-structural'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'over-i64-duplicate'
            },
            exprs: [
              {
                kind: 'const',
                type: 'i64',
                init: '9'
              },
              {
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'fac'
          },
          expo: {
            kind: 'literal',
            value: 'fac'
          },
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-i64'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'if',
            type: 'i64',
            body: [
              {
                kind: 'unop',
                type: 'i64',
                operator: 'eqz',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              },
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
                kind: 'binop',
                type: 'i64',
                operator: 'mul',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                right: {
                  kind: 'call_indirect',
                  id: {
                    kind: 'identifier',
                    name: 'over-i64'
                  },
                  exprs: [
                    {
                      kind: 'binop',
                      type: 'i64',
                      operator: 'sub',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 0,
                          raw: '0'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i64',
                        init: '1'
                      }
                    },
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '12'
                    }
                  ]
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'fib'
          },
          expo: {
            kind: 'literal',
            value: 'fib'
          },
          imp: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'over-i64'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'if',
            type: 'i64',
            body: [
              {
                kind: 'relop',
                type: 'i64',
                operator: 'le_u',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                }
              },
              {
                kind: 'const',
                type: 'i64',
                init: '1'
              },
              {
                kind: 'binop',
                type: 'i64',
                operator: 'add',
                left: {
                  kind: 'call_indirect',
                  id: {
                    kind: 'identifier',
                    name: 'over-i64'
                  },
                  exprs: [
                    {
                      kind: 'binop',
                      type: 'i64',
                      operator: 'sub',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 0,
                          raw: '0'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i64',
                        init: '2'
                      }
                    },
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '13'
                    }
                  ]
                },
                right: {
                  kind: 'call_indirect',
                  id: {
                    kind: 'identifier',
                    name: 'over-i64'
                  },
                  exprs: [
                    {
                      kind: 'binop',
                      type: 'i64',
                      operator: 'sub',
                      left: {
                        kind: 'get_local',
                        id: {
                          kind: 'literal',
                          value: 0,
                          raw: '0'
                        }
                      },
                      right: {
                        kind: 'const',
                        type: 'i64',
                        init: '1'
                      }
                    },
                    {
                      kind: 'const',
                      type: 'i32',
                      init: '13'
                    }
                  ]
                }
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'even'
          },
          expo: {
            kind: 'literal',
            value: 'even'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            type: 'i32',
            body: [
              {
                kind: 'unop',
                type: 'i32',
                operator: 'eqz',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '44'
              },
              {
                kind: 'call_indirect',
                id: {
                  kind: 'identifier',
                  name: 'over-i32'
                },
                exprs: [
                  {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'sub',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '15'
                  }
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'odd'
          },
          expo: {
            kind: 'literal',
            value: 'odd'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'if',
            type: 'i32',
            body: [
              {
                kind: 'unop',
                type: 'i32',
                operator: 'eqz',
                expr: {
                  kind: 'get_local',
                  id: {
                    kind: 'literal',
                    value: 0,
                    raw: '0'
                  }
                }
              },
              {
                kind: 'const',
                type: 'i32',
                init: '99'
              },
              {
                kind: 'call_indirect',
                id: {
                  kind: 'identifier',
                  name: 'over-i32'
                },
                exprs: [
                  {
                    kind: 'binop',
                    type: 'i32',
                    operator: 'sub',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'literal',
                        value: 0,
                        raw: '0'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '1'
                    }
                  },
                  {
                    kind: 'const',
                    type: 'i32',
                    init: '14'
                  }
                ]
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'runaway'
          },
          expo: {
            kind: 'literal',
            value: 'runaway'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'proc'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '16'
            }]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'mutual-runaway1'
          },
          expo: {
            kind: 'literal',
            value: 'mutual-runaway'
          },
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'proc'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '18'
            }]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'mutual-runaway2'
          },
          expo: null,
          imp: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              name: 'proc'
            },
            exprs: [{
              kind: 'const',
              type: 'i32',
              init: '17'
            }]
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-i32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x132'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-i64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x164'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-f32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0xf32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-f64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0xf64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-index',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '100'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-first-i32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-first-i64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-first-f32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-first-f64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-second-i32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-second-i64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '64'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-second-f32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '32'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'type-second-f64',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '64.1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '5'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '12'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '13'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '5'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '20'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '15'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '23'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'undefined element'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '-1'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'undefined element'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'dispatch',
        body: [
          {
            kind: 'const',
            type: 'i32',
            init: '1213432423'
          },
          {
            kind: 'const',
            type: 'i64',
            init: '2'
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'undefined element'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'dispatch-structural',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'dispatch-structural',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '9'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'dispatch-structural',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '12'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '362880'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'dispatch-structural',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '20'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '9'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'dispatch-structural',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '11'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'dispatch-structural',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '22'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '120'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fac',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '25'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '7034535277573963776'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '8'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'fib',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '20'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '10946'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '100'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'even',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '77'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '200'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '99'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'odd',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '77'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '44'
      }
    },
    {
      kind: 'assert_exhaustion',
      module: {
        kind: 'invoke',
        name: 'runaway',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'call stack exhausted'
      }
    },
    {
      kind: 'assert_exhaustion',
      module: {
        kind: 'invoke',
        name: 'mutual-runaway',
        body: []
      },
      failure: {
        kind: 'literal',
        value: 'call stack exhausted'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'no-table'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '0'
              }]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown table'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-void-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: {
                kind: 'call_indirect',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                exprs: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [],
              result: {
                kind: 'result',
                type: 'i64'
              },
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-num-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'unop',
              type: 'i32',
              operator: 'eqz',
              expr: {
                kind: 'call_indirect',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                exprs: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [{
                kind: 'param',
                items: [{
                  kind: 'item',
                  type: 'i32'
                }]
              }],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'arity-0-vs-1'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '0'
              }]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [{
                kind: 'param',
                items: [
                  {
                    kind: 'item',
                    type: 'f64'
                  },
                  {
                    kind: 'item',
                    type: 'i32'
                  }
                ]
              }],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'arity-0-vs-2'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '0'
              }]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'arity-1-vs-0'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'arity-2-vs-0'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'f64',
                  init: '2'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [{
                kind: 'param',
                items: [{
                  kind: 'item',
                  type: 'i32'
                }]
              }],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-func-void-vs-i32'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {kind: 'nop'}
              ]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [{
                kind: 'param',
                items: [{
                  kind: 'item',
                  type: 'i32'
                }]
              }],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-func-num-vs-i32'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'const',
                  type: 'i64',
                  init: '1'
                }
              ]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [{
                kind: 'param',
                items: [
                  {
                    kind: 'item',
                    type: 'i32'
                  },
                  {
                    kind: 'item',
                    type: 'i32'
                  }
                ]
              }],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-first-void-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [
                {kind: 'nop'},
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [{
                kind: 'param',
                items: [
                  {
                    kind: 'item',
                    type: 'i32'
                  },
                  {
                    kind: 'item',
                    type: 'i32'
                  }
                ]
              }],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-second-void-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {kind: 'nop'},
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [{
                kind: 'param',
                items: [
                  {
                    kind: 'item',
                    type: 'i32'
                  },
                  {
                    kind: 'item',
                    type: 'f64'
                  }
                ]
              }],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-first-num-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'f64',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'type',
            id: null,
            expr: {
              kind: 'func',
              params: [{
                kind: 'param',
                items: [
                  {
                    kind: 'item',
                    type: 'f64'
                  },
                  {
                    kind: 'item',
                    type: 'i32'
                  }
                ]
              }],
              result: null,
              local: [],
              body: []
            }
          },
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'type-second-num-vs-num'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'f64',
                  init: '1'
                },
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }
              ]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'type mismatch'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'unbound-type'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '0'
              }]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown type'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'table',
            index: '0',
            items: null
          },
          {
            kind: 'func',
            id: {
              kind: 'identifier',
              name: 'large-type'
            },
            expo: null,
            imp: null,
            type: null,
            params: [],
            result: null,
            local: [],
            body: [{
              kind: 'call_indirect',
              id: {
                kind: 'literal',
                value: 1012321300,
                raw: '1012321300'
              },
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '0'
              }]
            }]
          }
        ]
      },
      failure: {
        kind: 'literal',
        value: 'unknown type'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'table',
          index: null,
          items: {
            kind: 'elem',
            items: [
              {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            ]
          }
        }]
      },
      failure: {
        kind: 'literal',
        value: 'unknown function 0'
      }
    }
  ]
}
