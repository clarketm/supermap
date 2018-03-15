Map.prototype.toObject = function () {
  return Array.from(this).reduce((obj, [key, value]) => {
    if (typeof key === 'string') {
      obj[key] = value;
    }
    return obj;
  }, {});
};

export default Map;
