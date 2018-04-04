function mapObjectKeys(obj, fn) {
  function transformKey(acc, cur) {
    return Object.assign(acc, { [fn(cur, obj[cur])]: obj[cur] });
  }
  return Object.keys(obj).reduce(transformKey, {});
}

module.exports = mapObjectKeys;
