{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.extend_s_i32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
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
            kind: 'cvtop',
            type: 'i64',
            type1: 'i32',
            operator: 'extend_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.extend_u_i32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
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
            kind: 'cvtop',
            type: 'i64',
            type1: 'i32',
            operator: 'extend_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.wrap_i64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'i64',
            operator: 'wrap',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.trunc_s_f32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.trunc_u_f32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.trunc_s_f64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f64',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.trunc_u_f64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f64',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.trunc_s_f32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f32',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.trunc_u_f32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f32',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.trunc_s_f64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.trunc_u_f64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'trunc_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.convert_s_i32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'convert_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.convert_s_i64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i64',
            operator: 'convert_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.convert_s_i32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i32',
            operator: 'convert_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.convert_s_i64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'convert_s',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.convert_u_i32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'convert_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.convert_u_i64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i64',
            operator: 'convert_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.convert_u_i32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i32',
            operator: 'convert_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.convert_u_i64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'convert_u',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.promote_f32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'f32',
            operator: 'promote',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.demote_f64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'f64',
            operator: 'demote',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f32.reinterpret_i32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'reinterpret',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'f64.reinterpret_i64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'reinterpret',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i32.reinterpret_f32'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i32',
            type1: 'f32',
            operator: 'reinterpret',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expos: [{
            kind: 'literal',
            value: 'i64.reinterpret_f64'
          }],
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'x'
            },
            items: [{
              kind: 'item',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'i64',
            type1: 'f64',
            operator: 'reinterpret',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '10000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '10000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-10000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-10000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x7fffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x000000007fffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffff80000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '10000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '10000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-10000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x00000000ffffd8f0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x7fffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x000000007fffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.extend_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x0000000080000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-100000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-100000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x80000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xffffffff7fffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xffffffff00000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x00000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfffffffeffffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xffffffff00000001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x00000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1311768467463790320'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x9abcdef0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x00000000ffffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x0000000100000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x00000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.wrap_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x0000000100000001'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x00000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.19999ap+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.19999ap+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.9'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-2.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '2147483520.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2147483520'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-2147483648.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '2147483648.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-2147483904.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x200000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.19999ap+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.9'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '2.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '2147483648'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4294967040.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-256'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.ccccccp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4294967296.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x200000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.199999999999ap+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.199999999999ap+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.9'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-2.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '2147483647.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2147483647'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-2147483648.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '2147483648.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-2147483649.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x4000000000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.199999999999ap+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.9'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '2.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '2147483648'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '4294967295.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.ccccccccccccdp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffffffffffp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1e8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '100000000'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '4294967296.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1e16'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1e30'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '9223372036854775808'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x4000000000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.0'
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
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.19999ap+0'
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
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
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
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.19999ap+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.9'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-2.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4294967296'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4294967296'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-4294967296'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-4294967296'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '9223371487098961920.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '9223371487098961920'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-9223372036854775808.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775808'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '9223372036854775808.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-9223373136366403584.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x200000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.0'
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
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.19999ap+0'
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
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.5'
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
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4294967296'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4294967296'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '18446742974197923840.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1099511627776'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.ccccccp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '18446744073709551616.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x200000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.0'
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
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.199999999999ap+0'
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
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
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
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.199999999999ap+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.9'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-2.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '4294967296'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4294967296'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-4294967296'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-4294967296'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '9223372036854774784.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '9223372036854774784'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-9223372036854775808.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775808'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '9223372036854775808.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-9223372036854777856.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_s_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x4000000000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.0'
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
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.199999999999ap+0'
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
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.5'
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
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '4294967295'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '4294967296'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x100000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '18446744073709549568.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-2048'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.ccccccccccccdp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffffffffffp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1e8'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '100000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1e16'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '10000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '9223372036854775808'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775808'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '18446744073709551616.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.0'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-inf'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'integer overflow'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.trunc_u_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x4000000000000'
        }]
      },
      failure: {
        kind: 'literal',
        value: 'invalid conversion to integer'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2147483647'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-2147483648'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1234567890'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.26580cp+30'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '16777217'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '16777216.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-16777217'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-16777216.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '16777219'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '16777220.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-16777219'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-16777220.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '9223372036854775807'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-9223372036854775808'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-9223372036854775808'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '314159265358979'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.1db9e8p+48'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '16777217'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '16777216.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-16777217'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-16777216.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '16777219'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '16777220.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-16777219'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-16777220.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2147483647'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '2147483647'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-2147483648'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '987654321'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '987654321'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '9223372036854775807'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-9223372036854775808'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-9223372036854775808'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '4669201609102990'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '4669201609102990'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '9007199254740993'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '9007199254740992'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-9007199254740993'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-9007199254740992'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '9007199254740995'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '9007199254740996'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_s_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-9007199254740995'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-9007199254740996'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2147483647'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-2147483648'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x12345678'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.234568p+28'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '4294967296.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000080'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000000p+31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000081'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000082'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffffe80'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffcp+31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffffe81'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xfffffe82'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+31'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '16777217'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '16777216.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '16777219'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '16777220.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '9223372036854775807'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-9223372036854775808'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '9223372036854775808'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xffffffffffffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '18446744073709551616.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '16777217'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '16777216.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '16777219'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '16777220.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2147483647'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '2147483647'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-2147483648'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '4294967295.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '9223372036854775807'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-9223372036854775808'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '9223372036854775808'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xffffffffffffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '18446744073709551616.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000400'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000000p+63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000401'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p+63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000402'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.0000000000001p+63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfffffffffffff400'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.ffffffffffffep+63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfffffffffffff401'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfffffffffffff402'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+63'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '9007199254740993'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '9007199254740992'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.convert_u_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '9007199254740995'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '9007199254740996'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-119'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1p-119'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.8f867ep+125'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '6.6382536710104395e+37'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-inf'
      }
    },
    {
      kind: 'assert_return_canonical_nan',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      }
    },
    {
      kind: 'assert_return_arithmetic_nan',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      }
    },
    {
      kind: 'assert_return_canonical_nan',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      }
    },
    {
      kind: 'assert_return_arithmetic_nan',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x200000'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffe0000000p-127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffe0000000p-127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-126'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffdfffffffp-127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffdfffffffp-127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffcp-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffd0000000p+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffcp+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffd0000000p+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffcp+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffd0000001p+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffd0000001p+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffefffffffp+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffefffffffp+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.fffffep+127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.ffffffp+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.ffffffp+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p-119'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-119'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.8f867ep+125'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.8f867ep+125'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000000000001p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000010000000p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000000p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000010000001p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.000002fffffffp+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000030000000p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000004p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000050000000p+0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000004p+0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000010000000p+24'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.0p+24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000010000001p+24'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.000002fffffffp+24'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000002p+24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000030000000p+24'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.000004p+24'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.4eae4f7024c7p+108'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.4eae5p+108'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.a12e71e358685p-113'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.a12e72p-113'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.cb98354d521ffp-127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.cb9834p-127'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.6972b30cfb562p+1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.6972b4p+1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.bedbe4819d4c4p+112'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1.bedbe4p+112'
      }
    },
    {
      kind: 'assert_return_canonical_nan',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      }
    },
    {
      kind: 'assert_return_arithmetic_nan',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      }
    },
    {
      kind: 'assert_return_canonical_nan',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      }
    },
    {
      kind: 'assert_return_arithmetic_nan',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x4000000000000'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0p-150'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.0p-150'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.0000000000001p-150'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.0000000000001p-150'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x80000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x7fffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '123456789'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.b79a2ap-113'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-2147483647'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x1p-149'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x7f800000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xff800000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x7fc00000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffc00000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x7fa00000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xffa00000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x200000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0xfffffffffffff'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x8000000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '1234567890'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x0.00000499602d2p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-9223372036854775807'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x0.0000000000001p-1022'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7ff0000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfff0000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-inf'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7ff8000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfff8000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-nan'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7ff4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xfff4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x7fffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p-149'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x80000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1065353216'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '3.1415926'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1078530010'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2139095039'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1.fffffep+127'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-8388609'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7f800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xff800000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffc00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x7fa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32.reinterpret_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x200000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xffa00000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x0.0000000000001p-1022'
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
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0xfffffffffffff'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x0.0000000000001p-1022'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x8000000000000001'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '1.0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4607182418800017408'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '3.14159265358979'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4614256656552045841'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp+1023'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '9218868437227405311'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1.fffffffffffffp+1023'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-4503599627370497'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff0000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-inf'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfff0000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-nan'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfff8000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x7ff4000000000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64.reinterpret_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x4000000000000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xfff4000000000000'
      }
    }
  ]
}
