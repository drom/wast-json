/* WAST Grammar */

start
    = body:( __ cmd )* __ {
        return {
            kind: 'script',
            body: body.map(function (e) { return e[1]; })
        };
    }

white_space "whitespace"
    = [\t\v\f \u00A0\uFEFF]

LineTerminatorSequence "end of line"
    = "\n"
    / "\r\n"
    / "\r"
    / "\u2028" // line separator
    / "\u2029" // paragraph separator

LineTerminator = [\n\r\u2028\u2029]

comment "comment"
    = ";;" ( !LineTerminator . )* { return null; }
    / "(;" ( !";)" . )* ";)" { return null; }

__ = ( white_space / LineTerminatorSequence / comment )*

name = name:[a-zA-Z0-9\-\_\.]+ { return name.join(''); }

local_type = "i32" / "i64" / "f32" / "f64"

int = node:( "0x" [0-9A-Fa-f]+ / "-"? [0-9]+ ) { return (node[0] || '') + node[1].join(''); }

float = "-"? [0-9.]+

binop
    = "add" / "sub" / "mul" / "div_s" / "div_u" / "rem_s" / "rem_u"
    / "and" / "or" / "xor" / "shl" / "shr_u" / "shr_s" // int
    / "add" / "sub" / "mul" / "div" / "copysign" / "min" / "max" // float

unop
    = "clz" / "ctz" / "popcnt" // int
    / "neg" / "abs" / "ceil" / "floor" / "trunc" / "nearest" / "sqrt" // float

cvtop = res:[a-z\_]+ { return res.join(''); }

relop
    = "eq" / "ne" / "lt_s" / "lt_u" / "le_s" / "le_u" / "gt_s" / "gt_u" / "ge_s" / "ge_u" // int
    / "eq" / "ne" / "lt" / "le" / "gt" / "ge" // float

value
    = node:(pre:( "nan:" / "+nan:" / "-nan:" ) sign:"-"? hex:"0x" digits:[0-9A-Fa-f\.\-\+ep]+ {
            return pre[0] + (sign || '') + hex + digits.join('')
        }
        / "nan" / "+nan" / "-nan"
        / "infinity" / "+infinity" / "-infinity"
        / sign:"-"? hex:"0x" digits:[0-9A-Fa-f\.\-\+p]+ {
            return (sign || '') + hex + digits.join('');
        }
        / sign:"-"? digits:[0-9\.\-\+e]+ {
            return (sign || '') + digits.join('');
        }
        )

sign = "s" / "u"

align = digit:[0-9]* { return digit.join(''); }

offset = digit:[0-9]* { return digit.join(''); }

var
    = int:int {
        return {
            kind: 'literal',
            value: Number(int),
            raw: int
        };
    }
    / "$" id:name {
        return {
            kind: 'identifier',
            id: id
        };
    }

case
    = "(" kind:"case" __ test:( "$" name / value ) body:( __ expr )* fallthrough:( __ "fallthrough")? __ ")" {
        return {
            kind: kind,
            test: test,
            body: body.map(function (e) { return e[1]; }),
            fallthrough: fallthrough ? true : false
        };
    }
    / "(" kind:"case" test:( __ value )? __ ")" {
        return {
            kind: kind,
            test: test ? value[1] : null
        };
    }
    / expr

tableswitchtable = "(" kind:"table" items:( __ case )* __ ")" {
        return {
            kind: kind,
            items: items.map(function (e) { return e[1]; })
        };
    }

