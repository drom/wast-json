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

multiLineComment = "(;" ( multiLineComment / !";)" . )* ";)" { return null; }

comment "comment"
    = ";;" ( !LineTerminator . )* { return null; }
    / multiLineComment

__ = ( white_space / LineTerminatorSequence / comment )*

name = name:[a-zA-Z0-9\-\_\$\.]+ { return name.join(''); }

local_type = "i32" / "i64" / "f32" / "f64"

int = node:( "0x" [0-9A-Fa-f]+ / "-"? [0-9]+ ) { return (node[0] || '') + node[1].join(''); }

float = "-"? [0-9.]+

binop
    = "add" / "sub" / "mul" / "div_s" / "div_u" / "rem_s" / "rem_u"
    / "and" / "or" / "xor" / "shl" / "shr_u" / "shr_s" / "rotl" / "rotr" // int
    / "add" / "sub" / "mul" / "div" / "copysign" / "min" / "max" // float

unop
    = "clz" / "ctz" / "popcnt" / "eqz" // int
    / "neg" / "abs" / "ceil" / "floor" / "trunc" / "nearest" / "sqrt" // float

cvtop
    = "wrap" / "trunc_s" / "trunc_u" / "reinterpret" / "extend_s" / "extend_u"
    / "convert_s" / "convert_u" / "demote" / "promote"

relop
    = "eq" / "ne" / "lt_s" / "lt_u" / "le_s" / "le_u" / "gt_s" / "gt_u" / "ge_s" / "ge_u" // int
    / "eq" / "ne" / "lt" / "le" / "gt" / "ge" // float

value
    = node:(pre:( "nan:" / "+nan:" / "-nan:" ) sign:"-"? hex:"0x" digits:[0-9A-Fa-f\.\-\+ep]+ {
            return pre[0] + (sign || '') + hex + digits.join('')
        }
        / "nan" / "+nan" / "-nan"
        / "infinity" / "+infinity" / "-infinity"
        / sign:("-" / "+")? hex:"0x" digits:[0-9A-Fa-f\.\-\+p]+ {
            return (sign || '') + hex + digits.join('');
        }
        / sign:"-"? digits:[0-9\.\-\+e]+ {
            return (sign || '') + digits.join('');
        }
        )

sign = "s" / "u"

align =  (
    hex:"0x" digit:[0-9A-Fa-f]* { return hex + digit.join(''); }
    / digit:[0-9]* { return digit.join(''); }
);

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
    = "(" __ kind:"case" __ test:( "$" name / value ) body:( __ expr )* fallthrough:( __ "fallthrough")? __ ")" {
        return {
            kind: kind,
            test: test,
            body: body.map(function (e) { return e[1]; }),
            fallthrough: fallthrough ? true : false
        };
    }
    / "(" __ kind:"case" test:( __ value )? __ ")" {
        return {
            kind: kind,
            test: test ? value[1] : null
        };
    }
    / expr

