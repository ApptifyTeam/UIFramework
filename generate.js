const breakpoints = ["base", "sm", "md", "lg", "xl", "2xl"];
const generateMap = (prefix) => {
  let output = `const ${prefix.replace(/-./g, x=>x[1].toUpperCase())}Map: Record<string, Record<number, string>> = {\n`;
  for (const bp of breakpoints) {
    output += `  "${bp}": { `;
    for (let i = 1; i <= 12; i++) {
      const cls = bp === "base" ? `${prefix}-${i}` : `${bp}:${prefix}-${i}`;
      output += `${i}: "${cls}", `;
    }
    output += `},\n`;
  }
  output += `};\n`;
  return output;
};

console.log(generateMap("grid-cols"));
console.log(generateMap("col-span"));
