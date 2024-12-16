let food = 'burGEr   ';
console.log(food, '.includes("bur") ->', food.includes('bur'));
console.log(food, '.trim() ->', food.trim());
console.log(food, '.split("bur") ->', food.split('bur'));
console.log(food, '.replace("r", "z") ->', food.replace('r', 'z'));
console.log(food, '.startsWith("bur") ->', food.startsWith('bur'));
console.log(food, '.endsWith("bur") ->', food.endsWith('bur'));
console.log(food, '.toLowerCase() ->', food.toLowerCase());
console.log(food, '.toUpperCase() ->', food.toUpperCase());

// Template Literal Example
console.log(`Bob loves ${food.toLowerCase()}`);