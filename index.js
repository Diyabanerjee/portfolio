const textElement = document.getElementById("changingText");
const skills = [
  "Full Stack Web Developer",
  "Web Designer",
  "Microsoft Azure Fundamental Certified",
]; // Add more skills here if needed
// let currentIndex = 0;

// function animateText() {
//   const currentSkill = skills[currentIndex];

//   textElement.classList.add("fade-out");

//   setTimeout(() => {
//     textElement.textContent = currentSkill;
//     textElement.classList.remove("fade-out");
//     textElement.classList.add("fade-in");
//   }, 500);

//   currentIndex = (currentIndex + 1) % skills.length;
// }

// setInterval(animateText, 3000); // Change the skill every 3 seconds
// const textElement = document.getElementById("changingText");
// const skills = ["React", "Node", "Python"]; // Add more skills here if needed
let currentIndex = 0;

function animateText() {
  const currentSkill = skills[currentIndex];
  textElement.textContent = "";
  let index = 0;

  const typingInterval = setInterval(() => {
    textElement.textContent += currentSkill[index];
    index++;

    if (index === currentSkill.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        textElement.textContent = "";
        currentIndex = (currentIndex + 1) % skills.length;
        animateText();
      }, 1500);
    }
  }, 100);
}

animateText(); // Start the animation
//// Get the slider element
const slider = document.querySelector(".slider");

// Get all the slide elements
const slides = Array.from(slider.querySelectorAll(".slide"));

// Set the index of the initially active slide
let currentSlideIndex = 0;

// Function to change the active slide
function changeActiveSlide() {
  // Remove the active class from the current slide
  slides[currentSlideIndex].classList.remove("active");

  // Calculate the index of the next slide
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Add the active class to the next slide
  slides[currentSlideIndex].classList.add("active");
}

// Function to rotate the slider every 3 seconds
function rotateSlider() {
  changeActiveSlide();
  setTimeout(rotateSlider, 4000); // 3000 milliseconds = 3 seconds
}

// Start rotating the slider
rotateSlider();

function sendEmail(event, form) {
  event.preventDefault(); // Prevent form submission

  var recipient = form.recipient.value;
  var subject = form.subject.value;
  var body = form.body.value;

  // Your email sending logic here
  // Use the recipient, subject, and body variables as needed for sending the email
  emailjs
    .send(
      "service_vhrizyo",
      "template_w9921ua",
      {
        to_email: recipient,
        from_name: "YOUR_NAME",
        subject: subject,
        message_html: body,
      },
      "ADP-LA7nFrTshuSYH"
    )
    .then(
      function (response) {
        alert("Message sent successfully!");
        // Optionally, clear the form inputs
        document.getElementById("recipient").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("body").value = "";
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("An error occurred while sending the email.");
      }
    );
  // Optionally, you can display a success message or perform other actions
  //   alert(recipient, subject, body);
  // Reset the form if needed
  form.reset();
}
