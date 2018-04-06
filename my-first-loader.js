module.exports = function loader(src) {
  const newSource = src.replace(".log", ".error")

  return newSource;
}
