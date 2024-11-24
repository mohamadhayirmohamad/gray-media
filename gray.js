document.addEventListener("DOMContentLoaded", function() {
  const grayText = document.querySelector('.gray');
  const mediaText = document.querySelector('.media');
  
  // تأخير الأنيميشن للنص "GRAY" ليظهر من الجهة اليمنى
  setTimeout(() => {
      grayText.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      grayText.style.transform = "translateX(0)";  // النص يأتي إلى مكانه الطبيعي
      grayText.style.opacity = 1;
  }, 100);  // يبدأ الأنيميشن بعد 100ms

  // تأخير الأنيميشن للنص "MEDIA" ليظهر من الجهة اليسرى
  setTimeout(() => {
      mediaText.style.transition = "transform 1.5s ease-out, opacity 1s ease-out";
      mediaText.style.transform = "translateX(0)";  // النص يأتي إلى مكانه الطبيعي
      mediaText.style.opacity = 1;
  }, 2000);  // يبدأ الأنيميشن بعد 1500ms
});





// 2 page 
document.addEventListener('DOMContentLoaded', function () {
  function startCounting(counterId, maxNumber) {
      let counter = document.getElementById(counterId);
      if (!counter) return;

      let count = 0;

      let interval = setInterval(() => {
          counter.textContent = count;
          count++;
          if (count > maxNumber) {
              clearInterval(interval);
          }
      }, 250);
  }

  let hasStartedCounting = false;

  window.addEventListener('scroll', function () {
      let section1 = document.getElementById('section1');

      let rect1 = section1.getBoundingClientRect();

      if (!hasStartedCounting && rect1.top <= window.innerHeight && rect1.bottom >= 0) {
          hasStartedCounting = true;

          startCounting('counter1', 1);
          startCounting('counter2', 2);
          startCounting('counter3', 3);
          startCounting('counter4', 4);
          startCounting('counter5', 5);
          startCounting('counter6', 6);
          startCounting('counter7', 7);
          startCounting('counter8', 8);
          startCounting('counter9', 9);
          startCounting('counter10', 10);
      }
  });
});
      









// نسب البيانات


document.addEventListener('DOMContentLoaded', function () {
  const dataPercentages = [34, 65]; // النسب المئوية
  const colors = ['#303030', 'rgb(126, 126, 126)']; // ألوان الرسم البياني
  let animationInProgress = false;

  function animateChart() {
    if (animationInProgress) return; // منع تشغيل الأنيميشن مرة أخرى
    animationInProgress = true;

    const chart = document.querySelector('.wheel-chart-container');
    const percentageDisplay = document.getElementById('percentage-display');
    const indicatorValue1 = document.getElementById('indicator-value-1');
    const indicatorValue2 = document.getElementById('indicator-value-2');

    let progress1 = 0;
    let progress2 = 0;
    const totalDuration = 2500; // مدة الأنيميشن
    const fps = 240; // معدل الإطارات
    const interval = totalDuration / fps; // الفاصل الزمني لكل إطار
    const step1 = dataPercentages[0] / fps; // مقدار الزيادة لكل إطار
    const step2 = dataPercentages[1] / fps;

    const animation = setInterval(() => {
      if (progress1 < dataPercentages[0]) {
        progress1 += step1;
        progress1 = Math.min(progress1, dataPercentages[0]);
      }

      if (progress2 < dataPercentages[1]) {
        progress2 += step2;
        progress2 = Math.min(progress2, dataPercentages[1]);
      }

      // تحديث الخلفية فقط
      chart.style.background = `conic-gradient(
        ${colors[0]} 0% ${progress1}%, 
        ${colors[1]} ${progress1}% 100%
      )`;

      // تحديث النصوص
      percentageDisplay.textContent = `${Math.round(progress1 + progress2)}%`;
      indicatorValue1.textContent = `${Math.round(progress1)}%`;
      indicatorValue2.textContent = `${Math.round(progress2)}%`;

      // إنهاء الأنيميشن عند الوصول للنسب المطلوبة
      if (progress1 === dataPercentages[0] && progress2 === dataPercentages[1]) {
        clearInterval(animation);
        animationInProgress = false; // إعادة تعيين حالة الأنيميشن
      }
    }, interval);
  }

  // بدء الأنيميشن عند ظهور العنصر في الشاشة
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateChart(); // بدء الأنيميشن عند رؤية العنصر
        }
      });
    },
    { threshold: 0.5 } // بدء الأنيميشن عند ظهور 50% من العنصر
  );

  const chartContainer = document.getElementById('chart-container');
  observer.observe(chartContainer);
});




