//compiles wasm to evmasm
//Functions? can`t be capatible ATM.
var fs = require('fs')
var parser = require('./')
var opcodes = require('./operator.js')
var data = fs.readFileSync('./test.wasm')
var result = parser.parse(data.toString())
  // console.log(JSON.stringify(result, null, 2))
// var ast = injectGas(result)
  // console.log(JSON.stringify(ast, null, 2));
var count = 0
var r = buildText(result)
console.log(r)
console.log(count)

function injectGas(ast) {
  function addGas(gas) {
    return {
      "kind": "set_local",
      "id": {
        "kind": "identifier",
        "id": "gas"
      },
      "init": {
        "kind": "binop",
        "type": "i64",
        "operator": "add",
        "left": {
          "kind": "get_local",
          "id": {
            "kind": "identifier",
            "id": "gas"
          }
        },
        "right": {
          "kind": "const",
          "type": "i64",
          "init": gas
        }
      }
    }
  }

  function addGasBlock(gas, statement) {
    return {
      "kind": "block",
      "body": [addGas(gas), statement]
    }
  }

  function setGas(gas) {
    return {
      kind: 'set_local',
      id: {
        kind: 'identifier',
        id: 'gas'
      },
      init: {
        kind: 'const',
        type: 'i64',
        init: gas
      }
    }
  }

  var gas = opcodes.get(ast)
  if (Array.isArray(ast)) {
    ast.some(function (node, i) {
      gas += injectGas(node)
      if (node.kind === 'br' || node.kind === 'br_if') {
        var arrayGas = injectGas(ast.slice(i + 1))
        if (arrayGas) {
          ast.splice(i + 1, 0, addGas(arrayGas))
        }
        return false
      } else {
        return true
      }
    })
  } else if (ast.kind === 'script') {
    gas += injectGas(ast.body)
  } else if (ast.kind === 'module') {
    gas += injectGas(ast.body)
  } else if (ast.kind === 'func') {
    injectGas(ast.param)
      // inject local for counting
    ast.local.push({
      kind: 'local',
      'items': [{
        kind: 'item',
        name: 'gas',
        type: 'i64'
      }]
    })

    if (ast.result) {}

    injectGas(ast.local)
    if (ast.body.length) {
      gas += injectGas(ast.body)
    }

    //inject initial gas
    if (gas) {
      ast.body.unshift(setGas(gas))
    }
  } else if (ast.kind === 'binop') {
    gas += injectGas(ast.left)
    injectGas(ast.right)
  } else if (ast.kind === 'unop') {
    gas += injectGas(ast.expr)
  } else if (ast.kind === 'get_local') {
    gas += injectGas(ast.id)
  } else if (ast.kind === 'set_local') {
    gas += injectGas(ast.id)
    gas += injectGas(ast.init)
  } else if (ast.kind === 'export') {
  } else if (ast.kind === 'local') {
  } else if (ast.kind === 'memory') {
  } else if (ast.kind === 'import') {
  } else if (ast.kind === 'param') {
  } else if (ast.kind === 'call_import') {
    gas += injectGas(ast.expr)
  } else if (ast.kind === 'store') {
    if (ast.size) {}
    gas += injectGas(ast.addr)
    gas += injectGas(ast.data)
  } else if (ast.kind === 'const') {} else if (ast.kind === 'block') {
    gas = injectGas(ast.body)
    ast.body.unshift(addGas(gas))
    return 0
  } else if (ast.kind === 'label') {
    gas = injectGas(ast.body)
  } else if (ast.kind === 'loop') {
    gas = injectGas(ast.body)
    ast.body.unshift(addGas(gas))
    return 0
  } else if (ast.kind === 'if') {
    gas += injectGas(ast.test)
    var gasBody = injectGas(ast.consequent)
      // console.log(ast.consequent);
    ast.consequent = addGasBlock(gasBody, ast.consequent)
  } else if (ast.kind === 'relop') {
    gas = injectGas(ast.left)
    gas += injectGas(ast.right)
  } else if (ast.kind === 'br') {
    if (ast.expr) {
      gas = injectGas(ast.expr)
    }
  } else if (ast.kind === 'br_if') {
    if (ast.expr) {
      gas = injectGas(ast.expr)
      ast.expr = addGasBlock(gasBody, ast.expr)
    }
    return injectGas(ast.test)
  } else if (ast.kind === 'tableswitch') {
    gas += injectGas(ast.test)
    gas += injectGas(ast.table)
    gas += injectGas(ast.body)
  } else if (ast.kind === 'table') {
    gas += injectGas(ast.items)
  } else if (ast.kind === 'case') {
    if (ast.body) {
      gas += injectGas(ast.body)
    }
    ast.body.unshift(addGas(gas))
    return 0
  } else {
    // console.log(ast)
    // process.exit()
  }
  return gas
}

