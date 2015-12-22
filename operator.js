//Linear Memory Accesses
var opcodes = {
  i32: {},
  i64: {},
  f32: {},
  f64: {}
}

var i32 = opcodes.i32
var i64 = opcodes.i64
var f32 = opcodes.f32
var f64 = opcodes.f64

//load operations
i32['load8_s'] = 10
i32['load8_u'] = 10
i32['load16_s'] = 10
i32['load16_u'] = 10
i32['load'] = 10
i64['load8_s'] = 10
i64['load8_u'] = 10
i64['load16_s'] = 10
i64['load16_u'] = 10
i64['load32_s'] = 10
i64['load32_u'] = 10
i64['load'] = 10
f32['load'] = 10
f64['load'] = 10

//Store operations
i32['store8'] = 10
i32['store16'] = 10
i32['store'] = 10
i64['store8'] = 10
i64['store16'] = 10
i64['store32'] = 10
i64['store'] = 10
f32['store'] = 10
f64['store'] = 10

//grow memoy
opcodes['grow_memory'] = 10

//Local variables
opcodes['get_local'] = 10
opcodes['set_local'] = 10

//Control flow structures
opcodes['nop'] = 10
opcodes['block'] = 10
opcodes['loopcall'] = 10
opcodes['if'] = 10
opcodes['if_else'] = 10
opcodes['br'] = 10
opcodes['br_if'] = 10
opcodes['tableswitch'] = 10
opcodes['case'] = 10
opcodes['return'] = 10

//Calls
opcodes['call'] = 10
opcodes['call_import'] = 10
opcodes['call_indirect'] = 10
i32['const'] = 10
i64['const'] = 10
f32['const'] = 10
f64['const'] = 10
  //32-bit Integer operators
i32['add'] = 10
i32['sub'] = 10
i32['mul'] = 10
i32['div_s'] = 10
i32['div_u'] = 10
i32['rem_s'] = 10
i32['rem_u'] = 10
i32['and'] = 10
i32['or'] = 10
i32['xor'] = 10
i32['shl'] = 10
i32['shr_u'] = 10
i32['shr_s'] = 10
i32['eq'] = 10
i32['ne'] = 10
i32['lt_s'] = 10
i32['le_s'] = 10
i32['lt_u'] = 10
i32['le_u'] = 10
i32['gt_s'] = 10
i32['ge_s'] = 10
i32['gt_u'] = 10
i32['ge_u'] = 10
i32['clz'] = 10
i32['ctz'] = 10
i32['popcnt'] = 10

//32-bit Integer operators
i64['add'] = 10
i64['sub'] = 10
i64['mul'] = 10
i64['div_s'] = 10
i64['div_u'] = 10
i64['rem_s'] = 10
i64['rem_u'] = 10
i64['and'] = 10
i64['or'] = 10
i64['xor'] = 10
i64['shl'] = 10
i64['shr_u'] = 10
i64['shr_s'] = 10
i64['eq'] = 10
i64['ne'] = 10
i64['lt_s'] = 10
i64['le_s'] = 10
i64['lt_u'] = 10
i64['le_u'] = 10
i64['gt_s'] = 10
i64['ge_s'] = 10
i64['gt_u'] = 10
i64['ge_u'] = 10
i64['clz'] = 10
i64['ctz'] = 10
i64['popcnt'] = 10

//Floating point operators
f32['add'] = 10
f32['sub'] = 10
f32['mul'] = 10
f32['div'] = 10
f32['abs'] = 10
f32['neg'] = 10
f32['copysign'] = 10
f32['ceil'] = 10
f32['floor'] = 10
f32['truncro'] = 10
f32['nearestven'] = 10
f32['eq'] = 10
f32['ne'] = 10
f32['lt'] = 10
f32['leual'] = 10
f32['gt'] = 10
f32['ge equal'] = 10
f32['sqrt'] = 10
f32['min'] = 10
f32['max'] = 10

//64-bit floating point operators
f64['add'] = 10
f64['sub'] = 10
f64['mul'] = 10
f64['div'] = 10
f64['abs'] = 10
f64['neg'] = 10
f64['copysign'] = 10
f64['ceil'] = 10
f64['floor'] = 10
f64['trunc'] = 10
f64['nearest'] = 10
f64['eq'] = 10
f64['ne'] = 10
f64['lt'] = 10
f64['le'] = 10
f64['gt'] = 10
f64['ge'] = 10
f64['sqrt'] = 10
f64['min'] = 10
f64['max'] = 10

//Datatype conversions, truncations, reinterpretations, promotions, and demotions
i32['wrap/i64'] = 10
i32['trunc_s/f32'] = 10
i32['trunc_s/f64'] = 10
i32['trunc_u/f32'] = 10
i32['trunc_u/f64'] = 10
i32['reinterpret/f32'] = 10
i64['extend_s/i32'] = 10
i64['extend_u/i32'] = 10
i64['trunc_s/f32'] = 10
i64['trunc_s/f64'] = 10
i64['trunc_u/f32'] = 10
i64['trunc_u/f64'] = 10
i64['reinterpret/f64'] = 10
f32['demote/f64'] = 10
f32['convert_s/i32'] = 10
f32['convert_s/i64'] = 10
f32['convert_u/i32'] = 10
f32['convert_u/i64'] = 10
f32['reinterpret/i32'] = 10
f64['promote/f32'] = 10
f64['convert_s/i32'] = 10
f64['convert_s/i64'] = 10
f64['convert_u/i32'] = 10
f64['convert_u/i64'] = 10
f64['reinterpret/i64'] = 10

opcodes['select'] = 10
opcodes['Unreachable'] = 10
opcodes['has_feature'] = 10

exports.get = function (ast) {
  var gas = opcodes[ast.kind]
  if (gas) {
    return gas
  } else {
    return 0
  }
}
