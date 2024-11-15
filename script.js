const contents = [
    {
        id: 1,
        title: "About Me",
        body: `I'm a dedicated web developer with a passion for crafting responsive, visually captivating web experiences. Known for being hard-working, innovative, and detail-oriented, I bring proficiency in HTML5, CSS3, JavaScript, Vue.js, and NestJS to every project. My focus is on delivering user-friendly designs that not only look great but also perform seamlessly across all browsers. I'm a dedicated web developer with a passion for crafting responsive, visually captivating web experiences. Known for being hard-working, innovative, and detail-oriented, I bring proficiency in HTML5, CSS3, JavaScript, Vue.js, and NestJS to every project. My focus is on delivering user-friendly designs that not only look great but also perform seamlessly across all browsers`
    },
    {
        id: 2,
        title: "Technical Skills",
        body: `
            <ul>
              <li><strong>Semantic HTML</strong>,<br> <strong>CSS3</strong> / <strong>Tailwind CSS</strong>,<br> <strong>JavaScript</strong>, <strong>TypeScript</strong>,<br> <strong>Git</strong> (Version Control Management), <br><strong>GitHub</strong>, <br><strong>GitLab</strong>, <br><strong>Vue.js</strong> (Quasar Framework), <br><strong>NestJS</strong></li>
            </ul>
          `
    },
    {
        id: 3,
        title: "Projects",
        body: `
          <h4>1. Project One - Vue E-commerce Site</h4>
          <p>This is a fully functional e-commerce website built with Vue.js & Quasar. It supports user authentication, cart management. <strong> <a href="https://e-commerce-gzu0.onrender.com/#/" target="_blank">View Project</a><strong></p>
        `
      },
      {
        id: 4,
        title: "Contact Me",
        body: `
          <p>If you'd like to get in touch, feel free to reach out via any of the following platforms:</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/your-profile" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/oliseh001" target="_blank">GitHub</a></li>
            <li><a href="mailto:Onochieemeka2@gmail.com">Email</a></li>
            <li><a href="https://gitlab.com/oliseh001" target="_blank">GitLab</a></li>
            <li><a href="https://wa.me/2349042407534?text=Hi%20Oliseh%20Got%20Your%20Number%20From%20Your%20Portfolio" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>         
          </ul>
        `
      },


];
// ... rest of your code
Vue.createApp({
    data(){
        return{
            name: 'Olisemeka',
            links: [
                { id: 1, name: "Home", url: "/" },
                { id: 2, name: "Portfolio", url: "/portfolio" },
                { id: 3, name: "Contact Me", url: "/contact" },
              ],
        contents,
      darkModeSet: false,
      darkMode: {
        background: "#38383a",
        color: "whitesmoke",
      },
      base: {
        fontFamily: "monospace",
      },
    };
  },
  methods: {
    toggleMode() {
      this.darkModeSet = !this.darkModeSet;
    },
  },
}).mount("body");