function buildText(ast) {
  console.log(count++);
  if(!ast) return
  var s = ''
  console.log('------------------');
  console.log(ast);
  if (Array.isArray(ast)) {
    ast.forEach(function (node) {
      s += buildText(node)
    })
  } else if (ast.kind === 'script') {
    s = buildText(ast.body)
  } else if (ast.kind === 'module') {
    s = '(module\n'
    s += buildText(ast.body)
    s += ')'
  } else if (ast.kind === 'func') {
    s = '(func $' + ast.id.name
    s += buildText(ast.param)

    if (ast.result) {
      s += '(result ' + ast.result.type + ')'
    }
    s += '\n'
    if (ast.local.length) {
      s += buildText(ast.local) + '\n'
    }
    if (ast.body.length) {
      s += buildText(ast.body)
    }
    s += ')\n'

    return s
  } else if (ast.kind === 'binop') {
    s = '(' + ast.type + '.' + ast.operator
    s += buildText(ast.left)
    s += buildText(ast.right) + ')'
  } else if (ast.kind === 'unop') {
    s = '(' + ast.type + '.' + ast.operator
    s += buildText(ast.expr) + ')'
  } else if (ast.kind === 'get_local') {
    s = '(get_local '
    s += buildText(ast.id) + ')'
  } else if (ast.kind === 'set_local') {
    s = '(set_local '
    s += buildText(ast.id)
    s += buildText(ast.init)
    s += ')'
  } else if (ast.kind === 'identifier') {
    s = '$' + ast.id
  } else if (ast.kind === 'export') {
    s = '(export "' + ast.name + '" $' + ast.id.id + ')'
  } else if (ast.kind === 'local') {
    s = '(local'
    if (ast.items[0].name) {
      s += ' $' + ast.items[0].name
    }
    s += ' ' + ast.items[0].type + ')'
  } else if (ast.kind === 'memory') {
    s = '(memory ' + ast.int + ')'
  } else if (ast.kind === 'import') {
    s = '(import $' + ast.id.name + ' "' + ast.name1 + '" "' + ast.name2 + '")'
    s += buildText(ast.params)
  } else if (ast.kind === 'param') {
    s = '(param '
    if (ast.items[0].name) {
      s += ast.items[0].name + ' '
    }
    s += ast.items[0].type + ')'
  } else if (ast.kind === 'call_import') {
    s = '(call_import $' + ast.id.id
    s += buildText(ast.expr)
    s += ')'
  } else if (ast.kind === 'store') {
    s = '(' + ast.type + 'store'
    if (ast.size) {
      s += ast.size + ')'
    }
    s += buildText(ast.addr)
    s += buildText(ast.data)
  } else if (ast.kind === 'const') {
    s = '(' + ast.type + '.const ' + ast.init + ')'
  } else if (ast.kind === 'block') {
    s = '(block '
    if (ast.id) {
      s += buildText(ast.id)
    }
    s += buildText(ast.body)
    s += ')'
  } else if (ast.kind === 'label') {
    s = '(label '
    s += buildText(ast.id)
    s += buildText(ast.body)
    s += ')'
  } else if (ast.kind === 'loop') {
    s = '(loop '
    if (ast.id) {
      s += buildText(ast.id) + ' '
    }
    if (ast.extra) {
      s += buildText(ast.extra)
    }
    s += buildText(ast.body)
    s += ')'
  } else if (ast.kind === 'if') {
    s = '(if '
    s += buildText(ast.test)
    s += buildText(ast.consequent) + ')'
  } else if (ast.kind === 'relop') {
    s = '(' + ast.type + '.' + ast.operator + ' '
    s += buildText(ast.left)
    s += buildText(ast.right)
    s += ')'
  } else if (ast.kind === 'br') {
    s = '(br '
    s += buildText(ast.id)
    if (ast.expr) {
      s += buildText(ast.expr)
    }
    s += ')'
  } else if (ast.kind === 'br_if') {
    s = '(br_if'
    s += buildText(ast.test)
    s += buildText(ast.id)
    if (ast.expr) {
      s += buildText(ast.expr)
    }
    s += ')'
  } else if (ast.kind === 'tableswitch') {
    s = '(tableswitch '
    if (ast.id) {
      s += buildText(ast.id)
    }
    s += buildText(ast.test)
    s += buildText(ast.table)
    s += buildText(ast.body)
    s += ')'
  } else if (ast.kind === 'table') {
    s = '(table '
    s += buildText(ast.items)
    s += ')'
  } else if (ast.kind === 'literal') {
    s = ast.value
  } else if (ast.kind === 'case') {
    s = '(case $' + ast.test[1]
    if (ast.body) {
      s += buildText(ast.body)
    }
    s += ')'
  } else {
    s = ''
      // process.exit()
  }
  return s
}
