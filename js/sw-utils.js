// store in dynamic cache
function updateDynamicChache(dynamicCache, req, res) {
  if (res.ok) {
    caches.open(dynamicCache).then((cache) => cache.put(req, res));
    return res.clone();
  }
  return res;
}
