// 1. التحقق من الزوجي أو الفردي
function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "زوجي";
  }
  return "فردي";
}

// 2. إيجاد أكبر رقم في مصفوفة
function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// 3. حساب مجموع الأرقام الموجبة فقط في مصفوفة
function sumPositive(numbers) {
  let sum = 0;
  for (const num of numbers) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

// 4. عكس نص
function reverseString(text) {
  return text.split("").reverse().join("");
}

// 5. حساب عدد العناصر النشطة في مصفوفة كائنات
function countActiveItems(items) {
  let count = 0;
  for (const item of items) {
    if (item.active === true) {
      count++;
    }
  }
  return count;
}