expr
    = "("
        body:( type:local_type "." kind:"const" __ init:value {
            return {
                kind: kind,
                type: type,
                init: init
            };
        }

        / kind:"block" body:( __ expr )+ {
            return {
                kind: kind,
                body: body.map(function (e) { return e[1]; })
            };
        }

        // = (label <var> (block <expr>+))
        / kind:"block" __ id:var body:( __ expr )+ {
            return {
                kind: kind,
                id: id,
                body: body.map(function (e) { return e[1]; })
            };
        }

        / kind:"if_else" __ test:expr __ consequent:expr __ alternate:expr {
            return {
                kind: kind,
                test: test,
                consequent: consequent,
                alternate: alternate || null
            };
        }

        // ;; = (if <expr> <expr> (nop))
        / kind:"if" __ test:expr __ consequent:expr {
            return {
                kind: kind,
                test: test,
                consequent: consequent,
                alternate: null
            };
        }

        // = (label <var> (loop (block <var>? <expr>*)))
        / kind:"loop" __ id:var extra:( __ var )? body:( __ expr )* {
            return {
                kind: kind,
                id: id,
                extra: extra ? extra[1] : extra,
                body: body.map(function (e) { return e[1]; })
            };
        }

        // = (loop (block <expr>*))
        / kind:"loop" body:( __ expr )* {
            return {
                kind: kind,
                body: body.map(function (e) { return e[1]; })
            };
        }

        / kind:"label" id:( __ var )? __ body:expr {
            return {
                kind: kind,
                id: id ? id[1] : id,
                body: body
            };
        }

        / kind:"br" __ id:var expr:( __ expr )? {
            return {
                kind: kind,
                id: id,
                expr: expr ? expr[1] : expr
            };
        }

        / kind:"br_if" __ test:expr __ id:var expr:( __ expr )? {
            return {
                kind: kind,
                test: test,
                id: id,
                expr: expr ? expr[1] : expr
            };
        }

        / kind:"has_feature" __ ["] name:[a-zA-Z0-9_\-\\]* ["] {
            return {
                kind: kind,
                name: name.join('')
            };
        }

        / type:local_type "." kind:"switch" __ before:expr body:( __ case )* __ after:expr {
            return {
                kind: kind,
                type: type,
                before: before,
                body: body.map(function (e) { return e[1]; }),
                after: after
            };
        }

        / kind:"tableswitch" id:( __ var )? __ test:expr __ table:tableswitchtable __ body:( __ case )* {
            return {
                kind: kind,
                id: id ? id[1] : null,
                test: test,
                table: table,
                body: body.map(function (e) { return e[1]; }),

            };
        }

        // = (label <var> (<type>.switch <expr> <case>* <expr>))
        / type:local_type "." kind:"switch" __ id:var __ before:expr body:( __ case )* __ after:expr {
            return {
                kind: kind,
                id: id,
                type: type,
                before: before,
                body: body.map(function (e) { return e[1]; }),
                after: after
            };
        }

        / kind:( "call_import" / "call" ) __ id:var expr:( __ expr )* {
            return {
                kind: kind,
                id: id,
                expr: expr.map(function (e) { return e[1]; })
            };
        }

        / kind:"call_indirect" __ id:var __ expr:( __ expr )+ {
            return {
                kind: kind,
                id: id,
                expr: expr.map(function (e) { return e[1]; })
            }
        }

        / kind:"return" expr:( __ expr )? {
            return {
                kind: kind,
                expr: expr ? expr[1] : expr
            }
        }

        / kind:"get_local" __ id:var {
            return {
                kind: kind,
                id: id
            };
        }

        / kind:"set_local" __ id:var __ expr:expr {
            return {
                kind: kind,
                id: id,
                init: expr
            };
        }

        / type:local_type "." kind:"load" sufix:( ( "8" / "16" / "32") ( "_" sign )? )? offset:( __ "offset=" offset )? align:( __ "align=" align )? __ expr:expr {
            return {
                kind: kind,
                type: type,
                size: sufix ? sufix[0] : null,
                sign: (sufix && sufix[1]) ? (sufix[1][1] === 's') : null,
                offset: offset ? offset[2] : 0,
                align: align ? align[2] : 0,
                expr: expr
            };
        }

        / type:local_type "." kind:"store" sufix:( "8" / "16" / "32")? offset:( __ "offset=" offset )? align:( __ "align=" align )? __ addr:expr __ data:expr {
            return {
                kind: kind,
                type: type,
                size: sufix ? sufix[0] : null,
                offset: offset ? offset[2] : 0,
                align: align ? align[2] : 0,
                addr: addr,
                data: data
            };
        }

        / type:local_type ".select" __ test:expr __ consequent:expr __ alternate:expr {
            return {
                kind: 'select',
                type: type,
                test: test,
                consequent: consequent,
                alternate: alternate
            };
        }

        / type:local_type "." operator:binop __ left:expr __ right:expr {
            return {
                kind: 'binop',
                type: type,
                operator: operator,
                left: left,
                right: right
            };
        }

        / type:local_type "." operator:relop __ left:expr __ right:expr {
            return {
                kind: 'relop',
                type: type,
                operator: operator,
                left: left,
                right: right
            };
        }

        / type:local_type "." operator:cvtop "/" type1:local_type __ expr:expr {
            return {
                kind: 'cvtop',
                type: type,
                type1: type1,
                operator: operator,
                expr: expr
            };
        }

        / type:local_type "." operator:unop __ expr:expr {
            return {
                kind: 'unop',
                type: type,
                operator: operator,
                expr: expr
            };
        }

        / kind:("nop" / "page_size" / "memory_size" / "unreachable") {
            return {
                kind: kind
            };
        }

        / kind:("resize_memory" / "grow_memory") __ expr:expr {
            return {
                kind: kind,
                expression: expr
            };
        }
        )
    __ ")" {
        return body;
    }

failure = ["] value:( !["] . )* ["] {
    return {
        kind: 'failure',
        value: value.reduce(function (res, e) { return res + e[1]; }, '')
    };
}