// إعداد Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // الشاشة الحالية
    threshold: 0.5, // ظهور 50% من العنصر على الأقل
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // مراقبة الحاوية التي تحتوي على الأنيميشن
  const animationContainer = document.querySelector(".animation-container");
  observer.observe(animationContainer);
});



// page-5

// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const cards = document.querySelectorAll(".animate-card");

  // Change navbar background on scroll
  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });

  // Show cards on scroll
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
              }
          });
      },
      { threshold: 0.1 }
  );

  cards.forEach((card) => {
      observer.observe(card);
  });
});

      


document.addEventListener("DOMContentLoaded", function () {
  // تحديد العنصر الذي نريد مراقبته
  const heroSection = document.querySelector("#hero");

  // استخدام IntersectionObserver لمراقبة ظهور العنصر على الشاشة
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // إضافة الفئة "active" عند ظهور العنصر
          document.querySelector(".animate-heading").classList.add("active");
          document.querySelector(".animate-paragraph").classList.add("active");
        }
      });
    },
    {
      threshold: 0.5, // يبدأ عند 50% من ظهور العنصر
    }
  );

  // مراقبة القسم المطلوب
  observer.observe(heroSection);
});


//  page-7


     // Counter Functionality with Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.stat-number');

  const startCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = Math.ceil(target / 100);
    let count = 0;

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.innerText = count > target ? target : count;
        setTimeout(updateCounter, 90);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  };

  // Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          startCounter(counter);
          observer.unobserve(counter); // Stop observing after starting
        }
      });
    },
    {
      threshold: 0.6, // Trigger when 50% of the section is visible
    }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
 










document.addEventListener("DOMContentLoaded", function () {
  const charts = [
    { id: "chart-percentage-1", percentage: 33, color: "#292929" }, // الأول
    { id: "chart-percentage-2", percentage: 67, color: "#292929" }, // الثاني
    { id: "chart-percentage-3", percentage: 91, color: "#292929" }, // الثالث
  ];

  const animationDuration = 2000; // مدة الأنيميشن (بالميلي ثانية)
  const fps = 360; // معدل الإطارات
  const totalFrames = (animationDuration / 1000) * fps;

  function animateChart(chartElement, targetPercentage, color) {
    const chart = chartElement.parentNode;
    let currentPercentage = 0;
    const increment = targetPercentage / totalFrames;

    const interval = setInterval(() => {
      currentPercentage += increment;
      if (currentPercentage >= targetPercentage) {
        currentPercentage = targetPercentage;
        clearInterval(interval);
      }

      chart.style.background = `conic-gradient(
        ${color} 0% ${currentPercentage}%,
        gray ${currentPercentage}% 100%
      )`;

      chartElement.textContent = `${Math.round(currentPercentage)}%`;
    }, 1000 / fps);
  }

  // بدء الأنيميشن عند رؤية العنصر
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          charts.forEach((chart) => {
            const chartElement = document.getElementById(chart.id);
            animateChart(chartElement, chart.percentage, chart.color);
          });
        }
      });
    },
    { threshold: 0.5 } // بدء الأنيميشن عند ظهور 50% من العنصر
  );

  // مراقبة جميع الدواليب
  const chartSection = document.getElementById("pie-chart-section");
  observer.observe(chartSection);
});