/*
tableswitchtable = "(" kind:"table" items:( __ case )* __ ")" {
        return {
            kind: kind,
            items: items.map(function (e) { return e[1]; })
        };
    }
*/
expr
    = "(" __
        body:( type:local_type "." kind:"const" __ init:value {
            return {
                kind: kind,
                type: type,
                init: init
            };
        }

        / kind:"drop" body:( __ expr )* {
            return {
                kind: kind,
                body: body.map(function (e) { return e[1]; })
            };
        }

        / kind:"block" id:( __ var )? type:( __ local_type )? body:( __ expr )* {
            return {
                kind: kind,
                type: type ? type[1] : type,
                id: id ? id[1] : id,
                body: body.map(function (e) { return e[1]; })
            };
        }

        / kind:"if" type:( __ local_type )? body:( __ expr )* {
            return {
                kind: kind,
                type: type ? type[1] : type,
                body: body.map(function (e) { return e[1]; })
            };
        }

        / kind:( "then" / "else" ) id:( __ var )? body:( __ expr )* {
            return {
                kind: kind,
                id: id ? id[1] : id,
                body: body.map(function (e) { return e[1]; })
            };
        }

        // = (label <var> (loop (block <var>? <expr>*)))
        / kind:"loop" type:( __ local_type )? id:( __ var )? extra:( __ var )? body:( __ expr )* {
            return {
                kind: kind,
                type: type ? type[1] : type,
                id: id ? id[1] : id,
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

        / kind:"br_if" __ id:var __ test:expr __ expr:( __ expr )? {
            return {
                kind: kind,
                id: id,
                test: test,
                expr: expr ? expr[1] : expr
            };
        }

        / kind:"has_feature" __ name:literal {
            return {
                kind: kind,
                name: literal
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

        / kind:"br_table" body:( __ var )* expr:( __ expr )* {
            return {
                kind: kind,
                exprs: expr.map(function (e) { return e[1]; }),
                body: body.map(function (e) { return e[1]; })
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
                exprs: expr.map(function (e) { return e[1]; })
            };
        }

        / kind:"call_indirect" __ id:var __ expr:( __ expr )+ {
            return {
                kind: kind,
                id: id,
                exprs: expr.map(function (e) { return e[1]; })
            }
        }

        / kind:"return" expr:( __ expr )? {
            return {
                kind: kind,
                expr: expr ? expr[1] : expr
            }
        }

        / kind:("get_local" / "get_global") __ id:var {
            return {
                kind: kind,
                id: id
            };
        }

        / kind:("set_local" / "tee_local") __ id:var expr:( __ expr )? {
            return {
                kind: kind,
                id: id,
                init: expr ? expr[1] : null
            };
        }

        / type:local_type "." kind:"load" sufix:( ( "8" / "16" / "32" / "64") ( "_" sign )? )? offset:( __ "offset=" align )? align:( __ "align=" align )? __ expr:expr {
            return {
                kind: kind,
                type: type,
                size: sufix ? parseInt(sufix[0], 10) : null,
                sign: (sufix && sufix[1]) ? (sufix[1][1] === 's') : null,
                offset: offset ? parseInt(offset[2], 10) : 0,
                align: align ? parseInt(align[2], 10) : 0,
                expr: expr
            };
        }

        / type:local_type "." kind:"store" sufix:( "8" / "16" / "32" / "64")? offset:( __ "offset=" align )? align:( __ "align=" align )? __ addr:expr __ data:expr {
            return {
                kind: kind,
                type: type,
                size: sufix ? parseInt(sufix, 10) : null,
                offset: offset ? parseInt(offset[2], 10) : 0,
                align: align ? parseInt(align[2], 10) : 0,
                addr: addr,
                data: data
            };
        }

        / kind:"select" args:( __ expr __ expr __ expr )? {
            return {
                kind: kind,
                then: args ? args[1] : null,
                else: args ? args[3] : null,
                test: args ? args[5] : null
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

        / type:local_type "." operator:unop expr:( __ expr )? {
            return {
                kind: 'unop',
                type: type,
                operator: operator,
                expr: expr ? expr[1] : expr
            };
        }

        / type:local_type "." operator:binop left:( __ expr)? right:( __ expr)? {
            return {
                kind: 'binop',
                type: type,
                operator: operator,
                left: left ? left[1] : left,
                right: right ? right[1] : right
            };
        }

        / type:local_type "." operator:relop left:( __ expr)? right:( __ expr)? {
            return {
                kind: 'relop',
                type: type,
                operator: operator,
                left: left ? left[1] : left,
                right: right ? right[1] : right
            };
        }

        / kind:("nop" / "page_size" / "unreachable" / "current_memory") {
            return {
                kind: kind
            };
        }

        / kind:("resize_memory" / "grow_memory") __ expr:expr {
            return {
                kind: kind,
                expr: expr
            };
        }
        )
    __ ")" {
        return body;
    }

literal = ["] value:( !["] . )* ["] {
    return {
        kind: 'literal',
        value: value.map(function (e) { return e[1]; }).join('').replace(/\\/g, '\\\\')
    };
}

param
    = "(" __ kind:"param" items:( __ local_type )* __ ")" {
        return {
            kind: kind,
            items: items.map(function (e) { return { kind: 'item', type: e[1] }; })
        };
    }
    / "(" __ kind:"param" __ "$" name:name __ type:local_type __ ")" {
        return {
            kind: kind,
            items: [{ kind: 'item', name: name, type: type }]
        };
    }

local
    = "(" __ kind:"local" items:( __ local_type )* __ ")" {
        return {
            kind: kind,
            items: items.map(function (e) { return { kind: 'item', type: e[1] }; })
        };
    }
    / "(" __ kind:"local" __ "$" name:name __ type:local_type __ ")" {
        return {
            kind: kind,
            items: [{ kind: 'item', name: name, type: type }]
        };
    }

result = "(" __ kind:"result" __ type:local_type __ ")" {
    return {
        kind: kind,
        type: type
    };
}

segment = kind:"segment" __ int:int __ init:literal {
    return {
        kind: kind,
        offset: {
          kind: 'literal',
          value: Number(int),
          raw: int
        },
        init: init
    }
}

func_type = "(" __ kind:"type" __ id:var __ ")" {
    return {
        kind: kind,
        id: id
    };
}

func = kind:"func" id:( __ var )? expo:( __ "(" __ "export" __ literal __ ")" )? imp:( __ "(" __ "import" __ literal __ literal __ ")" )? type:( __ func_type )? param:( __ param )* result:( __ result )? local:( __ local )* body:( __ expr )* {
    return {
        kind: kind,
        id: id ? id[1] : id,
        expo: expo ? expo[5] : expo,
        imp: imp ? {

        } : imp,
        type: type ? type[1] : type,
        params: param.map(function (e) { return e[1]; }),
        result: result ? result[1] : result,
        local: local.map(function (e) { return e[1]; }),
        body: body.map(function (e) { return e[1]; })
    };
}

_start = kind:"start" __ id:var {
    return {
        kind: kind,
        id: id
    };
}

param_def = "(" __ kind:"param" items:( __ local_type )* __ ")" {
    return {
        kind: kind,
        items: items.map(function (e) { return { kind: 'item', type: e[1] }; })
    }
}

result_def = "(" __ kind:"result" __ type:local_type __ ")" {
    return {
        kind: kind,
        type: type
    }
}

func_def = "(" __ kind:"func" param:( __ param_def )* result:( __ result_def )? __ ")" {
    return {
        kind: kind,
        params: param.map(function (e) { return e[1]; }),
        result: result ? result[1] : result,
        local: [],
        body: []
    };
}

type_def = kind:"type" id:( __ var )? expr:( __ func_def ) {
    return {
        kind: kind,
        id: id ? id[1] : id,
        expr: expr ? expr[1] : expr
    };
}

import = kind:"import" id:( __ var )? __ modName:literal __ funcName:literal type:( __ func_type )? params:( __ param )* result:( __ result )? {
    return {
        kind: kind,
        id: id ? id[1] : id,
        modName: modName,
        funcName: funcName,
        type: type ? type[1] : type,
        params: params.map(function (e) { return e[1]; }),
        result: result ? result[1] : result
    };
}

export = kind:"export" __ ["] name:( "\\" "\"" / !["] . )* ["] __ id:( cmd / "memory" ) {
    return {
        kind: kind,
        name: {
            kind: 'literal',
            value: name.map(function (e) { return e[1]; }).join('')
        },
        id: (id === 'memory') ? {
            kind: 'literal',
            value: id,
            bare: true
        } : id
    };
}

elem = "(" __ kind:"elem" items:( __ var )* __ ")" {
    return {
        kind: kind,
        items: items.map(function (e) { return e[1]; })
    }
}

table = kind:"table" index:( __ int )? anyfunc:( __ "anyfunc" )? items:( __ elem )? {
    return {
        kind: kind,
        index: index ? index[1] : index,
        items: items ? items[1] : items
    };
}

memory = kind:"memory" int:( __ int )? int1:( __ int )? segment:( __ cmd )* {
    return {
        kind: kind,
        int: int ? {
          kind: 'literal',
          value: Number(int[1]),
          raw: int
        } : int,
        int1: int1 ? {
          kind: 'literal',
          value: Number(int1[1]),
          raw: int1[1]
        } : int1,
        segment: segment.map(function (e) { return e[1]; })
    };
}

invoke = kind:"invoke" id:( __ var )? __ ["] name:( "\\\"" / !["] . )* ["] body:( __ expr )* {
    return {
        kind: kind,
        id: id ? id[1] : id,
        name: name.map(function (e) {
            return e[1];
        }).join(''),
        body: body.map(function (e) { return e[1]; })
    };
}

module = kind:"module" body:( __ ( cmd / literal / name ) )* {
    var result = [];
    return {
        kind: kind,
        body: body.map(function (e) { return e[1]; })
    };
}

assert_return = kind:"assert_return" __ invoke:cmd __ expr:( expr )? {
    return {
        kind: kind,
        invoke: invoke,
        expr: expr
    };
}

assert_return_nan = kind:"assert_return_nan" __ invoke:cmd {
    return {
        kind: kind,
        invoke: invoke
    };
}

assert_trap = kind:"assert_trap" __ invoke:cmd __ failure:literal {
    return {
        kind: kind,
        invoke: invoke,
        failure: failure
    };
}

assert_invalid = kind:("assert_invalid" / "assert_unlinkable" / "assert_malformed" / "assert_exhaustion")  __ module:cmd __ failure:literal {
    return {
        kind: kind,
        module: module,
        failure: failure
    };
}

data = kind:"data" values:( __ literal )* {
    return {
        kind: kind,
        values: values.map(function (e) { return e[1]; })
    };
}

cmd
    = "(" __
        node:( module
        / invoke
        / assert_return
        / assert_return_nan
        / assert_trap
        / assert_invalid
        / segment
        / func
        / import
        / export
        / table
        / memory
        / data
        / type_def
        / _start
        ) __
    ")" { return node; }
    / node:expr { return node; }
