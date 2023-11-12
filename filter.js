//Filter

// 1) filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে.
// 2) যতগুলো পাবে তত খুলো দিবে । না পাইলে খালি এরে দিবে
// 3) ফিল্টার  চেকপয়েন্ট অথবা শর্ত  সাপেক্ষে   কিছু এলিমেন্ট কে নিবে আবার কিছু এলিমেন্ট কে নিবে  না |


const products = [
    { id: 1, name: "apple", price: 500, color: "golden" },
    { id: 2, name: "xiaomi", price: 124, color: "black" },
    { id: 3, name: "samsung", price: 200, color: "black" },
    { id: 4, name: "samsung2", price: 200, color: "black" },
    { id: 5, name: "lenovo", price: 300, color: "pink" },
    { id: 6, name: "xiaomi", price: 100, color: "pink" },
    { id: 7, name: "lenovo", price: 300, color: "pink" },
  ];

  const result = products.filter(pd => pd.id != 1); //1 sara shob gula dwa condition
  console.log(result)