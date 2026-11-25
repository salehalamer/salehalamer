// ==========================================
// 1. الأحد: المتغيرات وأنواع البيانات والعمليات (10 تمارين قصيرة)
// ==========================================
const orgName = "عقول للتنمية المهنية"; // String
let weekNumber = 6; // Number
let isCompleted = false; // Boolean
let emptyValue = null; // Null
let notAssigned; // Undefined
const trackId = Symbol("web-dev"); // Symbol
const bigCounter = 1000000n; // BigInt

// عمليات حسابية ونصية أساسية
const sum = 15 + 25;
const difference = 50 - 18;
const product = 6 * 7;
const quotient = 100 / 4;
const remainder = 17 % 5;
const power = 2 ** 5;
const greeting = `أهلاً بك في ${orgName} - الأسبوع ${weekNumber}`;
const isHigherWeek = weekNumber >= 5;
const logicalCheck = (sum === 40) && !isCompleted;
const fallbackLabel = emptyValue ?? "قيمة افتراضية";

// ==========================================
// 2. الإثنين: الشروط والحلقات والتمارين المنطقية
// ==========================================
function evaluateScore(score) {
  if (score >= 90) {
    return "ممتاز";
  } else if (score >= 75) {
    return "جيد جداً";
  } else if (score >= 60) {
    return "ناجح";
  } else {
    return "يحتاج مراجعة";
  }
}

// حلقة تكرار لطباعة الأرقام الزوجية من 1 إلى 10
const evenNumbers = [];
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

// تمرين منطقي باستخدام while لحساب مجموع الأعداد من 1 إلى 5
let count = 1;
let totalUpToFive = 0;
while (count <= 5) {
  totalUpToFive += count;
  count++;
}

// ==========================================
// 3. الثلاثاء: الدوال والمصفوفات (map, filter, reduce)
// ==========================================
const initiativesData = [
  { name: "المنظمة الرقمية", hours: 20, active: true },
  { name: "المهنيون المحترفون", hours: 35, active: true },
  { name: "السحابة المهنية", hours: 15, active: false }
];

// دالة لإضافة وصف للساعات
function formatInitiative(item) {
  return `${item.name} (${item.hours} ساعة)`;
}

// map: تحويل المصفوفة إلى نصوص منسقة
const formattedList = initiativesData.map(formatInitiative);

// filter: تصفية المبادرات النشطة فقط
const activeInitiatives = initiativesData.filter((item) => item.active);

// reduce: حساب إجمالي الساعات
const totalHours = initiativesData.reduce((acc, item) => acc + item.hours, 0);

console.log({
  greeting,
  logicalCheck,
  fallbackLabel,
  grade: evaluateScore(88),
  evenNumbers,
  totalUpToFive,
  formattedList,
  activeInitiatives,
  totalHours
});