param
    = "(" kind:"param" items:( __ local_type )* __ ")" {
        return {
            kind: kind,
            items: items.map(function (e) { return { kind: 'item', type: e[1] }; })
        };
    }
    / "(" kind:"param" __ "$" name:name __ type:local_type __ ")" {
        return {
            kind: kind,
            items: [{ kind: 'item', name: name, type: type }]
        };
    }

local
    = "(" kind:"local" items:( __ local_type )* __ ")" {
        return {
            kind: kind,
            items: items.map(function (e) { return { kind: 'item', type: e[1] }; })
        };
    }
    / "(" kind:"local" __ "$" name:name __ type:local_type __ ")" {
        return {
            kind: kind,
            items: [{ kind: 'item', name: name, type: type }]
        };
    }

result = "(" kind:"result" __ type:local_type __ ")" {
    return {
        kind: kind,
        type: type
    };
}

segment = "(" kind:"segment" __ int:int __ ["] name:[a-zA-Z0-9_\-\\]* ["] __ ")" {
    return {
        kind: kind,
        int: int,
        name: name.join('')
    }
}

func_type = "(" kind:"type" __ id:var __ ")" {
    return {
        kind: kind,
        id: id
    };
}

func = kind:"func" name:( __ "$" name )? type:( __ func_type )? param:( __ param )* result:( __ result )? local:( __ local )* body:( __ expr )* {
    return {
        kind: kind,
        id: (name ? { kind: 'identifier', name: name[2] } : null),
        type: type ? type[1] : type,
        param: param.map(function (e) { return e[1]; }),
        result: result ? result[1] : result,
        local: local.map(function (e) { return e[1]; }),
        body: body.map(function (e) { return e[1]; })
    };
}

param_def = "(" kind:"param" type:( __ local_type )? __ ")" {
    return {
        kind: kind,
        items: type ? [{ kind: 'item', type: type[1] }] : []
    }
}

result_def = "(" kind:"result" __ type:local_type __ ")" {
    return {
        kind: kind,
        type: type
    }
}

func_def = "(" kind:"func" param:( __ param_def )* result:( __ result_def )? __ ")" {
    return {
        kind: kind,
        param: param.map(function (e) { return e[1]; }),
        result: result ? result[1] : result,
        local: [],
        body: []
    };
}

type_def = kind:"type" name:( __ "$" name )? __ func_def {
    return {
        kind: kind,
        id: { kind: 'identifier', name: name ? name[2] : name }
    };
}

import = kind:"import" id:( __ "$" name )? __ ["] name1:name ["] __ ["] name2:name ["] type:( __ func_type )? params:( __ param )* result:( __ result )? {
    return {
        kind: kind,
        id: (id ? { kind: 'identifier', name: id[2] } : null),
        name1: name1,
        name2: name2,
        type: type ? type[1] : type,
        params: params.map(function (e) { return e[1]; }),
        result: result ? result[1] : result
    };
}

export = kind:"export" __ ["] name:( "\\" "\"" / !["] . )* ["] __ id:var {
    return {
        kind: kind,
        id:id,
        name: name.map(function (e) {
            return e[1];
        }).join('')
    };
}

table = kind:"table" items:( __ var )* {
    return {
        kind: kind,
        items: items.map(function (e) { return e[1]; })
    };
}

memory = kind:"memory" __ int:int int1:( __ int )? segment:( __ segment )* {
    return {
        kind: kind,
        int: int,
        int1: int1 ? int1[1] : int1,
        segment: segment.map(function (e) { return e[1]; })
    };
}

invoke = "(" kind:"invoke" __ ["] name:( "\\\"" / !["] . )* ["] body:( __ expr )* __ ")" {
    return {
        kind: kind,
        name: name.map(function (e) {
            return e[1];
        }).join(''),
        body: body.map(function (e) { return e[1]; })
    };
}

module = kind:"module" body:( __ "(" ( func / import / export / table / memory / type_def ) __ ")" )* {
    var result = [];
    return {
        kind: kind,
        body: body.map(function (e) { return e[2]; })
    };
}

assert_return = kind:"assert_return" __ invoke:invoke __ expr:( expr )? {
    return {
        kind: kind,
        invoke: invoke,
        expr: expr
    };
}

assert_return_nan = kind:"assert_return_nan" __ invoke:invoke {
    return {
        kind: kind,
        invoke: invoke
    };
}

assert_trap = kind:"assert_trap" __ invoke:invoke __ failure:failure {
    return {
        kind: kind,
        invoke: invoke,
        failure: failure
    };
}

assert_invalid = kind:"assert_invalid" __ "(" module:module __ ")" __ failure:failure {
    return {
        kind: kind,
        module: module,
        failure: failure
    };
}

cmd
    = invoke:invoke { return invoke; }
    / "("
        node:( module
        / assert_return
        / assert_return_nan
        / assert_trap
        / assert_invalid
        ) __
    ")" { return node; }
