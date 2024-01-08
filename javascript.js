document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
  
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    });
});  

document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".tree").forEach(function(move) {

        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value / 260;
        var y = e.clientY * moving_value / 260;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var tooltip = document.getElementById("tooltip");
    var containerDiv = document.querySelector('.div-tooltip');

    if (containerDiv) {
        var locationDots = containerDiv.querySelectorAll('.location-dot');

        locationDots.forEach(function (locationDot) {
            locationDot.addEventListener("mousemove", function (event) {
                var hoveredElement = locationDot.closest('.flex').querySelector('h1');
                var text = "";
                var text2 = "";
                var text3 = "";
                var text4 = "";
                var text5 = "";
                var text6 = "";
                var text7 = "";
                var text8 = "";

                if (hoveredElement) {
                    var skillName = hoveredElement.textContent.trim();

                    switch (skillName) {
                        case "HTML & CSS":
                            text = "I acquired proficiency in HTML and CSS through self-learning, supplemented by beginner-level coursework in ICT within the IGCSE curriculum.";
                            text2 = "🗃️ Libraries and Frameworks:";
                            text3 = "Bootstrap";
                            text4 = "Tailwind CSS";
                            text5 = "SASS (Scripting Language)";
                            break;
                        case "JavaScript":
                            text = "I independently learned JavaScript by completing tasks on freeCodeCamp, gaining a solid foundation in the language.";
                            text2 = "🗃️ Libraries and Frameworks:";
                            text3 = "React";
                            text4 = "Redux";
                            text5 = "jQuery";
                            text6 = "D3.js";
                            text7 = "Node.js";
                            break;
                        case "Python":
                            text = "I acquired proficiency in Python during my Grade 12 studies in Computer Science (ICS4U), enabling me to apply the language effectively.";
                            text2 = "🗃️ Libraries and Frameworks:";
                            text3 = "BeautifulSoup";
                            text4 = "Tkinter";
                            text5 = "Requests";
                            break;
                        case "Other Libraries, Frameworks & Technologies":
                            text = "Here is a list of some libaries and frameworks I have used during my time coding.";
                            text2 = "🗃️ Libraries and Frameworks:";
                            text3 = "Flowbite";
                            text4 = "UI Verse";
                            text5 = "AJAX";
                            text6 = "Fetch API";
                            break;
                        default:
                            text = "Default text for other skills, showcasing adaptability and a willingness to learn new technologies.";
                            break;
                    }
                }

                tooltip.style.opacity = 1;
                tooltip.innerHTML =
                    '<div class="p-3 pb-0">' +
                        '<p class="mb-4 text-lg border-l-4 pl-4 border-mainRed">' + text + '</p>' +
                        '<p class="pb-4 text-xl">' + text2 + '</p>' +
                        '<div class="grid grid-cols-2">' +
                            '<p class="text-lg">' + text3 + '</p>' +
                            '<p class="text-lg">' + text4 + '</p>' +
                            '<p class="text-lg">' + text5 + '</p>' +
                            '<p class="text-lg">' + text6 + '</p>' +
                            '<p class="text-lg">' + text7 + '</p>' +
                        '</div>' +
                    '</div>';

                tooltip.style.left = event.pageX - tooltip.offsetWidth - 60 + "px";
                tooltip.style.top = event.pageY - 15 + "px";
            });

            locationDot.addEventListener("mouseout", function () {
                tooltip.style.opacity = 0;
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const animateHtmlElement = document.querySelector('.html');
    const animateJavascriptElement = document.querySelector('.javascript');
    const animatePythonElement = document.querySelector('.python');
    const animateOtherElement = document.querySelector('.other');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isElementInViewport(animateHtmlElement)) {
            animateHtmlElement.classList.add('animate-html');
            animateJavascriptElement.classList.add('animate-javascript');
            animatePythonElement.classList.add('animate-python');
            animateOtherElement.classList.add('animate-other');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});
