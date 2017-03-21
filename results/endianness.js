{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: [
              [' '],
              '1'
            ]
          },
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i16_store_little'
          },
          expo: null,
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'address',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'value',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'address'
                }
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'value'
                }
              }
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'binop',
                type: 'i32',
                operator: 'add',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'address'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '1'
                }
              },
              data: {
                kind: 'binop',
                type: 'i32',
                operator: 'shr_u',
                left: {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'value'
                  }
                },
                right: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_store_little'
          },
          expo: null,
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'address',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'value',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i16_store_little'
              },
              exprs: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'address'
                  }
                },
                {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'value'
                  }
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i16_store_little'
              },
              exprs: [
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'address'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }
                },
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'shr_u',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'value'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '16'
                  }
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_store_little'
          },
          expo: null,
          imp: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'address',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'value',
                type: 'i64'
              }]
            }
          ],
          result: null,
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i32_store_little'
              },
              exprs: [
                {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'address'
                  }
                },
                {
                  kind: 'cvtop',
                  type: 'i32',
                  type1: 'i64',
                  operator: 'wrap',
                  expr: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'value'
                    }
                  }
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i32_store_little'
              },
              exprs: [
                {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'address'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '4'
                  }
                },
                {
                  kind: 'cvtop',
                  type: 'i32',
                  type1: 'i64',
                  operator: 'wrap',
                  expr: {
                    kind: 'binop',
                    type: 'i64',
                    operator: 'shr_u',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'value'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i64',
                      init: '32'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i16_load_little'
          },
          expo: null,
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'address',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'or',
            left: {
              kind: 'load',
              type: 'i32',
              size: 8,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'address'
                }
              }
            },
            right: {
              kind: 'binop',
              type: 'i32',
              operator: 'shl',
              left: {
                kind: 'load',
                type: 'i32',
                size: 8,
                sign: false,
                offset: 0,
                align: 0,
                expr: {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'address'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '1'
                  }
                }
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '8'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_load_little'
          },
          expo: null,
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'address',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'or',
            left: {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i16_load_little'
              },
              exprs: [{
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'address'
                }
              }]
            },
            right: {
              kind: 'binop',
              type: 'i32',
              operator: 'shl',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i16_load_little'
                },
                exprs: [{
                  kind: 'binop',
                  type: 'i32',
                  operator: 'add',
                  left: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'address'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '2'
                  }
                }]
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '16'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_load_little'
          },
          expo: null,
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'address',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i64',
            operator: 'or',
            left: {
              kind: 'cvtop',
              type: 'i64',
              type1: 'i32',
              operator: 'extend_u',
              expr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_load_little'
                },
                exprs: [{
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'address'
                  }
                }]
              }
            },
            right: {
              kind: 'binop',
              type: 'i64',
              operator: 'shl',
              left: {
                kind: 'cvtop',
                type: 'i64',
                type1: 'i32',
                operator: 'extend_u',
                expr: {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_load_little'
                  },
                  exprs: [{
                    kind: 'binop',
                    type: 'i32',
                    operator: 'add',
                    left: {
                      kind: 'get_local',
                      id: {
                        kind: 'identifier',
                        name: 'address'
                      }
                    },
                    right: {
                      kind: 'const',
                      type: 'i32',
                      init: '4'
                    }
                  }]
                }
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '32'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i32_load16_s'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i16_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'value'
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'i32',
              size: 16,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i32_load16_u'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i16_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'value'
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'i32',
              size: 16,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i32_load'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i32_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'value'
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'i32',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64_load16_s'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i16_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'cvtop',
                  type: 'i32',
                  type1: 'i64',
                  operator: 'wrap',
                  expr: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'value'
                    }
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'i64',
              size: 16,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64_load16_u'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i16_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'cvtop',
                  type: 'i32',
                  type1: 'i64',
                  operator: 'wrap',
                  expr: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'value'
                    }
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'i64',
              size: 16,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64_load32_s'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i32_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'cvtop',
                  type: 'i32',
                  type1: 'i64',
                  operator: 'wrap',
                  expr: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'value'
                    }
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'i64',
              size: 32,
              sign: true,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64_load32_u'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i32_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'cvtop',
                  type: 'i32',
                  type1: 'i64',
                  operator: 'wrap',
                  expr: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'value'
                    }
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'i64',
              size: 32,
              sign: false,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64_load'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i64_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'get_local',
                  id: {
                    kind: 'identifier',
                    name: 'value'
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'f32_load'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i32_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'cvtop',
                  type: 'i32',
                  type1: 'f32',
                  operator: 'reinterpret',
                  expr: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'value'
                    }
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'f32',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'f64_load'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i64_store_little'
              },
              exprs: [
                {
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                },
                {
                  kind: 'cvtop',
                  type: 'i64',
                  type1: 'f64',
                  operator: 'reinterpret',
                  expr: {
                    kind: 'get_local',
                    id: {
                      kind: 'identifier',
                      name: 'value'
                    }
                  }
                }
              ]
            },
            {
              kind: 'load',
              type: 'f64',
              size: null,
              sign: null,
              offset: 0,
              align: 0,
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i32_store16'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'value'
                }
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i16_load_little'
              },
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '0'
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i32_store'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'value'
                }
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i32_load_little'
              },
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '0'
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64_store16'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'value'
                }
              }
            },
            {
              kind: 'cvtop',
              type: 'i64',
              type1: 'i32',
              operator: 'extend_u',
              expr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i16_load_little'
                },
                exprs: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64_store32'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: 32,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'value'
                }
              }
            },
            {
              kind: 'cvtop',
              type: 'i64',
              type1: 'i32',
              operator: 'extend_u',
              expr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_load_little'
                },
                exprs: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'i64_store'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i64',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'value'
                }
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i64_load_little'
              },
              exprs: [{
                kind: 'const',
                type: 'i32',
                init: '0'
              }]
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'f32_store'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'f32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'value'
                }
              }
            },
            {
              kind: 'cvtop',
              type: 'f32',
              type1: 'i32',
              operator: 'reinterpret',
              expr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_load_little'
                },
                exprs: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
              }
            }
          ]
        },
        {
          kind: 'func',
          id: null,
          expo: {
            kind: 'literal',
            value: 'f64_store'
          },
          imp: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'value',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [
            {
              kind: 'store',
              type: 'f64',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              },
              data: {
                kind: 'get_local',
                id: {
                  kind: 'identifier',
                  name: 'value'
                }
              }
            },
            {
              kind: 'cvtop',
              type: 'f64',
              type1: 'i64',
              operator: 'reinterpret',
              expr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_load_little'
                },
                exprs: [{
                  kind: 'const',
                  type: 'i32',
                  init: '0'
                }]
              }
            }
          ]
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
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
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-4242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '42'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x3210'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x3210'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xFFFF'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '61294'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '42'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xCAFE'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xCAFE'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load',
        body: [{
          kind: 'const',
          type: 'i32',
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
        name: 'i32_load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-42424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_load',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xABAD1DEA'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xABAD1DEA'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
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
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-4242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '42'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x3210'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x3210'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xFFFF'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '61294'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '42'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xCAFE'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xCAFE'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
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
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-42424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '42424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x12345678'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0x12345678'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xFFFFFFFF'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4252543054'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '42424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xABAD1DEA'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xABAD1DEA'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load',
        body: [{
          kind: 'const',
          type: 'i64',
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
        name: 'i64_load',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-42424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xABAD1DEA'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xABAD1DEA'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_load',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xABADCAFEDEAD1DEA'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xABADCAFEDEAD1DEA'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_load',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_load',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1234e-5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1234e-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_load',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4242.4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '4242.4242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_load',
        body: [{
          kind: 'const',
          type: 'f32',
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
        name: 'f64_load',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_load',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '123456789e-5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '123456789e-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_load',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '424242.424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '424242.424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_load',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp+1023'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_store16',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xFFFF'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_store16',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '61294'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_store16',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '42'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_store16',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xCAFE'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xCAFE'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_store',
        body: [{
          kind: 'const',
          type: 'i32',
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
        name: 'i32_store',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-4242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_store',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '42424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i32_store',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0xDEADCAFE'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0xDEADCAFE'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store16',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xFFFF'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store16',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '61294'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store16',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '42'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '42'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store16',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xCAFE'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xCAFE'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store32',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xFFFFFFFF'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store32',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4294963054'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store32',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '42424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store32',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xDEADCAFE'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xDEADCAFE'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store',
        body: [{
          kind: 'const',
          type: 'i64',
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
        name: 'i64_store',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-42424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-42424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xABAD1DEA'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xABAD1DEA'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'i64_store',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0xABADCAFEDEAD1DEA'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0xABADCAFEDEAD1DEA'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_store',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_store',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '1234e-5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '1234e-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_store',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '4242.4242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '4242.4242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f32_store',
        body: [{
          kind: 'const',
          type: 'f32',
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
        name: 'f64_store',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_store',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '123456789e-5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '123456789e-5'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_store',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '424242.424242'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '424242.424242'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        id: null,
        name: 'f64_store',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '0x1.fffffffffffffp+1023'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '0x1.fffffffffffffp+1023'
      }
    }
  ]
}
